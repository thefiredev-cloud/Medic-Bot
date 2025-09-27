/* eslint-disable unicorn/filename-case */
import { createDefaultMedicationManager } from "@/lib/dosing/registry";
import type { MedicationCalculationResult } from "@/lib/dosing/types";
import type { TriageResult } from "@/lib/triage";

export type CarePlan = {
  protocolCode: string;          // e.g., "1211"
  protocolTitle: string;         // e.g., "Cardiac Chest Pain"
  actions: string[];             // operational bullets
  baseContact: string;           // e.g., "YES - ..." or "NO - ..."
  basicMedications: string[];    // concise med bullets with dose/route criteria
  criticalNotes: string[];       // cautions, monitoring, destination criteria
  medicationsDetailed?: Array<{
    name: string;
    details: string[];
    citations: string[];
  }>;
  weightBased?: Array<{
    name: string;
    route: string;
    dosePerKg: string;
    range: string;
    citations: string[];
  }>;
};

export class CarePlanManager {
  private readonly medicationManager = createDefaultMedicationManager();

  public build(triage: TriageResult): CarePlan | null {
    const best = triage.matchedProtocols?.[0];
    if (!best) return null;
    const code = best.tp_code?.trim();
    switch (code) {
      case "1211":
        return this.buildFor1211(triage);
      case "1205":
        return this.buildFor1205(triage);
      case "1202":
        return this.buildFor1202(triage);
      default:
        return null;
    }
  }

  private buildFor1211(triage: TriageResult): CarePlan {
    const sbp = triage.vitals?.systolic ?? undefined;

    const actions: string[] = [
      "Assess airway, breathing, circulation; support as needed.",
      "Administer oxygen only if indicated by hypoxia or respiratory distress.",
      "Establish vascular access (IV preferred) and obtain 12‑lead ECG early (ideally prior to nitroglycerin).",
      "Continuous cardiac and vital sign monitoring; reassess frequently.",
    ];

    const basicMedications: string[] = [];
    basicMedications.push(...this.summarizeMedication("aspirin", { scenario: "chest pain" }));
    basicMedications.push(...this.summarizeMedication("nitroglycerin", { scenario: "chest pain", systolicBP: sbp }, {
      default: "0.4 mg SL q5 min prn – if SBP ≥ 90 mmHg, no PDE‑5 use, no suspected RV infarct.",
      hold: "Hold nitroglycerin until SBP ≥ 90 mmHg and RV infarct ruled out.",
    }));

    const detailPackages = this.buildMedicationDetails([
      { id: "nitroglycerin", scenario: "chest pain", sbp },
      { id: "aspirin", scenario: "chest pain" },
      { id: "epinephrine", scenario: "push", sbp },
    ]);

    const criticalNotes: string[] = [
      "Include protocol reference in documentation: 1211 – Cardiac Chest Pain.",
      "Consider STEMI activation/destination per ECG and policy.",
      "Monitor for hypotension after nitroglycerin; reassess pain and ECG changes.",
    ];

    return {
      protocolCode: "1211",
      protocolTitle: "Cardiac Chest Pain",
      actions,
      baseContact: "YES – for concerning ECG changes/STEMI activation or as per local policy.",
      basicMedications,
      criticalNotes,
      medicationsDetailed: detailPackages.details,
      weightBased: detailPackages.weightBased,
    };
  }

  private buildFor1205(triage: TriageResult): CarePlan {
    const actions: string[] = [
      "Primary/secondary survey; manage ABCs; position of comfort.",
      "Oxygen only if hypoxic or in respiratory distress.",
      "Vascular access as needed; monitor and reassess vitals/pain.",
    ];

    const basicMedications: string[] = [];
    basicMedications.push(...this.summarizeMedication("ondansetron", { scenario: "nausea" }));
    basicMedications.push("Analgesia per MCG 1345 – select agent based on contraindications and pain severity.");

    const detailPackages = this.buildMedicationDetails([
      { id: "ondansetron", scenario: "nausea" },
      { id: "ketorolac", scenario: "pain" },
      { id: "acetaminophen", scenario: "pain" },
      { id: "fentanyl", scenario: "pain" },
    ]);

    const criticalNotes = [
      "Use Protocol 1205 – GI/GU Emergencies for abdominal pain without trauma.",
      triage.sex === "female" ? "Consider pregnancy-related causes in females of childbearing age." : null,
      "Assess for GI bleeding, peritoneal signs, or shock and manage per appropriate protocol.",
    ].filter(Boolean) as string[];

    return {
      protocolCode: "1205",
      protocolTitle: "GI/GU Emergencies",
      actions,
      baseContact: "NO – unless condition worsens or per local policy.",
      basicMedications,
      criticalNotes,
      medicationsDetailed: detailPackages.details,
      weightBased: detailPackages.weightBased,
    };
  }

