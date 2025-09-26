import type { ChatMessage } from "@/app/types/chat";
import { CarePlanManager } from "@/lib/managers/CarePlanManager";
import type { CarePlan } from "@/lib/managers/CarePlanManager";
import { EnvironmentManager } from "@/lib/managers/EnvironmentManager";
import { GuardrailManager } from "@/lib/managers/GuardrailManager";
import { knowledgeBaseInitializer } from "@/lib/managers/KnowledgeBaseInitializer";
import { LLMClient } from "@/lib/managers/LLMClient";
import { NarrativeManager } from "@/lib/managers/NarrativeManager";
import type { NarrativeInput } from "@/lib/managers/NarrativeManager";
import { ResearchManager } from "@/lib/managers/ResearchManager";
import { RetrievalManager } from "@/lib/managers/RetrievalManager";
import { createLogger } from "@/lib/log";
import { SYSTEM_PROMPT } from "@/lib/prompt";
import type { KBDoc } from "@/lib/retrieval";
import { buildSearchAugmentation, buildTriageContext, triageInput } from "@/lib/triage";
import type { TriageResult } from "@/lib/triage";

type ChatMode = "chat" | "narrative" | undefined;

export type ChatRequest = {
  messages: ChatMessage[];
  mode?: ChatMode;
};

export type ChatResponse = {
  text: string;
  citations: Array<{ title: string; category: string; subcategory?: string }>;
  carePlan?: CarePlan | null;
  narrative?: {
    soap: unknown;
    chronological: unknown;
    nemsis: unknown;
  };
  triage?: TriageResult;
  research?: unknown;
  guardrailNotes?: string[];
  fallback?: boolean;
};

export class ChatService {
  private readonly env = EnvironmentManager.load();
  private readonly guardrails = new GuardrailManager();
  private readonly retrieval = new RetrievalManager();
  private readonly carePlanManager = new CarePlanManager();
  private readonly narrativeManager = new NarrativeManager();
  private readonly researchManager = new ResearchManager();
  private readonly llmClient: LLMClient;
  private readonly logger = createLogger("ChatService");

  constructor(llmClient?: LLMClient) {
    this.llmClient = llmClient ?? new LLMClient({
      baseUrl: this.env.llmBaseUrl,
      apiKey: this.env.LLM_API_KEY,
      maxRetries: 2,
      timeoutMs: 12_000,
    });
  }

  public async handle({ messages, mode }: ChatRequest): Promise<ChatResponse> {
    await knowledgeBaseInitializer.warm();

    const latestUser = this.getLatestUserMessage(messages);
    const triage = triageInput(latestUser);
    this.applyProtocolOverride(latestUser, triage);

    const searchAugmentation = buildSearchAugmentation(triage);
    const combinedQuery = [latestUser, searchAugmentation].filter(Boolean).join(" ").trim() || latestUser;
    const retrieval = await this.retrieval.search({ rawText: combinedQuery, maxChunks: 6 });

    const payload = {
      model: this.env.llmModel,
      temperature: 0.2,
      messages: this.buildMessages(retrieval.context, buildTriageContext(triage), messages),
    } as const;

    const llmResult = await this.llmClient.sendChat(payload);
    const citations = this.buildCitations(retrieval.hits, triage);

    if (llmResult.type !== "success" || !llmResult.text) {
      this.logger.warn("LLM unavailable, returning fallback", {
        reason: llmResult.type,
        breaker: this.llmClient.getBreakerState(),
      });
      return this.buildFallbackResponse(triage, citations, llmResult.type === "circuit-open" ? ["Language model unavailable"] : undefined);
    }

    const guardrail = this.guardrails.evaluate(llmResult.text);
    if (!guardrail.pcmCitationsPresent || guardrail.containsUnauthorizedMed || guardrail.outsideScope) {
      this.logger.warn("Guardrail violation detected", guardrail);
      return this.buildFallbackResponse(triage, citations, guardrail.notes);
    }

    if (mode === "narrative") {
      return await this.buildNarrativeResponse(llmResult.text, triage, citations, guardrail.notes);
    }

    this.logger.info("Chat succeeded", {
      citationCount: citations.length,
      protocols: triage.matchedProtocols.map((p) => p.tp_code).slice(0, 3),
    });

    return {
      text: llmResult.text,
      citations,
      triage,
      guardrailNotes: guardrail.notes,
    };
  }

  private getLatestUserMessage(messages: ChatMessage[]): string {
    return messages.slice().reverse().find((message) => message.role === "user")?.content ?? "";
  }

  private buildMessages(context: string, intake: string, messages: ChatMessage[]) {
    return [
      { role: "system" as const, content: SYSTEM_PROMPT },
      { role: "system" as const, content: `INTAKE:\n${intake}` },
      { role: "system" as const, content: `CONTEXT:\n${context}` },
      ...messages,
    ];
  }

  private applyProtocolOverride(text: string, triage: TriageResult): void {
    const match = text.match(/\bprotocol\s*[:\-]\s*(\d{4}(?:\.\d)?)\b/i);
    if (!match) return;
    const code = match[1];
    const index = triage.matchedProtocols.findIndex(
      (protocol) => protocol.tp_code === code || protocol.tp_code_pediatric === code,
    );
    if (index < 0) return;
    const chosen = triage.matchedProtocols[index];
    triage.matchedProtocols = [chosen, ...triage.matchedProtocols.filter((_, idx) => idx !== index)];
  }

