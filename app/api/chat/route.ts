import { NextRequest } from "next/server";
import { z } from "zod";

import { SYSTEM_PROMPT } from "@/lib/prompt";
import { buildContext } from "@/lib/retrieval";
import { buildSearchAugmentation, buildTriageContext, triageInput } from "@/lib/triage";

export const runtime = "nodejs";

const ReqSchema = z.object({
  messages: z.array(z.object({
    role: z.enum(["user", "assistant"]),
    content: z.string()
  })).min(1)
});

function buildPayloadMessages(systemPrompt: string, intake: string, context: string, userMessages: Array<{ role: "user" | "assistant"; content: string }>) {
  return [
    { role: "system" as const, content: systemPrompt },
    { role: "system" as const, content: `INTAKE:\n${intake}` },
    { role: "system" as const, content: `CONTEXT:\n${context}` },
    ...userMessages,
  ];
}

async function callLLM(baseUrl: string, apiKey: string, payload: unknown) {
  const res = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return res;
}

// Simple in-memory IP rate limiter and payload guard
type Counter = { count: number; resetAt: number };
const ipCounters: Map<string, Counter> = new Map();
const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 60;
const MAX_BODY_BYTES = 40_000; // ~40 KB
const MAX_MESSAGES = 30;
const MAX_MESSAGE_CHARS = 4_000;

function getClientIp(request: NextRequest): string {
  const fwd = request.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]?.trim() || "unknown";
  const real = request.headers.get("x-real-ip");
  if (real) return real;
  // Next.js may expose request.ip in some adapters
  // @ts-expect-error runtime dependent
  return (request as any).ip || "unknown";
}

function allowRequestForIp(ip: string): boolean {
  const now = Date.now();
  const rec = ipCounters.get(ip);
  if (!rec || now >= rec.resetAt) {
    ipCounters.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (rec.count >= MAX_REQUESTS_PER_WINDOW) return false;
  rec.count += 1;
  return true;
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);
    if (!allowRequestForIp(ip)) {
      return Response.json({ error: "Rate limit exceeded" }, { status: 429 });
    }

    // Guard payload size before JSON parse
    const raw = await req.text();
    if (raw.length > MAX_BODY_BYTES) {
      return Response.json({ error: "Payload too large" }, { status: 413 });
    }

    let body: unknown;
    try {
      body = raw ? JSON.parse(raw) : {};
    } catch {
      return Response.json({ error: "Invalid JSON" }, { status: 400 });
    }

    const parsed = ReqSchema.parse(body);
    if (parsed.messages.length > MAX_MESSAGES) {
      return Response.json({ error: "Too many messages" }, { status: 400 });
    }
    for (const m of parsed.messages) {
      if (m.content.length > MAX_MESSAGE_CHARS) {
        return Response.json({ error: "Message too long" }, { status: 400 });
      }
    }
    const userLatest = parsed.messages.slice().reverse().find(m => m.role === "user")?.content || "";
    const triage = triageInput(userLatest);
    const searchAug = buildSearchAugmentation(triage);
    const combinedQuery = searchAug ? `${userLatest} ${searchAug}` : userLatest;
    const kbContext = buildContext(combinedQuery, 6);
    const triageContext = buildTriageContext(triage);

    const payload = {
      model: process.env.LLM_MODEL || "gpt-4o-mini",
      temperature: 0.2,
      messages: buildPayloadMessages(SYSTEM_PROMPT, triageContext, kbContext, parsed.messages)
    };

    const baseUrl = process.env.LLM_BASE_URL || "https://api.openai.com/v1";
    const apiKey = process.env.LLM_API_KEY;
    if (!apiKey) {
      return Response.json({ error: "Missing LLM_API_KEY in environment." }, { status: 400 });
    }

    const res = await callLLM(baseUrl, apiKey, payload);

    if (!res.ok) {
      const text = await res.text();
      return Response.json({ error: `LLM error: ${res.status} ${res.statusText} - ${text}` }, { status: 500 });
    }

    const data: { choices?: Array<{ message?: { content?: string } }> } = await res.json();
    const text = data?.choices?.[0]?.message?.content ?? "Sorry, I couldn’t produce a response.";
    return Response.json({ text });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return Response.json({ error: message }, { status: 400 });
  }
}