  private buildFor1202(triage: TriageResult): CarePlan {
    const actions: string[] = [
      "Assess and document pain (age‑appropriate scale).",
      "Perform focused neurovascular exam of affected limb (motor/sensory/pulse/cap refill).",
      "Immobilize/position of comfort; elevate if appropriate; ice if indicated.",
      "Consider transport to Pediatric Medical Center if neurological deficits present.",
    ];

    const weight = triage.weightKg;
    const fluidDose = typeof weight === "number" ? Math.round(weight * 20) : undefined; // 20 mL/kg

    const basicMedications: string[] = [];
    if (typeof fluidDose === "number") {
      basicMedications.push(`Normal Saline ${fluidDose} mL IV rapid infusion if signs of poor perfusion (20 mL/kg).`);
    } else {
      basicMedications.push("Normal Saline 20 mL/kg IV rapid infusion if signs of poor perfusion (consult MCG 1309 weight table).");
    }
    basicMedications.push("Analgesia per MCG 1345 using MCG 1309 dosing guidance.");

    const detailPackages = this.buildMedicationDetails([
      { id: "fentanyl", scenario: "pain" },
      { id: "acetaminophen", scenario: "pain" },
      { id: "ketorolac", scenario: "pain" },
    ], triage.weightKg);

    const criticalNotes: string[] = [
      "Use Protocol 1202 – General Medical for nonspecific symptoms without specific protocol.",
      "Reassess neurovascular status after any intervention (splinting, repositioning).",
      "Document pediatric dosing calculations when applicable.",
    ];

    return {
      protocolCode: "1202",
      protocolTitle: "General Medical",
      actions,
      baseContact: "YES – For potential neurological compromise or per local policy.",
      basicMedications,
      criticalNotes,
      medicationsDetailed: detailPackages.details,
      weightBased: detailPackages.weightBased,
    };
  }

  private summarizeMedication(
    id: string,
    context: { scenario?: string; systolicBP?: number },
    overrides?: { default: string; hold?: string },
  ): string[] {
    const result = this.medicationManager.calculate(id, {
      scenario: context.scenario,
      systolicBP: context.systolicBP,
    });
    if (!result) return [];
    const best = result.recommendations[0];
    if (!best) return [];
    const baseText = `${result.medicationName} ${best.route} ${best.dose.quantity} ${best.dose.unit}`;
    if (overrides?.default && typeof context.systolicBP === "number" && context.systolicBP < 90 && overrides.hold) {
      return [overrides.hold];
    }
    if (overrides?.default) return [overrides.default];
    return [`${baseText}${best.repeat ? `; repeat ${best.repeat.intervalMinutes} min` : ""}`];
  }

  private buildMedicationDetails(
    input: Array<{ id: string; scenario?: string; sbp?: number }>,
    patientWeightKg?: number,
  ): { details: Array<{ name: string; details: string[]; citations: string[] }>; weightBased?: CarePlan["weightBased"] } {
    const rows: Array<{ name: string; details: string[]; citations: string[] }> = [];

    for (const item of input) {
      const result = this.medicationManager.calculate(item.id, {
        patientWeightKg,
        scenario: item.scenario,
        systolicBP: item.sbp,
      });
      if (!result) continue;

      const details = result.recommendations.map((rec) => formatRecommendation(result, rec));
      rows.push({ name: result.medicationName, details, citations: result.citations });

      // If future calculators expose structured weight-based guidance,
      // we can extend MedicationCalculationResult and surface it here.
    }

    return { details: rows };
  }
}

function formatRecommendation(result: MedicationCalculationResult, rec: MedicationCalculationResult["recommendations"][number]): string {
  const dose = `${rec.dose.quantity} ${rec.dose.unit}`;
  const repeat = rec.repeat ? `; repeat ${rec.repeat.intervalMinutes} min` : "";
  return `${result.medicationName} ${rec.route} ${dose}${repeat}`;
}


