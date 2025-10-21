import type { ChatMessage } from "@/app/types/chat";
import { SYSTEM_PROMPT } from "@/lib/prompt";

export type ChatPayload = {
  model: string;
  temperature: number;
  messages: Array<{ role: "system" | "user" | "assistant"; content: string }>;
};

/**
 * Production-grade payload builder
 * Consolidates system messages following LLM best practices
 */
export class PayloadBuilder {
  constructor(private readonly model: string, private readonly temperature = 0.2) {}

  public build(context: string, intake: string, messages: ChatMessage[]): ChatPayload {
    return {
      model: this.model,
      temperature: this.temperature,
      messages: this.buildMessages(context, intake, messages),
    } as const;
  }

  /**
   * Build message array with consolidated system message
   * Following best practices: single system message at the start
   */
  private buildMessages(context: string, intake: string, messages: ChatMessage[]) {
    // Consolidate all system instructions into ONE system message
    // This follows LLM best practices and works optimally with both OpenAI and Anthropic
    const consolidatedSystemMessage = this.buildConsolidatedSystemMessage(context, intake);

    return [
      { role: "system" as const, content: consolidatedSystemMessage },
      ...messages,
    ];
  }

  /**
   * Build a single, well-structured system message
   * Combines prompt, intake (triage), and context (knowledge base) logically
   */
  private buildConsolidatedSystemMessage(context: string, intake: string): string {
    const sections: string[] = [];

    // 1. Core system prompt with identity and instructions
    sections.push(SYSTEM_PROMPT);

    // 2. Patient intake and triage information
    if (intake.trim()) {
      sections.push("# PATIENT INTAKE\n\n" + intake);
    }

    // 3. Knowledge base context (protocols, medications, etc.)
    if (context.trim()) {
      sections.push("# KNOWLEDGE BASE CONTEXT\n\n" + context);
    }

    return sections.join("\n\n---\n\n");
  }

  /**
   * Estimate total token count for the payload
   * Rough approximation: 1 token ≈ 4 characters
   */
  public estimateTokens(context: string, intake: string, messages: ChatMessage[]): number {
    const systemMessage = this.buildConsolidatedSystemMessage(context, intake);
    const conversationText = messages.map((msg) => msg.content).join("");
    const totalChars = systemMessage.length + conversationText.length;
    return Math.ceil(totalChars / 4);
  }
}


