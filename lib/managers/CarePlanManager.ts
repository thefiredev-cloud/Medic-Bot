/* eslint-disable unicorn/filename-case */
import type { TriageResult } from "@/lib/triage";

export type CarePlan = {
  protocolCode: string;          // e.g., "1211"
  protocolTitle: string;         // e.g., "Cardiac Chest Pain"
  actions: string[];             // operational bullets
  baseContact: string;           // e.g., "YES - ..." or "NO - ..."
  basicMedications: string[];    // concise med bullets with dose/route criteria
  criticalNotes: string[];       // cautions, monitoring, destination criteria
};

export class CarePlanManager {
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
    const canConsiderNitro = typeof sbp === "number" && sbp >= 90;

    const actions: string[] = [
      "Assess airway, breathing, circulation; support as needed.",
      "Administer oxygen only if indicated by hypoxia or respiratory distress.",
      "Establish vascular access (IV preferred) and obtain 12‑lead ECG early (ideally prior to nitroglycerin).",
      "Continuous cardiac and vital sign monitoring; reassess frequently.",
    ];

    const basicMedications: string[] = [
      "Aspirin 324 mg PO chewed – if no allergy/active bleeding and not already fully dosed.",
      canConsiderNitro
        ? "Nitroglycerin 0.4 mg SL q5 min prn – if SBP ≥ 90 mmHg, no PDE‑5 inhibitor use, and no suspected RV infarct."
        : "Nitroglycerin – hold pending adequate SBP (≥ 90 mmHg) and RV infarct assessment.",
    ];

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
    };
  }

  private buildFor1205(triage: TriageResult): CarePlan {
    const actions: string[] = [
      "Primary/secondary survey; manage ABCs; position of comfort.",
      "Oxygen only if hypoxic or in respiratory distress.",
      "Vascular access as needed; monitor and reassess vitals/pain.",
    ];

    const basicMedications: string[] = [
      "Ondansetron 4 mg ODT/IV/IM, may repeat x1 in 15 minutes prn nausea/vomiting.",
      "Analgesia per MCG 1345 (e.g., acetaminophen, ketorolac, fentanyl) per indications/contraindications.",
    ];

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
      basicMedications.push("Normal Saline 20 mL/kg IV rapid infusion if signs of poor perfusion.");
    }
    basicMedications.push("Analgesia per MCG 1345 (dose per MCG 1309).");

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
    };
  }
}


