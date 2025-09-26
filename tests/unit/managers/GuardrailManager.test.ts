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
  });

  it("passes valid response", () => {
    const result = manager.evaluate("Protocol 1211 - Cardiac Chest Pain with nitroglycerin per PCM");
    expect(result.pcmCitationsPresent).toBe(true);
    expect(result.containsUnauthorizedMed).toBe(false);
  });
});

