import { describe, expect, it } from "vitest";

import { GuardrailManager } from "@/lib/managers/GuardrailManager";

describe("GuardrailManager", () => {
  const manager = new GuardrailManager();

  it("flags missing PCM citation", () => {
    const result = manager.evaluate("Administer lorazepam");
    expect(result.pcmCitationsPresent).toBe(false);
    expect(result.notes).toContain("Missing explicit PCM citation.");
  });

  it("detects unauthorized medication", () => {
    const result = manager.evaluate("Protocol 1211 - give diazepam");
    expect(result.containsUnauthorizedMed).toBe(true);
    expect(result.unauthorizedMedications).toContain("diazepam");
  });

  it("flags pediatric guidance without markers", () => {
    const result = manager.evaluate("Treat pediatric asthma patient with albuterol");
    expect(result.pediatricMarkerMissing).toBe(true);
  });

  it("flags scene safety concerns", () => {
    const result = manager.evaluate("Scene unsafe, leave patient immediately");
    expect(result.sceneSafetyConcern).toBe(true);
  });

  it("captures dosing corrections", () => {
    const result = manager.evaluate("Protocol 1211 - nitroglycerin 0.8 mg SL");
    expect(result.dosingIssues.length).toBeGreaterThan(0);
    expect(result.corrections[0]?.replacement).toContain("nitroglycerin");
  });

  it("passes valid response", () => {
    const text = "Protocol 1211 - Cardiac Chest Pain with nitroglycerin 0.4 mg SL, aspirin per PCM";
    const result = manager.evaluate(text);
    expect(result.pcmCitationsPresent).toBe(true);
    expect(result.containsUnauthorizedMed).toBe(false);
    expect(result.pediatricMarkerMissing).toBe(false);
    expect(result.sceneSafetyConcern).toBe(false);
  });
});

