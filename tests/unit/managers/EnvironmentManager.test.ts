import { beforeEach, describe, expect, it } from "vitest";

import { EnvironmentManager } from "@/lib/managers/environment-manager";

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

  it("returns diagnostics snapshot without leaking secrets", () => {
    EnvironmentManager.load();
    const diagnostics = EnvironmentManager.diagnostics();

    expect(diagnostics.nodeEnv).toBe("test");
    expect(diagnostics.llm.baseUrl).toBe("https://example.com");
    expect(diagnostics.llm.model).toBe("gpt-test");
    expect(diagnostics.llm.apiKeyConfigured).toBe(true);
    expect(diagnostics.knowledgeBase.scope).toBe("pcm");
    expect(diagnostics.knowledgeBase.source).toBe("clean");
    expect(diagnostics.knowledgeBase.dataPath).toBeUndefined();
  });

  it("throws when required values missing", () => {
    delete process.env.LLM_API_KEY;
    delete process.env.ANTHROPIC_API_KEY;
    EnvironmentManager.reset();
    expect(() => EnvironmentManager.load()).toThrowError(/LLM_API_KEY or ANTHROPIC_API_KEY must be configured/);
  });

  it("forces KB_SCOPE to pcm", () => {
    process.env.KB_SCOPE = "other";
    EnvironmentManager.reset();
    expect(() => EnvironmentManager.load()).toThrowError(/KB_SCOPE must be 'pcm'/);
  });
});

