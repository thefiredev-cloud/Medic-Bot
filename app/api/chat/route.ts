import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { randomUUID } from "node:crypto";

import { createLogger } from "@/lib/log";
import { ChatService } from "@/lib/managers/chat-service";

import { prepareChatRequest } from "./shared";

export async function POST(req: NextRequest) {
  const start = Date.now();
  const requestId = randomUUID();
  const logger = createLogger("api.chat.post");

  const prepared = await prepareChatRequest(req);
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
