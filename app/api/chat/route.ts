/* eslint-disable simple-import-sort/imports */
import { NextRequest } from "next/server";
import { z } from "zod";

import { CarePlanManager } from "@/lib/managers/CarePlanManager";
import type { CarePlan } from "@/lib/managers/CarePlanManager";
import { NarrativeManager } from "@/lib/managers/NarrativeManager";
import type { NarrativeInput } from "@/lib/managers/NarrativeManager";
import { ResearchManager } from "@/lib/managers/ResearchManager";
import { SYSTEM_PROMPT } from "@/lib/prompt";
import { buildContext, searchKB } from "@/lib/retrieval";
import type { TriageResult } from "@/lib/triage";
import { buildSearchAugmentation, buildTriageContext, triageInput } from "@/lib/triage";

export const runtime = "nodejs";

const ReqSchema = z.object({
  messages: z.array(z.object({
    role: z.enum(["user", "assistant"]),
    content: z.string()
  })).min(1),
  mode: z.enum(["chat", "narrative"]).optional()
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
  // Access is runtime-dependent and not typed on NextRequest
  const maybeIp = (request as unknown as { ip?: string }).ip;
  return maybeIp || "unknown";
}

function validateAndParseBody(raw: string) {
  if (raw.length > MAX_BODY_BYTES) {
    return { error: Response.json({ error: "Payload too large" }, { status: 413 as const }) } as const;
  }
  let body: unknown;
  try {
    body = raw ? JSON.parse(raw) : {};
  } catch {
    return { error: Response.json({ error: "Invalid JSON" }, { status: 400 as const }) } as const;
  }
  const parsed = ReqSchema.parse(body);
  if (parsed.messages.length > MAX_MESSAGES) {
    return { error: Response.json({ error: "Too many messages" }, { status: 400 as const }) } as const;
  }
  for (const m of parsed.messages) {
    if (m.content.length > MAX_MESSAGE_CHARS) {
      return { error: Response.json({ error: "Message too long" }, { status: 400 as const }) } as const;
    }
  }
  return { parsed } as const;
}

function applyProtocolOverride(text: string, triage: TriageResult): void {
  const m = text.match(/\bprotocol\s*[:\-]\s*(\d{4}(?:\.\d)?)\b/i);
  if (!m) return;
  const code = m[1];
  const index = triage.matchedProtocols.findIndex(mp => mp.tp_code === code || mp.tp_code_pediatric === code);
  if (index < 0) return;
  const chosen = triage.matchedProtocols[index];
  triage.matchedProtocols = [chosen, ...triage.matchedProtocols.filter((unused, i) => i !== index)];
}

function prepareTriageContexts(parsed: z.infer<typeof ReqSchema>) {
  const userLatest = parsed.messages.slice().reverse().find(m => m.role === "user")?.content || "";
  const triage = triageInput(userLatest);
  applyProtocolOverride(userLatest, triage);
  const searchAug = buildSearchAugmentation(triage);
  const combinedQuery = searchAug ? `${userLatest} ${searchAug}` : userLatest;
  const kbContext = buildContext(combinedQuery, 6);
  const triageContext = buildTriageContext(triage);
  return { userLatest, triage, combinedQuery, kbContext, triageContext };
}

function formatVitalsLine(triage: TriageResult): string | undefined {
  const v = triage.vitals || {};
  const parts: string[] = [];
  const builders: Array<(v: TriageResult["vitals"]) => string | undefined> = [
    (vv) => (vv.systolic !== undefined && vv.diastolic !== undefined) ? `BP ${vv.systolic}/${vv.diastolic}` : undefined,
    (vv) => (vv.heartRate !== undefined) ? `HR ${vv.heartRate}` : undefined,
    (vv) => (vv.respiratoryRate !== undefined) ? `RR ${vv.respiratoryRate}` : undefined,
    (vv) => (vv.spo2 !== undefined) ? `SpO2 ${vv.spo2}%` : undefined,
    (vv) => (vv.temperatureF !== undefined) ? `Temp ${vv.temperatureF}F` : undefined,
    (vv) => (vv.temperatureC !== undefined) ? `Temp ${vv.temperatureC}C` : undefined,
    (vv) => (vv.glucose !== undefined) ? `Glucose ${vv.glucose}` : undefined,
    (vv) => (vv.gcs !== undefined) ? `GCS ${vv.gcs}` : undefined,
  ];
  for (const build of builders) {
    const line = build(v);
    if (line) parts.push(line);
  }
  return parts.length ? parts.join(", ") : undefined;
}

function buildDemographics(triage: TriageResult): string[] | undefined {
  const items: string[] = [];
  if (triage.age) items.push(`${triage.age}y`);
  if (triage.sex && triage.sex !== "unknown") items.push(triage.sex);
  if (triage.pregnant) items.push("pregnant");
  if (triage.chiefComplaint) items.push(triage.chiefComplaint + (triage.painLocation ? ` (${triage.painLocation})` : ""));
  return items.length ? items : undefined;
}

function buildHistory(triage: TriageResult): string[] | undefined {
  const items: string[] = [];
  if (triage.allergies?.length) items.push(`Allergies: ${triage.allergies.join(", ")}`);
  if (triage.medications?.length) items.push(`Meds: ${triage.medications.join(", ")}`);
  return items.length ? items : undefined;
}

function buildInterventions(carePlan: CarePlan | null): string[] | undefined {
  if (!carePlan) return undefined;
  const items: string[] = [];
  items.push(`Protocol ${carePlan.protocolCode} – ${carePlan.protocolTitle}`);
  items.push(...carePlan.actions.map(action => `Action: ${action}`));
  items.push(...carePlan.basicMedications.map(med => `Medication plan: ${med}`));
  carePlan.criticalNotes.forEach(note => items.push(`Critical note: ${note}`));
  return items.length ? items : undefined;
}

function buildAssessment(triage: TriageResult): string[] | undefined {
  const items: string[] = [];
  const best = triage.matchedProtocols?.[0];
  if (best) items.push(`Working impression: ${best.pi_name} (${best.pi_code})`);
  if (triage.matchedProtocols?.length) {
    const diffs = triage.matchedProtocols.slice(0, 3).map(mp => `${mp.tp_name} ${mp.tp_code}`).join(", ");
    items.push(`Differential/protocol candidates: ${diffs}`);
  }
  return items.length ? items : undefined;
}

function buildNarrativeInput(triage: TriageResult, carePlan: CarePlan | null): NarrativeInput {
  const vitalsLine = formatVitalsLine(triage);
  return {
    demographics: buildDemographics(triage),
    chiefComplaint: triage.chiefComplaint ? `${triage.chiefComplaint}${triage.painLocation ? ` (${triage.painLocation})` : ""}` : undefined,
    vitals: vitalsLine ? [vitalsLine] : undefined,
    exam: undefined,
    interventions: buildInterventions(carePlan),
    history: buildHistory(triage),
    assessment: buildAssessment(triage),
    baseContact: carePlan?.baseContact,
  };
}

function prioritizeProtocolHits(hits: Array<{ title: string }>, bestCode?: string) {
  if (!bestCode) return hits;
  const rx = new RegExp(`\\b${bestCode}\\b`);
  const preferred = hits.filter(h => rx.test(h.title));
  const others = hits.filter(h => !rx.test(h.title));
  return [...preferred, ...others];
}

function buildCitations(combinedQuery: string, bestCode: string | undefined, cap = 4) {
  let hits = searchKB(combinedQuery, 12);
  hits = prioritizeProtocolHits(hits, bestCode);
  const raw = hits.map(d => ({ title: d.title, category: d.category, subcategory: d.subcategory }));
  const seen = new Set<string>();
  const citations: Array<{ title: string; category: string; subcategory: string }> = [];
  for (const c of raw) {
    if (seen.has(c.title)) continue;
    seen.add(c.title);
    citations.push(c);
    if (citations.length >= cap) break;
  }
  return citations;
}

function buildChatPayload(triageContext: string, kbContext: string, messages: Array<{ role: "user" | "assistant"; content: string }>) {
  return {
    model: process.env.LLM_MODEL || "gpt-4o-mini",
    temperature: 0.2,
    messages: buildPayloadMessages(SYSTEM_PROMPT, triageContext, kbContext, messages)
  };
}

async function getLLMText(baseUrl: string, apiKey: string, payload: unknown) {
  const res = await callLLM(baseUrl, apiKey, payload);
  if (!res.ok) {
    const text = await res.text();
    return { error: Response.json({ error: `LLM error: ${res.status} ${res.statusText} - ${text}` }, { status: 500 as const }) } as const;
  }
  const data: { choices?: Array<{ message?: { content?: string } }> } = await res.json();
  const text = data?.choices?.[0]?.message?.content ?? "Sorry, I couldn’t produce a response.";
  return { text } as const;
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
    if (!allowRequestForIp(ip)) return Response.json({ error: "Rate limit exceeded" }, { status: 429 });

    const raw = await req.text();
    const parsedResult = validateAndParseBody(raw);
    if ("error" in parsedResult) return parsedResult.error;
    const { parsed } = parsedResult;

    const { triage, combinedQuery, kbContext, triageContext } = prepareTriageContexts(parsed);
    const payload = buildChatPayload(triageContext, kbContext, parsed.messages);

    const baseUrl = process.env.LLM_BASE_URL || "https://api.openai.com/v1";
    const apiKey = process.env.LLM_API_KEY;
    if (!apiKey) return Response.json({ error: "Missing LLM_API_KEY in environment." }, { status: 400 });

    const isNarrative = parsed.mode === "narrative";
    const llm = await getLLMText(baseUrl, apiKey, payload);
    if ("error" in llm) return llm.error;
    const { text } = llm;

    if (!isNarrative) {
      const bestCode = triage.matchedProtocols?.[0]?.tp_code;
      const citations = buildCitations(combinedQuery, bestCode, 4);
      return Response.json({ text, citations });
    }

    const nm = new NarrativeManager();
    const cm = new CarePlanManager();
    const carePlan = cm.build(triage);
    const baseInput = buildNarrativeInput(triage, carePlan);
    const soap = nm.buildSOAP(baseInput);
    const chrono = nm.buildChronological(baseInput);
    const nemsis = nm.buildNemsis(baseInput);
    const bestCode = triage.matchedProtocols?.[0]?.tp_code;
    const citations = buildCitations(combinedQuery, bestCode, 4);

    const researchMgr = new ResearchManager();
    const research = await researchMgr.search();
    return Response.json({ text, narrative: { soap, chronological: chrono, nemsis }, carePlan, triage, citations, research });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return Response.json({ error: message }, { status: 400 });
  }
}
