import { describe, expect, it, beforeEach } from "vitest";

import { EnvironmentManager } from "@/lib/managers/EnvironmentManager";

describe("EnvironmentManager", () => {
  const ORIGINAL_ENV = { ...process.env };

  beforeEach(() => {
    process.env = {
      ...ORIGINAL_ENV,
      NODE_ENV: "test",
      LLM_API_KEY: "test-key",
      LLM_BASE_URL: "https://example.com",
      LLM_MODEL: "gpt-test",
      KB_SCOPE: "pcm",
      KB_SOURCE: "clean",
    };
    EnvironmentManager.reset();
  });

  it("loads valid configuration", () => {
    const env = EnvironmentManager.load();
    expect(env.llmBaseUrl).toBe("https://example.com");
    expect(env.llmModel).toBe("gpt-test");
    expect(env.kbScope).toBe("pcm");
  });

  it("throws when required values missing", () => {
    delete process.env.LLM_API_KEY;
    EnvironmentManager.reset();
    expect(() => EnvironmentManager.load()).toThrowError(/LLM_API_KEY is required/);
  });

  it("forces KB_SCOPE to pcm", () => {
    process.env.KB_SCOPE = "other";
    EnvironmentManager.reset();
    expect(() => EnvironmentManager.load()).toThrowError(/KB_SCOPE must be 'pcm'/);
  });
});

