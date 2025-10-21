/**
 * Production-grade LLM Client V2
 * Uses provider abstraction layer for Claude and OpenAI support
 * Maintains backward compatibility with existing LLMClient interface
 */

import type { ILLMProvider, LLMRequest } from "@/lib/providers";
import { createProviderFromEnv } from "@/lib/providers/factory";
import { createLogger } from "@/lib/log";

type ChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

type ChatPayload = {
  model: string;
  messages: ChatMessage[];
  temperature?: number;
  max_tokens?: number;
};

type CircuitState = "closed" | "open" | "half-open";

export type LLMClientResult =
  | { type: "success"; text: string; usage?: { input_tokens: number; output_tokens: number; total_tokens: number } }
  | { type: "circuit-open" }
  | { type: "error"; message: string };

/**
 * Production-grade LLM client with provider abstraction
 * Drop-in replacement for legacy LLMClient
 */
export class LLMClientV2 {
  private readonly provider: ILLMProvider;
  private readonly logger = createLogger("LLMClientV2");

  constructor(provider?: ILLMProvider) {
    this.provider = provider ?? createProviderFromEnv();
    this.logger.info("Initialized LLM client", {
      provider: this.provider.getProviderName(),
    });
  }

  public getBreakerState(): CircuitState {
    return this.provider.getBreakerState();
  }

  public async sendChat(payload: ChatPayload): Promise<LLMClientResult> {
    const request: LLMRequest = {
      model: payload.model,
      messages: payload.messages,
      temperature: payload.temperature ?? 0.2,
      max_tokens: payload.max_tokens ?? 4096,
    };

    const result = await this.provider.generate(request);

    if (result.type === "error") {
      if (result.error_type === "circuit_open") {
        return { type: "circuit-open" };
      }

      this.logger.error("LLM request failed", {
        error_type: result.error_type,
        message: result.message,
        status_code: result.status_code,
      });

      return {
        type: "error",
        message: result.message,
      };
    }

    this.logger.info("LLM request succeeded", {
      provider: this.provider.getProviderName(),
      model: result.model,
      input_tokens: result.usage.input_tokens,
      output_tokens: result.usage.output_tokens,
      total_tokens: result.usage.total_tokens,
    });

    return {
      type: "success",
      text: result.text,
      usage: result.usage,
    };
  }

  /**
   * Stream chat responses (for future SSE implementation)
   */
  public async *streamChat(payload: ChatPayload): AsyncGenerator<string, void, undefined> {
    const request: LLMRequest = {
      model: payload.model,
      messages: payload.messages,
      temperature: payload.temperature ?? 0.2,
      max_tokens: payload.max_tokens ?? 4096,
      stream: true,
    };

    const stream = this.provider.stream(request);

    for await (const chunk of stream) {
      if (chunk.type === "content_block_delta" && chunk.delta?.type === "text_delta") {
        yield chunk.delta.text ?? "";
      }
    }
  }
}
