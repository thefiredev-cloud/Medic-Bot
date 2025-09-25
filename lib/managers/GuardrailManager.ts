/* eslint-disable unicorn/filename-case */
export type GuardrailCheck = {
  pcmCitationsPresent: boolean;
  containsUnauthorizedMed: boolean;
  outsideScope: boolean;
  notes: string[];
};

// eslint-disable-next-line unicorn/filename-case
export class GuardrailManager {
  // Minimal heuristics; expand with rule engine as needed
  public evaluate(text: string): GuardrailCheck {
    const lower = (text || "").toLowerCase();
    const notes: string[] = [];
    const pcmCitationsPresent = /(protocol\s*\d{3,4}|reference\s*no\.?\s*\d{3,4}|mcg\s*\d{3,4})/.test(lower);
    if (!pcmCitationsPresent) notes.push("Missing explicit PCM citation.");
    const unauthorizedRegex = /(lorazepam|diazepam|ativan|valium)\b/; // non-LA meds
    const containsUnauthorizedMed = unauthorizedRegex.test(lower);
    if (containsUnauthorizedMed) notes.push("Contains non-LA County medication.");
    const outsideScope = /(other counties|general medicine advice|non-ems)/.test(lower);
    if (outsideScope) notes.push("Potentially outside LA County EMS scope.");
    return { pcmCitationsPresent, containsUnauthorizedMed, outsideScope, notes };
  }
}


