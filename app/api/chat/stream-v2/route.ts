/**
 * Production-grade SSE streaming endpoint with real Claude streaming
 * Uses new provider system for token-by-token streaming
 */

import { randomUUID } from "node:crypto";
import type { NextRequest } from "next/server";

import { withApiHandler } from "@/lib/api/handler";
import { createLogger } from "@/lib/log";
import { StreamingChatService } from "@/lib/services/chat/StreamingChatService";
import { metrics } from "@/lib/managers/metrics-manager";
import { prepareChatRequest } from "../shared";

export const runtime = "nodejs";

const logger = createLogger("api.chat.stream-v2");

/**
 * Encode SSE event
 */
function sseEncode(event: string, data: unknown): string {
  return `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`;
}

/**
 * Build SSE response
 */
function buildResponse(stream: ReadableStream<Uint8Array>): Response {
  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      "Connection": "keep-alive",
      "X-Accel-Buffering": "no", // Disable nginx buffering
    },
  });
}

/**
 * POST handler for streaming chat
 * Real token-by-token streaming with Claude
 */
export const POST = withApiHandler(async (input: unknown, req: NextRequest) => {
  const prepared = await prepareChatRequest(req);
  if ("error" in prepared) return prepared.error;

  const requestId = randomUUID();
  const startTime = Date.now();
  const ipAddress = req.headers.get("x-forwarded-for") ?? req.headers.get("x-real-ip") ?? undefined;
  const userAgent = req.headers.get("user-agent") ?? undefined;

  metrics.inc("chat.stream.requests.v2");

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      const encoder = new TextEncoder();

      try {
        // Send start event
        controller.enqueue(encoder.encode(sseEncode("start", { requestId })));

        const service = new StreamingChatService();

        // Track citations separately
        let citations: unknown[] = [];

        // Stream responses
        const generator = service.streamChat(
          prepared.payload.messages,
          (citationsData) => {
            citations = citationsData;
            controller.enqueue(encoder.encode(sseEncode("citations", citationsData)));
          },
        );

        // Stream text deltas
        for await (const textDelta of generator) {
          controller.enqueue(encoder.encode(sseEncode("delta", { text: textDelta })));

          // Small yield to allow flushing
          await new Promise((resolve) => setTimeout(resolve, 0));
        }

        // Get final result from generator return value
        const result = await generator.next();
        const finalResponse = result.value;

        // Send final event
        controller.enqueue(
          encoder.encode(
            sseEncode("final", {
              text: finalResponse?.text ?? "",
              citations: finalResponse?.citations ?? citations,
              fallback: false,
            }),
          ),
        );

        const duration = Date.now() - startTime;
        metrics.observe("chat.stream.latencyMs.v2", duration);

        logger.info("Streaming chat completed", {
          requestId,
          durationMs: duration,
          messageCount: prepared.payload.messages.length,
        });

        // Send done event
        controller.enqueue(encoder.encode(sseEncode("done", { requestId })));
        controller.close();
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        const duration = Date.now() - startTime;

        logger.error("Streaming chat failed", {
          requestId,
          error: message,
          durationMs: duration,
        });

        metrics.inc("chat.stream.errors.v2");

        // Send error event
        controller.enqueue(
          encoder.encode(
            sseEncode("error", {
              code: "CHAT_UNAVAILABLE",
              message,
            }),
          ),
        );
        controller.close();
      }
    },
  });

  return buildResponse(stream);
}, { rateLimit: "CHAT", loggerName: "api.chat.stream-v2" });
