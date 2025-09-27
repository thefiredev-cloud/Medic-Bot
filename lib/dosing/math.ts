export function roundTo(value: number, precision = 2): number {
  const factor = Math.pow(10, precision);
  return Math.round(value * factor) / factor;
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function mgPerKg(weightKg: number, doseMgPerKg: number, maxMg?: number): number {
  const dose = weightKg * doseMgPerKg;
  return maxMg !== undefined ? Math.min(dose, maxMg) : dose;
}

export function mcgPerKg(weightKg: number, doseMcgPerKg: number, maxMcg?: number): number {
  const dose = weightKg * doseMcgPerKg;
  return maxMcg !== undefined ? Math.min(dose, maxMcg) : dose;
}

export function mgPerKgPerDose(weightKg: number, base: number, max?: number, precision = 2): number {
  return roundTo(mgPerKg(weightKg, base, max), precision);
}

export function mcgPerKgPerDose(weightKg: number, base: number, max?: number, precision = 2): number {
  return roundTo(mcgPerKg(weightKg, base, max), precision);
}

export function volumeFromConcentration(amount: number, concentration: { amount: number; volume: number }): number {
  if (!concentration.amount || !concentration.volume) return NaN;
  return (amount / concentration.amount) * concentration.volume;
}


