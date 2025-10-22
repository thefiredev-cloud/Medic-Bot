/**
 * Production-grade streaming chat service with Claude integration
 * Supports real token-by-token streaming and agent orchestration
 */

import type { ChatMessage } from "@/app/types/chat";
import { createLogger } from "@/lib/log";
import { EnvironmentManager } from "@/lib/managers/environment-manager";
import type { ILLMProvider, LLMStreamChunk } from "@/lib/providers";
import { createProviderFromEnv } from "@/lib/providers/factory";
import { metrics } from "@/lib/managers/metrics-manager";
import type { TriageResult } from "@/lib/triage";
import { CitationService } from "@/lib/services/chat/CitationService";
import { PayloadBuilder } from "@/lib/services/chat/PayloadBuilder";
import { TriageService } from "@/lib/services/chat/TriageService";
import { RetrievalManager } from "@/lib/managers/RetrievalManager";
import type { ChatResponse } from "@/lib/managers/chat-service";

type StreamCallback = (chunk: string) => void;

/**
 * Production-grade streaming service
 * Uses new provider system for real streaming
 */
export class StreamingChatService {
  private readonly env = EnvironmentManager.load();
  private readonly logger = createLogger("StreamingChatService");
  private readonly provider: ILLMProvider;
  private readonly retrieval = new RetrievalManager();
  private readonly triageService: TriageService;
  private readonly payloadBuilder: PayloadBuilder;
  private readonly citationService: CitationService;

  constructor(provider?: ILLMProvider) {
    this.provider = provider ?? createProviderFromEnv();
    this.triageService = new TriageService();
    this.payloadBuilder = new PayloadBuilder(this.env.llmModel, 0.2);
    this.citationService = new CitationService();

    this.logger.info("Initialized streaming service", {
      provider: this.provider.getProviderName(),
      model: this.env.llmModel,
    });
  }

  /**
   * Stream chat response with real token-by-token streaming
   */
  public async *streamChat(
    messages: ChatMessage[],
    onCitations?: (citations: ChatResponse["citations"]) => void,
  ): AsyncGenerator<string, ChatResponse, undefined> {
    const startTime = Date.now();
    metrics.inc("chat.stream.requests.v2");

    try {
      // 1. Triage and retrieval
      const latestUser = this.getLatestUserMessage(messages);
      const triage = this.triageService.build(latestUser);
      const searchQuery = this.triageService.buildSearchQuery(latestUser, triage);
      const retrieval = await this.retrieval.search({ rawText: searchQuery, maxChunks: 6 });

      // 2. Build payload with consolidated system message
      const intake = this.triageService.buildIntake(triage);
      const payload = this.payloadBuilder.build(retrieval.context, intake, messages);

      // 3. Get citations early
      const citations = this.citationService.build(retrieval.hits, triage);
      if (onCitations) {
        onCitations(citations);
      }

      // 4. Stream from provider
      const request = {
        model: payload.model,
        messages: payload.messages,
        temperature: payload.temperature,
        max_tokens: 4096,
        stream: true,
      };

      let fullText = "";
      const stream = this.provider.stream(request);

      for await (const chunk of stream) {
        if (chunk.type === "content_block_delta" && chunk.delta?.type === "text_delta") {
          const text = chunk.delta.text ?? "";
          fullText += text;
          yield text;
        }
      }

      const duration = Date.now() - startTime;
      metrics.observe("chat.stream.latencyMs.v2", duration);

      this.logger.info("Streaming chat completed", {
        provider: this.provider.getProviderName(),
        durationMs: duration,
        responseLength: fullText.length,
      });

      return {
        text: fullText,
        citations,
        triage,
      };
    } catch (error) {
      const duration = Date.now() - startTime;
      const message = error instanceof Error ? error.message : String(error);

      this.logger.error("Streaming chat failed", {
        error: message,
        durationMs: duration,
      });

      metrics.inc("chat.stream.errors.v2");

      throw error;
    }
  }

  /**
   * Non-streaming generation (for backward compatibility)
   */
  public async generate(messages: ChatMessage[]): Promise<ChatResponse> {
    const latestUser = this.getLatestUserMessage(messages);
    const triage = this.triageService.build(latestUser);
    const searchQuery = this.triageService.buildSearchQuery(latestUser, triage);
    const retrieval = await this.retrieval.search({ rawText: searchQuery, maxChunks: 6 });

    const intake = this.triageService.buildIntake(triage);
    const payload = this.payloadBuilder.build(retrieval.context, intake, messages);

    const result = await this.provider.generate({
      model: payload.model,
      messages: payload.messages,
      temperature: payload.temperature,
      max_tokens: 4096,
    });

    if (result.type === "error") {
      throw new Error(`LLM error: ${result.message}`);
    }

    const citations = this.citationService.build(retrieval.hits, triage);

    this.logger.info("Chat generation completed", {
      provider: this.provider.getProviderName(),
      inputTokens: result.usage.input_tokens,
      outputTokens: result.usage.output_tokens,
    });

    return {
      text: result.text,
      citations,
      triage,
    };
  }

  private getLatestUserMessage(messages: ChatMessage[]): string {
    return messages.slice().reverse().find((msg) => msg.role === "user")?.content ?? "";
  }
}
