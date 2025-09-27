import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { z } from "zod";

import { createLogger } from "@/lib/log";
import { knowledgeBaseInitializer } from "@/lib/managers/knowledge-base-initializer";

export const requestSchema = z.object({
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

export type PreparedRequest = { payload: z.infer<typeof requestSchema> } | { error: NextResponse };

export async function prepareChatRequest(req: NextRequest): Promise<PreparedRequest> {
  const logger = createLogger("api.chat.prepare");
  try {
    const status = await knowledgeBaseInitializer.warm();
    logger.debug("Knowledge base ready", status);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Knowledge base unavailable";
    return { error: NextResponse.json({ error: { code: "KB_UNAVAILABLE", message } }, { status: 503 }) };
  }

  const parsedJson = await parseAndValidateJson(req);
  if ("error" in parsedJson) return parsedJson;

  const json = parsedJson.data;

  const parsed = requestSchema.safeParse(json);
  if (!parsed.success) return validationErrorResponse(parsed.error.issues.map((i) => i.message));

  return { payload: parsed.data };
}

function validationErrorResponse(messages: string[]): { error: NextResponse } {
  return {
    error: NextResponse.json(
      { error: { code: "VALIDATION_ERROR", message: messages.join("; ") } },
      { status: 400 },
    ),
  };
}

async function parseAndValidateJson(req: NextRequest): Promise<{ data: unknown } | { error: NextResponse }> {
  const raw = await req.text();
  if (raw.length > 40_000) {
    return {
      error: NextResponse.json(
        { error: { code: "PAYLOAD_TOO_LARGE", message: "Payload exceeds 40KB" } },
        { status: 413 },
      ),
    };
  }
  try {
    const json = raw ? JSON.parse(raw) : {};
    return { data: json };
  } catch {
    return {
      error: NextResponse.json(
        { error: { code: "INVALID_JSON", message: "Request body must be valid JSON" } },
        { status: 400 },
      ),
    };
  }
}

