import { mcgPerKgPerDose } from "@/lib/dosing/math";
import type { MedicationCalculationRequest, MedicationCalculationResult, MedicationCalculator, MedicationDoseRecommendation } from "@/lib/dosing/types";

export class FentanylCalculator implements MedicationCalculator {
  public readonly id = "fentanyl";
  public readonly name = "Fentanyl";
  public readonly aliases = ["sublimaze"];
  public readonly categories = ["Medication", "Analgesia"];

  public calculate(request: MedicationCalculationRequest): MedicationCalculationResult {
    const weightKg = request.patientWeightKg ?? 70;
    const isAdult = (request.patientAgeYears ?? 0) >= 15 || weightKg >= 45;

    const adultDose = 50; // mcg
    const pediatricDose = mcgPerKgPerDose(weightKg, 1, 50, 0);

    const recommendations: MedicationDoseRecommendation[] = [
      {
        label: "Analgesia IV/IO",
        route: "IV",
        dose: { quantity: isAdult ? adultDose : pediatricDose, unit: "mcg" },
        repeat: { intervalMinutes: 5, maxRepeats: 2, criteria: "Pain persists; monitor for respiratory depression" },
        maxTotalDose: { quantity: isAdult ? 150 : 150, unit: "mcg" },
        administrationNotes: ["Titrate slowly", "Monitor respiratory status"],
      },
      {
        label: "IN/IM",
        route: "IN",
        dose: { quantity: isAdult ? 50 : pediatricDose, unit: "mcg" },
        repeat: { intervalMinutes: 10, maxRepeats: 2 },
        administrationNotes: ["Divide dose between nares", "IM alternative if IN unavailable"],
      },
    ];

    return {
      medicationId: this.id,
      medicationName: this.name,
      recommendations,
      warnings: [],
      citations: ["MCG 1309", "1317.19"],
    };
  }
}


