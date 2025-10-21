/**
 * OpenAI provider implementation
 * Maintains compatibility with existing OpenAI-based setup
 */

import type {
  ILLMProvider,
  LLMRequest,
  LLMResult,
  LLMResponse,
  LLMError,
  LLMStreamChunk,
} from "./types";
import { createLogger } from "@/lib/log";

type CircuitState = "closed" | "open" | "half-open";

type FetchFn = typeof fetch;

export type OpenAIProviderConfig = {
  baseUrl: string;
  apiKey: string;
  maxRetries?: number;
  timeoutMs?: number;
  breakerFailureThreshold?: number;
  breakerResetMs?: number;
  fetchImpl?: FetchFn;
};

/**
 * OpenAI-compatible provider (works with OpenAI, Groq, etc.)
 */
export class OpenAIProvider implements ILLMProvider {
  private readonly logger = createLogger("OpenAIProvider");
  private readonly baseUrl: string;
  private readonly apiKey: string;
  private readonly timeoutMs: number;
  private readonly maxRetries: number;
  private readonly breakerFailureThreshold: number;
  private readonly breakerResetMs: number;
  private readonly fetchImpl: FetchFn;

  private state: CircuitState = "closed";
  private failures = 0;
  private nextAttemptAt = 0;

  constructor(config: OpenAIProviderConfig) {
    this.baseUrl = config.baseUrl.replace(/\/$/, "");
    this.apiKey = config.apiKey;
    this.timeoutMs = config.timeoutMs ?? 12_000;
    this.maxRetries = config.maxRetries ?? 2;
    this.breakerFailureThreshold = config.breakerFailureThreshold ?? 3;
    this.breakerResetMs = config.breakerResetMs ?? 30_000;
    this.fetchImpl = config.fetchImpl ?? fetch;
  }

  public getProviderName(): "openai" {
    return "openai";
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
    _request: LLMRequest,
  ): AsyncGenerator<LLMStreamChunk, LLMResponse | LLMError, undefined> {
    // OpenAI streaming not yet implemented - would use SSE parsing
    throw new Error("Streaming not implemented for OpenAI provider");
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
        await this.waitForBackoff(attempt);
        attempt += 1;
      }
    }

    return lastError ?? { type: "error", error_type: "api_error", message: "Unknown error" };
  }

  private async tryGenerateOnce(request: LLMRequest): Promise<LLMResponse> {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), this.timeoutMs);

    try {
      const payload = {
        model: request.model,
        messages: request.messages,
        temperature: request.temperature ?? 0.2,
      };

      const startTime = Date.now();

      const response = await this.fetchImpl(`${this.baseUrl}/chat/completions`, {
        method: "POST",
        headers: this.buildHeaders(),
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      if (!response.ok) {
        const text = await response.text().catch(() => "");
        throw new Error(`OpenAI API error ${response.status}: ${text}`);
      }

      const body = (await response.json()) as {
        choices?: Array<{ message?: { content?: string } }>;
        usage?: {
          prompt_tokens?: number;
          completion_tokens?: number;
          total_tokens?: number;
        };
        model?: string;
      };

      const duration = Date.now() - startTime;

      const text = body.choices?.[0]?.message?.content ?? "";
      const usage = {
        input_tokens: body.usage?.prompt_tokens ?? 0,
        output_tokens: body.usage?.completion_tokens ?? 0,
        total_tokens: body.usage?.total_tokens ?? 0,
      };

      this.logger.info("OpenAI request completed", {
        model: request.model,
        durationMs: duration,
        inputTokens: usage.input_tokens,
        outputTokens: usage.output_tokens,
      });

      return {
        type: "success",
        content: [{ type: "text", text }],
        text,
        stop_reason: "end_turn",
        usage,
        model: body.model ?? request.model,
      };
    } finally {
      clearTimeout(timeout);
    }
  }

  private buildHeaders(): Record<string, string> {
    return {
      Authorization: `Bearer ${this.apiKey}`,
      "Content-Type": "application/json",
    };
  }

  private handleError(error: unknown): LLMError {
    if (error instanceof Error && error.name === "AbortError") {
      return {
        type: "error",
        error_type: "timeout",
        message: `Request timed out after ${this.timeoutMs}ms`,
      };
    }

    const message = error instanceof Error ? error.message : String(error);

    // Try to parse status code from error message
    const statusMatch = /error (\d{3})/.exec(message);
    const status = statusMatch ? Number.parseInt(statusMatch[1], 10) : undefined;

    if (status === 429) {
      return {
        type: "error",
        error_type: "rate_limit",
        message,
        status_code: status,
      };
    }

    if (status === 401 || status === 403) {
      return {
        type: "error",
        error_type: "authentication",
        message,
        status_code: status,
      };
    }

    if (status && status >= 400 && status < 500) {
      return {
        type: "error",
        error_type: "invalid_request",
        message,
        status_code: status,
      };
    }

    return {
      type: "error",
      error_type: "api_error",
      message,
      status_code: status,
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
