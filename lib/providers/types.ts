/**
 * Production-grade LLM provider abstractions
 * Supports multiple providers (OpenAI, Anthropic) with unified interface
 */

export type LLMMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

export type LLMTool = {
  name: string;
  description: string;
  input_schema: {
    type: "object";
    properties: Record<string, unknown>;
    required?: string[];
  };
};

export type LLMRequest = {
  model: string;
  messages: LLMMessage[];
  temperature?: number;
  max_tokens?: number;
  tools?: LLMTool[];
  stream?: boolean;
};

export type LLMUsage = {
  input_tokens: number;
  output_tokens: number;
  total_tokens: number;
  cache_read_tokens?: number;
  cache_creation_tokens?: number;
};

export type LLMToolUse = {
  type: "tool_use";
  id: string;
  name: string;
  input: Record<string, unknown>;
};

export type LLMTextContent = {
  type: "text";
  text: string;
};

export type LLMContent = LLMTextContent | LLMToolUse;

export type LLMResponse = {
  type: "success";
  content: LLMContent[];
  text: string; // Convenience field - concatenated text from all text blocks
  stop_reason: "end_turn" | "max_tokens" | "tool_use" | "stop_sequence";
  usage: LLMUsage;
  model: string;
};

export type LLMStreamChunk = {
  type: "content_block_start" | "content_block_delta" | "content_block_stop" | "message_start" | "message_delta" | "message_stop";
  delta?: {
    type: "text_delta" | "input_json_delta";
    text?: string;
    partial_json?: string;
  };
  content_block?: LLMContent;
  message?: {
    usage?: Partial<LLMUsage>;
  };
};

export type LLMError = {
  type: "error";
  error_type: "api_error" | "rate_limit" | "invalid_request" | "authentication" | "timeout" | "circuit_open";
  message: string;
  status_code?: number;
};

export type LLMResult = LLMResponse | LLMError;

/**
 * Provider-agnostic LLM client interface
 */
export interface ILLMProvider {
  /**
   * Send a non-streaming request
   */
  generate(request: LLMRequest): Promise<LLMResult>;

  /**
   * Send a streaming request
   */
  stream(request: LLMRequest): AsyncGenerator<LLMStreamChunk, LLMResponse | LLMError, undefined>;

  /**
   * Get current circuit breaker state
   */
  getBreakerState(): "closed" | "open" | "half-open";

  /**
   * Get provider name
   */
  getProviderName(): "openai" | "anthropic";
}
