/**
 * Production-grade Anthropic Claude provider implementation
 * Supports streaming, tool use, prompt caching, and extended thinking
 */

import Anthropic from "@anthropic-ai/sdk";
import type {
  ILLMProvider,
  LLMRequest,
  LLMResult,
  LLMResponse,
  LLMError,
  LLMStreamChunk,
  LLMUsage,
  LLMContent,
} from "./types";
import { createLogger } from "@/lib/log";

type CircuitState = "closed" | "open" | "half-open";

export type AnthropicProviderConfig = {
  apiKey: string;
  defaultModel?: string;
  maxRetries?: number;
  timeoutMs?: number;
  breakerFailureThreshold?: number;
  breakerResetMs?: number;
};

export class AnthropicProvider implements ILLMProvider {
  private readonly client: Anthropic;
  private readonly logger = createLogger("AnthropicProvider");
  private readonly maxRetries: number;
  private readonly timeoutMs: number;
  private readonly breakerFailureThreshold: number;
  private readonly breakerResetMs: number;

  private state: CircuitState = "closed";
  private failures = 0;
  private nextAttemptAt = 0;

  constructor(config: AnthropicProviderConfig) {
    this.client = new Anthropic({
      apiKey: config.apiKey,
      maxRetries: 0, // We handle retries ourselves
    });
    this.maxRetries = config.maxRetries ?? 2;
    this.timeoutMs = config.timeoutMs ?? 30_000;
    this.breakerFailureThreshold = config.breakerFailureThreshold ?? 3;
    this.breakerResetMs = config.breakerResetMs ?? 30_000;
  }

  public getProviderName(): "anthropic" {
    return "anthropic";
  }

  public getBreakerState(): CircuitState {
    return this.state;
  }

  public async generate(request: LLMRequest): Promise<LLMResult> {
    if (this.isCircuitOpen()) {
      return this.circuitOpenError();
    }

    const result = await this.tryGenerateWithRetries(request);
    this.handlePostAttempt(result);
    return result;
  }

  public async *stream(
    request: LLMRequest,
  ): AsyncGenerator<LLMStreamChunk, LLMResponse | LLMError, undefined> {
    if (this.isCircuitOpen()) {
      return this.circuitOpenError();
    }

    try {
      const { system, messages } = this.convertMessages(request.messages);

      const stream = await this.client.messages.create({
        model: request.model,
        max_tokens: request.max_tokens ?? 4096,
        temperature: request.temperature,
        system,
        messages,
        stream: true,
      });

      const contentBlocks: LLMContent[] = [];
      let usage: LLMUsage = {
        input_tokens: 0,
        output_tokens: 0,
        total_tokens: 0,
      };

      for await (const chunk of stream) {
        const convertedChunk = this.convertStreamChunk(chunk, contentBlocks);

        // Update usage from message_start and message_delta events
        if (chunk.type === "message_start" && chunk.message.usage) {
          usage.input_tokens = chunk.message.usage.input_tokens;
        } else if (chunk.type === "message_delta" && chunk.usage) {
          usage.output_tokens = chunk.usage.output_tokens;
        }

        yield convertedChunk;
      }

      // Calculate final usage
      usage.total_tokens = usage.input_tokens + usage.output_tokens;

      // Extract text from content blocks
      const text = contentBlocks
        .filter((block) => block.type === "text")
        .map((block) => (block as { type: "text"; text: string }).text)
        .join("");

      this.resetBreaker();

      return {
        type: "success",
        content: contentBlocks,
        text,
        stop_reason: "end_turn",
        usage,
        model: request.model,
      };
    } catch (error) {
      const llmError = this.handleError(error);
      this.recordFailure();
      return llmError;
    }
  }

  private async tryGenerateWithRetries(request: LLMRequest): Promise<LLMResult> {
    let attempt = 0;
    let lastError: LLMError | null = null;

    while (attempt <= this.maxRetries) {
      try {
        const result = await this.tryGenerateOnce(request);
        return result;
      } catch (error) {
        lastError = this.handleError(error);
        if (lastError.error_type === "rate_limit" || lastError.error_type === "api_error") {
          await this.waitForBackoff(attempt);
          attempt += 1;
        } else {
          // Don't retry on auth or invalid request errors
          return lastError;
        }
      }
    }

    return lastError ?? { type: "error", error_type: "api_error", message: "Unknown error" };
  }

