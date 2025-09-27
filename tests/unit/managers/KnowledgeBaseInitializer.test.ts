import { beforeEach, describe, expect, it, vi } from "vitest";

import { EnvironmentManager } from "@/lib/managers/environment-manager";
import { knowledgeBaseInitializer } from "@/lib/managers/knowledge-base-initializer";
import { KnowledgeBaseManager } from "@/lib/storage/knowledge-base-manager";

describe("KnowledgeBaseInitializer", () => {
  const ORIGINAL_ENV = { ...process.env };

  beforeEach(() => {
    process.env = {
      ...ORIGINAL_ENV,
      NODE_ENV: "test",
      LLM_API_KEY: "key",
      KB_SCOPE: "pcm",
      KB_SOURCE: "clean",
    };
    EnvironmentManager.reset();
    KnowledgeBaseManager.clear();
  });

  it("returns diagnostics with environment metadata", async () => {
    const loadSpy = vi.spyOn(KnowledgeBaseManager.prototype, "load").mockResolvedValueOnce([]);

    await knowledgeBaseInitializer.warm();
    const diagnostics = knowledgeBaseInitializer.statusWithEnvironment();

    expect(diagnostics.loaded).toBe(true);
    expect(diagnostics.env.nodeEnv).toBe("test");
    expect(diagnostics.env.knowledgeBase.scope).toBe("pcm");
    expect(diagnostics.env.knowledgeBase.source).toBe("clean");
    expect(diagnostics.env.llm.apiKeyConfigured).toBe(true);
    expect(diagnostics.attempts.length).toBeGreaterThan(0);
    expect(diagnostics.attempts[0]?.kind).toBe("local");
    expect(diagnostics.lastSource?.kind).toBe("local");
    loadSpy.mockRestore();
  });
});

