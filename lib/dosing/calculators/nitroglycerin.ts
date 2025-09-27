import type {
  MedicationCalculationRequest,
  MedicationCalculationResult,
  MedicationCalculator,
} from "@/lib/dosing/types";

export class NitroglycerinCalculator implements MedicationCalculator {
  public readonly id = "nitroglycerin";
  public readonly name = "Nitroglycerin";
  public readonly aliases = ["ntg"];
  public readonly categories = ["Medication", "Cardiac"];

  public calculate(request: MedicationCalculationRequest): MedicationCalculationResult {
    const sbp = request.systolicBP ?? 120;
    const warnings = [];

    if (sbp < 100) {
      warnings.push("Hold nitroglycerin – SBP < 100 mmHg.");
    }

    return {
      medicationId: this.id,
      medicationName: this.name,
      recommendations: [
        {
          label: "Cardiac Chest Pain",
          route: "SL",
          dose: { quantity: selectDose(sbp), unit: "mg" },
          repeat: { intervalMinutes: 5, maxRepeats: 3, criteria: "If SBP remains ≥ 100" },
          administrationNotes: ["Ensure no PDE-5 use within 48h", "Reassess for RV infarct"],
        },
        {
          label: "Pulmonary Edema",
          route: "SL",
          dose: { quantity: selectDose(sbp, true), unit: "mg" },
          repeat: { intervalMinutes: 5, maxRepeats: 3, criteria: "If SBP remains ≥ threshold" },
          administrationNotes: ["Use CPAP concurrent if indicated"],
        },
      ],
      warnings,
      citations: ["MCG 1309", "1317.31"],
    };
  }
}

function selectDose(sbp: number, pulmonaryEdema = false): number {
  if (pulmonaryEdema) {
    if (sbp >= 200) return 1.2;
    if (sbp >= 150) return 0.8;
  }
  return sbp >= 150 ? 0.8 : 0.4;
}