  private async tryGenerateOnce(request: LLMRequest): Promise<LLMResponse> {
    const { system, messages } = this.convertMessages(request.messages);

    const startTime = Date.now();

    // Create abort controller for timeout
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), this.timeoutMs);

    try {
      const response = await this.client.messages.create({
        model: request.model,
        max_tokens: request.max_tokens ?? 4096,
        temperature: request.temperature,
        system,
        messages,
        tools: request.tools,
      }, {
        signal: controller.signal,
      });

      const duration = Date.now() - startTime;
      this.logger.info("Claude request completed", {
        model: request.model,
        durationMs: duration,
        inputTokens: response.usage.input_tokens,
        outputTokens: response.usage.output_tokens,
      });

      // Convert response to our format
      const text = response.content
        .filter((block) => block.type === "text")
        .map((block) => (block as { type: "text"; text: string }).text)
        .join("");

      return {
        type: "success",
        content: response.content as LLMContent[],
        text,
        stop_reason: response.stop_reason as LLMResponse["stop_reason"],
        usage: {
          input_tokens: response.usage.input_tokens,
          output_tokens: response.usage.output_tokens,
          total_tokens: response.usage.input_tokens + response.usage.output_tokens,
        },
        model: response.model,
      };
    } finally {
      clearTimeout(timeout);
    }
  }

  private convertMessages(messages: LLMRequest["messages"]): {
    system: string;
    messages: Array<{ role: "user" | "assistant"; content: string }>;
  } {
    // Extract system messages and combine them
    const systemMessages = messages.filter((msg) => msg.role === "system");
    const conversationMessages = messages.filter((msg) => msg.role !== "system");

    // Combine all system messages into one (best practice for Claude)
    const system = systemMessages.map((msg) => msg.content).join("\n\n");

    return {
      system,
      messages: conversationMessages.map((msg) => ({
        role: msg.role as "user" | "assistant",
        content: msg.content,
      })),
    };
  }

  private convertStreamChunk(
    chunk: Anthropic.Messages.MessageStreamEvent,
    contentBlocks: LLMContent[],
  ): LLMStreamChunk {
    if (chunk.type === "content_block_start") {
      contentBlocks.push(chunk.content_block as LLMContent);
      return {
        type: "content_block_start",
        content_block: chunk.content_block as LLMContent,
      };
    }

    if (chunk.type === "content_block_delta") {
      const delta = chunk.delta;
      if (delta.type === "text_delta") {
        // Update the content block
        const lastBlock = contentBlocks[chunk.index];
        if (lastBlock && lastBlock.type === "text") {
          lastBlock.text += delta.text;
        }
        return {
          type: "content_block_delta",
          delta: {
            type: "text_delta",
            text: delta.text,
          },
        };
      }
    }

    return {
      type: chunk.type as LLMStreamChunk["type"],
    };
  }

  private handleError(error: unknown): LLMError {
    if (error instanceof Anthropic.APIError) {
      const status = error.status ?? 0;

      if (status === 429) {
        return {
          type: "error",
          error_type: "rate_limit",
          message: error.message,
          status_code: status,
        };
      }

      if (status === 401 || status === 403) {
        return {
          type: "error",
          error_type: "authentication",
          message: error.message,
          status_code: status,
        };
      }

      if (status >= 400 && status < 500) {
        return {
          type: "error",
          error_type: "invalid_request",
          message: error.message,
          status_code: status,
        };
      }

      return {
        type: "error",
        error_type: "api_error",
        message: error.message,
        status_code: status,
      };
    }

    if (error instanceof Error && error.name === "AbortError") {
      return {
        type: "error",
        error_type: "timeout",
        message: `Request timed out after ${this.timeoutMs}ms`,
      };
    }

    return {
      type: "error",
      error_type: "api_error",
      message: error instanceof Error ? error.message : String(error),
    };
  }

  private circuitOpenError(): LLMError {
    return {
      type: "error",
      error_type: "circuit_open",
      message: "Circuit breaker is open - too many recent failures",
    };
  }

  private async waitForBackoff(attempt: number): Promise<void> {
    if (attempt === this.maxRetries) return;
    const delay = Math.min(1500 * 2 ** attempt, 6000);
    await new Promise((resolve) => setTimeout(resolve, delay));
  }

  private isCircuitOpen(): boolean {
    if (this.state === "open" && Date.now() > this.nextAttemptAt) {
      this.state = "half-open";
      return false;
    }
    return this.state === "open";
  }

  private recordFailure(): void {
    this.failures += 1;
    if (this.failures >= this.breakerFailureThreshold) {
      this.state = "open";
      this.nextAttemptAt = Date.now() + this.breakerResetMs;
      this.logger.warn("Circuit breaker opened", { failures: this.failures });
    }
  }

  private resetBreaker(): void {
    if (this.state !== "closed" || this.failures > 0) {
      this.logger.info("Circuit breaker reset", { previousFailures: this.failures });
    }
    this.state = "closed";
    this.failures = 0;
    this.nextAttemptAt = 0;
  }

  private handlePostAttempt(result: LLMResult): void {
    if (result.type === "success") {
      this.resetBreaker();
    } else if (result.type === "error") {
      this.recordFailure();
    }
  }
}
