import { describe, expect, it } from "vitest";

import { CarePlanManager } from "@/lib/managers/CarePlanManager";
import type { TriageResult } from "@/lib/triage";

function buildTriage(overrides: Partial<TriageResult>): TriageResult {
  return {
    age: 55,
    vitals: {},
    matchedProtocols: [
      {
        pi_name: "Chest Pain",
        pi_code: "A10",
        tp_name: "Cardiac Chest Pain",
        tp_code: "1211",
        score: 10,
      },
    ],
    ...overrides,
  } as TriageResult;
}

describe("CarePlanManager", () => {
  const manager = new CarePlanManager();

  it("builds chest pain care plan with dosing details", () => {
    const triage = buildTriage({ vitals: { systolic: 100 } });
    const plan = manager.build(triage);
    expect(plan?.basicMedications.some((item) => item.toLowerCase().includes("aspirin"))).toBe(true);
    expect(plan?.medicationsDetailed?.length).toBeGreaterThan(0);
    expect(plan?.weightBased).toBeUndefined();
  });

  it("holds nitroglycerin when systolic < 90", () => {
    const triage = buildTriage({ vitals: { systolic: 80 } });
    const plan = manager.build(triage);
    expect(plan?.basicMedications.some((item) => item.toLowerCase().includes("hold nitroglycerin"))).toBe(true);
  });

  it("includes weight-based table for pediatric dosing", () => {
    const triage: TriageResult = {
      age: 8,
      weightKg: 25,
      vitals: {},
      matchedProtocols: [
        {
          pi_name: "Pain",
          pi_code: "P01",
          tp_name: "General Medical",
          tp_code: "1202",
          score: 8,
        },
      ],
    } as TriageResult;
    const plan = manager.build(triage);
    expect(plan?.weightBased && plan.weightBased.length).toBeGreaterThan(0);
    expect(plan?.basicMedications.some((item) => item.includes("20 mL/kg"))).toBe(true);
  });
});
