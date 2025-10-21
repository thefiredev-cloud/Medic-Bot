/**
 * LLM Provider Factory
 * Creates the appropriate provider based on configuration
 */

import { AnthropicProvider } from "./anthropic-provider";
import { OpenAIProvider } from "./openai-provider";
import type { ILLMProvider } from "./types";
import { createLogger } from "@/lib/log";

const logger = createLogger("ProviderFactory");

export type ProviderConfig = {
  provider: "openai" | "anthropic";
  apiKey: string;
  baseUrl?: string; // Only for OpenAI-compatible endpoints
  model: string;
  maxRetries?: number;
  timeoutMs?: number;
  fetchImpl?: typeof fetch;
};

/**
 * Create an LLM provider instance based on configuration
 */
export function createLLMProvider(config: ProviderConfig): ILLMProvider {
  logger.info("Creating LLM provider", { provider: config.provider, model: config.model });

  if (config.provider === "anthropic") {
    return new AnthropicProvider({
      apiKey: config.apiKey,
      defaultModel: config.model,
      maxRetries: config.maxRetries,
      timeoutMs: config.timeoutMs ?? 30_000, // Claude needs more time
    });
  }

  if (config.provider === "openai") {
    if (!config.baseUrl) {
      throw new Error("OpenAI provider requires baseUrl configuration");
    }

    return new OpenAIProvider({
      baseUrl: config.baseUrl,
      apiKey: config.apiKey,
      maxRetries: config.maxRetries,
      timeoutMs: config.timeoutMs ?? 12_000,
      fetchImpl: config.fetchImpl,
    });
  }

  throw new Error(`Unknown provider: ${config.provider as string}`);
}

/**
 * Auto-detect provider from environment and create appropriate instance
 */
export function createProviderFromEnv(): ILLMProvider {
  const provider = (process.env.LLM_PROVIDER ?? "openai").toLowerCase() as "openai" | "anthropic";
  const apiKey = process.env.LLM_API_KEY ?? process.env.ANTHROPIC_API_KEY ?? "";
  const model = process.env.LLM_MODEL ?? "gpt-4o-mini";
  const baseUrl = process.env.LLM_BASE_URL;

  if (!apiKey) {
    throw new Error("LLM_API_KEY or ANTHROPIC_API_KEY environment variable is required");
  }

  return createLLMProvider({
    provider,
    apiKey,
    baseUrl,
    model,
    fetchImpl: (globalThis as unknown as { fetch: typeof fetch }).fetch,
  });
}
