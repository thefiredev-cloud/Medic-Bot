import { NextRequest } from "next/server";
import { z } from "zod";
import { SYSTEM_PROMPT } from "@/lib/prompt";
import { buildContext } from "@/lib/retrieval";

export const runtime = "nodejs";

const ReqSchema = z.object({
  messages: z.array(z.object({
    role: z.enum(["user", "assistant"]),
    content: z.string()
  })).min(1)
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = ReqSchema.parse(body);
    const userLatest = parsed.messages.slice().reverse().find(m => m.role === "user")?.content || "";
    const context = buildContext(userLatest, 6);

    const payload = {
      model: process.env.LLM_MODEL || "gpt-4o-mini",
      temperature: 0.2,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "system", content: `CONTEXT:\n${context}` },
        ...parsed.messages
      ]
    };

    const baseUrl = process.env.LLM_BASE_URL || "https://api.openai.com/v1";
    const apiKey = process.env.LLM_API_KEY;
    if (!apiKey) {
      return Response.json({ error: "Missing LLM_API_KEY in environment." }, { status: 400 });
    }

    const res = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const text = await res.text();
      return Response.json({ error: `LLM error: ${res.status} ${res.statusText} - ${text}` }, { status: 500 });
    }

    const data = await res.json();
    const text = data?.choices?.[0]?.message?.content ?? "Sorry, I couldn’t produce a response.";
    return Response.json({ text });
  } catch (err: any) {
    return Response.json({ error: err?.message || String(err) }, { status: 400 });
  }
}
