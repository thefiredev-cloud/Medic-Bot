export type BaseDoseUnit = "mg" | "mcg" | "g" | "mEq" | "units" | "mL" | "L" | "drops" | "puffs";

export type DoseUnit =
  | BaseDoseUnit
  | `${BaseDoseUnit}/kg`
  | `${BaseDoseUnit}/kg/min`
  | `${BaseDoseUnit}/kg/hr`
  | `${BaseDoseUnit}/m2`
  | `${BaseDoseUnit}/min`
  | `${BaseDoseUnit}/hr`;

export type Route =
  | "IM"
  | "IV"
  | "IO"
  | "PO"
  | "SL"
  | "IN"
  | "Neb"
  | "Topical"
  | "Rectal"
  | "SubQ"
  | "Buccal"
  | string;

export type SolutionConcentration = {
  amount: number;
  amountUnit: BaseDoseUnit;
  volume: number;
  volumeUnit: "mL" | "L";
  label?: string;
};

export type DoseAmount = {
  quantity: number;
  unit: DoseUnit;
  /**
   * When true the quantity represents a per-kilogram value and must be
   * multiplied by patient weight before administration.
   */
  perKg?: boolean;
  /** Optional hard maximum for a single administration. */
  maxQuantity?: number;
};

export type DoseRepeat = {
  intervalMinutes: number;
  maxRepeats?: number;
  criteria?: string;
};

export type MedicationDoseRecommendation = {
  label: string; // e.g., "Anaphylaxis", "Cardiac Arrest"
  route: Route;
  dose: DoseAmount;
  concentration?: SolutionConcentration;
  maxSingleDose?: DoseAmount;
  maxTotalDose?: DoseAmount;
  repeat?: DoseRepeat;
  administrationNotes?: string[];
  contraindications?: string[];
};

export type MedicationCalculationRequest = {
  patientAgeYears?: number;
  patientWeightKg?: number;
  systolicBP?: number;
  heartRate?: number;
  respiratoryRate?: number;
  spo2?: number;
  scenario?: string; // e.g., "anaphylaxis", "bronchospasm"
  route?: Route;
  isPregnant?: boolean;
  contraindications?: string[];
};

export type MedicationCalculationResult = {
  medicationId: string;
  medicationName: string;
  recommendations: MedicationDoseRecommendation[];
  warnings: string[];
  citations: string[];
  metadata?: Record<string, unknown>;
};

export interface MedicationCalculator {
  id: string;
  name: string;
  aliases?: string[];
  categories?: string[];
  calculate(request: MedicationCalculationRequest): MedicationCalculationResult;
}