  private buildCitations(hits: KBDoc[], triage: TriageResult) {
    const preferred = this.prioritizeProtocolHits(hits, triage.matchedProtocols?.[0]?.tp_code);
    const seen = new Set<string>();
    const citations: Array<{ title: string; category: string; subcategory?: string }> = [];

    for (const doc of preferred) {
      if (seen.has(doc.title)) continue;
      seen.add(doc.title);
      citations.push({ title: doc.title, category: doc.category, subcategory: doc.subcategory });
      if (citations.length >= 4) break;
    }

    return citations;
  }

  private prioritizeProtocolHits(hits: KBDoc[], bestCode?: string): KBDoc[] {
    if (!bestCode) return hits;
    const regex = new RegExp(`\\b${bestCode}\\b`);
    const preferred = hits.filter((hit) => regex.test(hit.title));
    const others = hits.filter((hit) => !regex.test(hit.title));
    return [...preferred, ...others];
  }

  private buildFallbackResponse(triage: TriageResult, citations: ChatResponse["citations"], notes?: string[]): ChatResponse {
    this.logger.info("Returning fallback response", {
      notes,
      citationCount: citations.length,
    });
    return {
      text: "I can only provide guidance backed by the LA County Prehospital Care Manual. Please ask using protocol names/numbers or relevant LA County terms.",
      citations,
      triage,
      guardrailNotes: notes,
      fallback: true,
    };
  }

  private async buildNarrativeResponse(
    text: string,
    triage: TriageResult,
    citations: ChatResponse["citations"],
    notes: string[] = [],
  ): ChatResponse {
    const carePlan = this.carePlanManager.build(triage);
    const baseInput = this.buildNarrativeInput(triage, carePlan);
    const soap = this.narrativeManager.buildSOAP(baseInput);
    const chronological = this.narrativeManager.buildChronological(baseInput);
    const nemsis = this.narrativeManager.buildNemsis(baseInput);
    const research = await this.researchManager.search();

    return {
      text,
      citations,
      carePlan,
      narrative: {
        soap,
        chronological,
        nemsis,
      },
      triage,
      research,
      guardrailNotes: notes,
    };
  }

  private buildNarrativeInput(triage: TriageResult, carePlan: CarePlan | null): NarrativeInput {
    const vitalsLine = this.formatVitalsLine(triage);

    return {
      demographics: this.buildDemographics(triage),
      chiefComplaint: triage.chiefComplaint
        ? `${triage.chiefComplaint}${triage.painLocation ? ` (${triage.painLocation})` : ""}`
        : undefined,
      vitals: vitalsLine ? [vitalsLine] : undefined,
      interventions: this.buildInterventions(carePlan),
      history: this.buildHistory(triage),
      assessment: this.buildAssessment(triage),
      baseContact: carePlan?.baseContact,
    };
  }

  private formatVitalsLine(triage: TriageResult): string | undefined {
    const vitals = triage.vitals || {};
    const parts: string[] = [];
    if (vitals.systolic !== undefined && vitals.diastolic !== undefined) parts.push(`BP ${vitals.systolic}/${vitals.diastolic}`);
    if (vitals.heartRate !== undefined) parts.push(`HR ${vitals.heartRate}`);
    if (vitals.respiratoryRate !== undefined) parts.push(`RR ${vitals.respiratoryRate}`);
    if (vitals.spo2 !== undefined) parts.push(`SpO2 ${vitals.spo2}%`);
    if (vitals.temperatureF !== undefined) parts.push(`Temp ${vitals.temperatureF}F`);
    if (vitals.temperatureC !== undefined) parts.push(`Temp ${vitals.temperatureC}C`);
    if (vitals.glucose !== undefined) parts.push(`Glucose ${vitals.glucose}`);
    if (vitals.gcs !== undefined) parts.push(`GCS ${vitals.gcs}`);
    return parts.length ? parts.join(", ") : undefined;
  }

  private buildDemographics(triage: TriageResult): string[] | undefined {
    const items: string[] = [];
    if (triage.age) items.push(`${triage.age}y`);
    if (triage.sex && triage.sex !== "unknown") items.push(triage.sex);
    if (triage.pregnant) items.push("pregnant");
    if (triage.chiefComplaint) items.push(triage.chiefComplaint + (triage.painLocation ? ` (${triage.painLocation})` : ""));
    return items.length ? items : undefined;
  }

  private buildHistory(triage: TriageResult): string[] | undefined {
    const items: string[] = [];
    if (triage.allergies?.length) items.push(`Allergies: ${triage.allergies.join(", ")}`);
    if (triage.medications?.length) items.push(`Meds: ${triage.medications.join(", ")}`);
    return items.length ? items : undefined;
  }

  private buildInterventions(carePlan: CarePlan | null): string[] | undefined {
    if (!carePlan) return undefined;
    const items: string[] = [];
    items.push(`Protocol ${carePlan.protocolCode} – ${carePlan.protocolTitle}`);
    items.push(...carePlan.actions.map((action) => `Action: ${action}`));
    items.push(...carePlan.basicMedications.map((med) => `Medication plan: ${med}`));
    carePlan.criticalNotes.forEach((note) => items.push(`Critical note: ${note}`));
    return items.length ? items : undefined;
  }

  private buildAssessment(triage: TriageResult): string[] | undefined {
    const items: string[] = [];
    const best = triage.matchedProtocols?.[0];
    if (best) items.push(`Working impression: ${best.pi_name} (${best.pi_code})`);
    if (triage.matchedProtocols?.length) {
      const diffs = triage.matchedProtocols
        .slice(0, 3)
        .map((protocol) => `${protocol.tp_name} ${protocol.tp_code}`)
        .join(", ");
      items.push(`Differential/protocol candidates: ${diffs}`);
    }
    return items.length ? items : undefined;
  }
}

