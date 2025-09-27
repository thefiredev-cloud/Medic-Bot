import { describe, expect, it } from "vitest";

import { NarrativeManager, type NarrativeInput } from "@/lib/managers/NarrativeManager";

describe("NarrativeManager", () => {
  const manager = new NarrativeManager();

  function buildInput(overrides: Partial<NarrativeInput> = {}): NarrativeInput {
    return {
      demographics: ["45y male"],
      chiefComplaint: "Chest pain",
      vitals: ["BP 130/80", "HR 90", "SpO2 98%"],
      interventions: ["Tx: Aspirin 324 mg PO", "Tx: Nitroglycerin 0.4 mg SL"],
      assessment: ["Working impression: Cardiac Chest Pain (1211)"],
      weightBased: [{ medication: "Fentanyl", dose: "1 mcg/kg IV", citation: "MCG 1309" }],
      ...overrides,
    };
  }

  it("builds SOAP narrative with weight section", () => {
    const input = buildInput();
    const draft = manager.buildSOAP(input);
    expect(draft.sections.some((section) => section.title === "Weight-Based Dosing")).toBe(true);
    const weightSection = draft.sections.find((section) => section.title === "Weight-Based Dosing");
    expect(weightSection?.lines[0]).toContain("Fentanyl");
  });

  it("builds chronological narrative with timeline and weight-based data", () => {
    const input = buildInput({
      timeline: [
        { time: "12:01", event: "Patient contact", type: "assessment" },
        { time: "12:05", event: "Aspirin administered", type: "medication" },
      ],
    });
    const draft = manager.buildChronological(input);
    expect(draft.sections.some((section) => section.title === "Weight-Based Dosing")).toBe(true);
    expect(draft.sections[0].lines[0]).toContain("Demo:");
  });

  it("builds timeline narrative", () => {
    const input = buildInput({
      timeline: [
        { time: "08:00", event: "Unit en route" },
        { time: "08:10", event: "Arrived on scene" },
      ],
      weightBased: [],
    });
    const draft = manager.buildTimeline(input);
    expect(draft.template).toBe("Timeline");
    expect(draft.sections[0].lines[0]).toContain("08:00");
    expect(draft.sections.length).toBe(1);
  });
});

