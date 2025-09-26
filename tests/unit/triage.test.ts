import { describe, expect, it } from "vitest";

import { buildSearchAugmentation, buildTriageContext, triageInput } from "@/lib/triage";

describe("triage", () => {
  it("parses age/sex/chief complaint", () => {
    const triage = triageInput("45yo male c/o chest pain with bp 120/80 and HR 90");
    expect(triage.age).toBe(45);
    expect(triage.sex).toBe("male");
    expect(triage.chiefComplaint).toBe("chest pain");
    expect(triage.vitals.systolic).toBe(120);
  });

  it("builds triage context with protocol candidates", () => {
    const triage = triageInput("adult seizure with history of epilepsy");
    const context = buildTriageContext(triage);
    expect(context).toContain("Structured Intake");
    expect(context).toContain("Protocol Candidates");
  });

  it("builds search augmentation", () => {
    const triage = triageInput("pediatric asthma" );
    const aug = buildSearchAugmentation(triage);
    expect(aug).toContain("asthma");
  });
});

