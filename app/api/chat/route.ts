import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { z } from "zod";

import { createLogger } from "@/lib/log";
import { ChatService } from "@/lib/managers/chat-service";
import { knowledgeBaseInitializer } from "@/lib/managers/knowledge-base-initializer";

const requestSchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string(),
      }),
    )
    .min(1, "Must include at least one message"),
  mode: z.enum(["chat", "narrative"]).optional(),
});

type PreparedRequest = { payload: z.infer<typeof requestSchema> } | { error: NextResponse };

function parseRequestBody(raw: string): PreparedRequest {
  if (raw.length > 40_000) {
    return {
      error: NextResponse.json(
        { error: { code: "PAYLOAD_TOO_LARGE", message: "Payload exceeds 40KB" } },
        { status: 413 },
      ),
    };
  }

  let json: unknown;
  try {
    json = raw ? JSON.parse(raw) : {};
  } catch {
    return { error: NextResponse.json({ error: { code: "INVALID_JSON", message: "Request body must be valid JSON" } }, { status: 400 }) };
  }

  const parsed = requestSchema.safeParse(json);
  if (!parsed.success) {
    return {
      error: NextResponse.json(
        {
          error: {
            code: "VALIDATION_ERROR",
            message: parsed.error.issues.map((issue) => issue.message).join("; "),
          },
        },
        { status: 400 },
      ),
    };
  }

  return { payload: parsed.data };
}

async function prepareRequest(req: NextRequest): Promise<PreparedRequest> {
  const logger = createLogger("api.chat.prepare");
  try {
    const status = await knowledgeBaseInitializer.warm();
    logger.debug("Knowledge base ready", status);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Knowledge base unavailable";
    return { error: NextResponse.json({ error: { code: "KB_UNAVAILABLE", message } }, { status: 503 }) };
  }

  const raw = await req.text();
  return parseRequestBody(raw);
}

export async function POST(req: NextRequest) {
  const start = Date.now();
  const requestId = crypto.randomUUID();
  const logger = createLogger("api.chat.post");

  const prepared = await prepareRequest(req);
  if ("error" in prepared) return prepared.error;

  const service = new ChatService();
  const result = await service.handle(prepared.payload);

  logger.info("Handled chat request", {
    requestId,
    mode: prepared.payload.mode ?? "chat",
    messageCount: prepared.payload.messages.length,
    latencyMs: Date.now() - start,
    fallback: result.fallback ?? false,
  });

  return NextResponse.json(result);
}
