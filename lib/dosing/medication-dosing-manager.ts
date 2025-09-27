import type {
  MedicationCalculationRequest,
  MedicationCalculationResult,
  MedicationCalculator,
} from "@/lib/dosing/types";

export class MedicationDosingManager {
  private readonly calculators = new Map<string, MedicationCalculator>();

  public register(calculator: MedicationCalculator) {
    this.calculators.set(calculator.id, calculator);
    for (const alias of calculator.aliases ?? []) {
      this.calculators.set(alias.toLowerCase(), calculator);
    }
  }

  public calculate(
    medicationId: string,
    request: MedicationCalculationRequest,
  ): MedicationCalculationResult | null {
    const key = medicationId.toLowerCase();
    const calculator = this.calculators.get(key);
    if (!calculator) return null;
    return calculator.calculate(request);
  }

  public list(): MedicationCalculator[] {
    return Array.from(new Set(this.calculators.values()));
  }
}


