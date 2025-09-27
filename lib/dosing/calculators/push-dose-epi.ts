import type {
  MedicationCalculationRequest,
  MedicationCalculationResult,
  MedicationCalculator,
} from "@/lib/dosing/types";

export class PushDoseEpiCalculator implements MedicationCalculator {
  public readonly id = "push-dose-epinephrine";
  public readonly name = "Push-Dose Epinephrine";
  public readonly aliases = ["pdepi", "push epi"];
  public readonly categories = ["Medication", "Cardiac"];

  public calculate(request: MedicationCalculationRequest): MedicationCalculationResult {
    const sbp = request.systolicBP ?? 80;

    const warnings = sbp < 70 ? ["SBP < 70 mmHg – ensure adequate volume resuscitation before/with push-dose epi."] : [];

    return {
      medicationId: this.id,
      medicationName: this.name,
      recommendations: [
        {
          label: "Mixing Instructions",
          route: "IV",
          dose: { quantity: 10, unit: "mcg" },
          concentration: { amount: 0.1, amountUnit: "mg", volume: 10, volumeUnit: "mL", label: "10 mcg/mL" },
          repeat: { intervalMinutes: 1, criteria: "Titrate to SBP > 90" },
          administrationNotes: [
            "Mix 1 mL of 0.1 mg/mL (1:10,000) epi with 9 mL NS in 10 mL syringe.",
            "Administer 1 mL (10 mcg) every 1–5 min as needed.",
          ],
        },
      ],
      warnings,
      citations: ["MCG 1309", "1317.17"],
    };
  }
}


