/**
 * Production-grade agent orchestration service
 * Handles multi-step reasoning with tool use and structured decision-making
 */

import type { ChatMessage } from "@/app/types/chat";
import { createLogger } from "@/lib/log";
import type { ILLMProvider, LLMToolUse, LLMContent } from "@/lib/providers";
import { createProviderFromEnv } from "@/lib/providers/factory";
import { MEDICAL_TOOLS, executeToolCall, type ToolExecutionContext } from "@/lib/tools/medical-tools";
import { metrics } from "@/lib/managers/metrics-manager";

type AgentStep = {
  stepNumber: number;
  action: "think" | "use_tool" | "respond";
  content: string;
  toolName?: string;
  toolInput?: Record<string, unknown>;
  toolOutput?: string;
  timestamp: number;
};

type AgentResult = {
  finalResponse: string;
  steps: AgentStep[];
  totalTokens: number;
  toolsUsed: string[];
};

/**
 * Production-grade agent orchestrator
 * Implements multi-step reasoning with tool use
 */
export class AgentOrchestrator {
  private readonly logger = createLogger("AgentOrchestrator");
  private readonly provider: ILLMProvider;
  private readonly maxIterations: number;

  constructor(provider?: ILLMProvider, maxIterations = 5) {
    this.provider = provider ?? createProviderFromEnv();
    this.maxIterations = maxIterations;

    this.logger.info("Initialized agent orchestrator", {
      provider: this.provider.getProviderName(),
      maxIterations,
      toolsAvailable: MEDICAL_TOOLS.length,
    });
  }

  /**
   * Execute agent with multi-step reasoning
   * Uses tool calls when needed for medical protocols
   */
  public async execute(
    systemPrompt: string,
    userMessage: string,
    context: ToolExecutionContext,
  ): Promise<AgentResult> {
    const startTime = Date.now();
    const steps: AgentStep[] = [];
    const toolsUsed: string[] = [];
    let totalTokens = 0;
    let iteration = 0;

    // Build conversation history
    const conversationHistory: ChatMessage[] = [
      { role: "system", content: systemPrompt },
      { role: "user", content: userMessage },
    ];

    this.logger.info("Starting agent execution", {
      userMessageLength: userMessage.length,
      maxIterations: this.maxIterations,
    });

    metrics.inc("agent.executions");

    while (iteration < this.maxIterations) {
      iteration += 1;

      this.logger.debug(`Agent iteration ${iteration}`, {
        conversationLength: conversationHistory.length,
      });

      // Generate with tools available
      const result = await this.provider.generate({
        model: "claude-sonnet-4-5-20250929", // Tool use requires Claude
        messages: conversationHistory,
        temperature: 0.2,
        max_tokens: 4096,
        tools: MEDICAL_TOOLS,
      });

      if (result.type === "error") {
        this.logger.error("Agent generation failed", {
          errorType: result.error_type,
          message: result.message,
        });

        throw new Error(`Agent execution failed: ${result.message}`);
      }

      totalTokens += result.usage.total_tokens;

      // Process response content
      const hasToolUse = result.content.some((block) => block.type === "tool_use");

      if (!hasToolUse) {
        // Final response - no more tool use
        const textBlocks = result.content.filter((block) => block.type === "text");
        const finalText = textBlocks.map((block) => (block as { text: string }).text).join("");

        steps.push({
          stepNumber: iteration,
          action: "respond",
          content: finalText,
          timestamp: Date.now() - startTime,
        });

        this.logger.info("Agent execution complete", {
          iterations: iteration,
          totalTokens,
          toolsUsed: toolsUsed.length,
          durationMs: Date.now() - startTime,
        });

        metrics.observe("agent.iterations", iteration);
        metrics.observe("agent.tokens", totalTokens);

        return {
          finalResponse: finalText,
          steps,
          totalTokens,
          toolsUsed,
        };
      }

      // Process tool calls
      const toolUseBlocks = result.content.filter((block) => block.type === "tool_use") as LLMToolUse[];
      const textBlocks = result.content.filter((block) => block.type === "text");

      // Add thinking step if there's text before tool use
      if (textBlocks.length > 0) {
        const thinkingText = textBlocks.map((block) => (block as { text: string }).text).join("");
        steps.push({
          stepNumber: iteration,
          action: "think",
          content: thinkingText,
          timestamp: Date.now() - startTime,
        });
      }

      // Execute each tool
      const toolResults: Array<{ tool_use_id: string; content: string }> = [];

      for (const toolUse of toolUseBlocks) {
        this.logger.info("Executing tool", {
          toolName: toolUse.name,
          toolId: toolUse.id,
        });

        metrics.inc(`agent.tool.${toolUse.name}`);
        toolsUsed.push(toolUse.name);

        try {
          const toolResult = await executeToolCall(toolUse.name, toolUse.input, context);

          steps.push({
            stepNumber: iteration,
            action: "use_tool",
            content: `Used ${toolUse.name}`,
            toolName: toolUse.name,
            toolInput: toolUse.input,
            toolOutput: toolResult.result,
            timestamp: Date.now() - startTime,
          });

          toolResults.push({
            tool_use_id: toolUse.id,
            content: JSON.stringify(toolResult),
          });
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : String(error);

          this.logger.error("Tool execution failed", {
            toolName: toolUse.name,
            error: errorMessage,
          });

          toolResults.push({
            tool_use_id: toolUse.id,
            content: JSON.stringify({ error: errorMessage }),
          });
        }
      }

      // Add assistant message with tool use
      conversationHistory.push({
        role: "assistant",
        content: JSON.stringify(result.content),
      });

      // Add tool results as user message
      conversationHistory.push({
        role: "user",
        content: JSON.stringify(toolResults),
      });
    }

    // Max iterations reached
    this.logger.warn("Agent reached max iterations", {
      maxIterations: this.maxIterations,
      totalTokens,
    });

    metrics.inc("agent.max_iterations_reached");

    // Return last text response if available
    const lastStep = steps.filter((s) => s.action === "respond" || s.action === "think").pop();
    const finalText = lastStep?.content ?? "Unable to complete request within iteration limit.";

    return {
      finalResponse: finalText,
      steps,
      totalTokens,
      toolsUsed,
    };
  }

  /**
   * Execute agent with streaming support
   * Streams thinking and tool use steps in real-time
   */
  public async *executeStreaming(
    systemPrompt: string,
    userMessage: string,
    context: ToolExecutionContext,
  ): AsyncGenerator<{ type: "thinking" | "tool_use" | "response"; content: string }, AgentResult, undefined> {
    // Simplified streaming implementation
    // In production, would stream each step as it happens
    const result = await this.execute(systemPrompt, userMessage, context);

    // Yield steps
    for (const step of result.steps) {
      if (step.action === "think") {
        yield { type: "thinking", content: step.content };
      } else if (step.action === "use_tool") {
        yield { type: "tool_use", content: `Using ${step.toolName}...` };
      } else if (step.action === "respond") {
        // Stream response character by character
        for (const char of step.content) {
          yield { type: "response", content: char };
        }
      }
    }

    return result;
  }
}
