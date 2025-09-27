import { mgPerKgPerDose } from "@/lib/dosing/math";
import type {
  MedicationCalculationRequest,
  MedicationCalculationResult,
  MedicationCalculator,
} from "@/lib/dosing/types";

export class MidazolamCalculator implements MedicationCalculator {
  public readonly id = "midazolam";
  public readonly name = "Midazolam";
  public readonly aliases = ["versed"];
  public readonly categories = ["Medication", "Sedation"];

  public calculate(request: MedicationCalculationRequest): MedicationCalculationResult {
    const weightKg = request.patientWeightKg ?? 70;
    const age = request.patientAgeYears ?? 30;
    const isAdult = age >= 15 || weightKg >= 45;

    const seizureDose = mgPerKgPerDose(weightKg, 0.1, isAdult ? 10 : 5, 2);
    const agitationDose = mgPerKgPerDose(weightKg, 0.05, isAdult ? 5 : 5, 2);

    return {
      medicationId: this.id,
      medicationName: this.name,
      recommendations: [
        {
          label: "Seizure (IN/IM)",
          route: "IN",
          dose: { quantity: seizureDose, unit: "mg" },
          repeat: { intervalMinutes: 5, criteria: "Continue until seizure stops" },
          administrationNotes: ["Divide dose between nares", "IM alternative if no IN"],
        },
        {
          label: "Agitation (IV)",
          route: "IV",
          dose: { quantity: agitationDose, unit: "mg" },
          repeat: { intervalMinutes: 5, maxRepeats: 1, criteria: "Adult aggression only" },
          administrationNotes: ["Monitor airway, pulse oximetry"],
        },
      ],
      warnings: [],
      citations: ["MCG 1309", "1317.25"],
    };
  }
}


