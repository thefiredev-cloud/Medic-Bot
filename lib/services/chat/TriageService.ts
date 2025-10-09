import type { TriageResult } from "@/lib/triage";
import { buildSearchAugmentation, buildTriageContext, triageInput } from "@/lib/triage";

export class TriageService {
  public build(latestUserMessage: string): TriageResult {
    const triage = triageInput(latestUserMessage);
    this.applyProtocolOverride(latestUserMessage, triage);
    return triage;
  }

  public buildSearchQuery(latestUserMessage: string, triage: TriageResult): string {
    const searchAugmentation = buildSearchAugmentation(triage);
    const combined = [latestUserMessage, searchAugmentation].filter(Boolean).join(" ").trim();
    return combined || latestUserMessage;
  }

  public buildIntake(triage: TriageResult): string {
    return buildTriageContext(triage);
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
    triage.matchedProtocols = [
      chosen,
      ...triage.matchedProtocols.filter((protocol, currentIndex) => currentIndex !== index),
    ];
  }
}


