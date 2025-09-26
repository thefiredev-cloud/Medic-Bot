import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { LLMClient } from "@/lib/managers/llm-client";

describe("LLMClient", () => {
  const fetchMock = vi.fn();
  const apiKey = "key";
  const baseUrl = "https://example.com";

  beforeEach(() => {
    fetchMock.mockReset();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("returns success when LLM responds", async () => {
    fetchMock.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ choices: [{ message: { content: "hi" } }] }),
    });
    const client = new LLMClient({ baseUrl, apiKey, fetchImpl: fetchMock });
    const result = await client.sendChat({ model: "test", messages: [] });
    expect(result).toEqual({ type: "success", text: "hi" });
  });

  it("retries on failure and opens circuit", async () => {
    fetchMock.mockRejectedValue(new Error("fail"));
    const client = new LLMClient({ baseUrl, apiKey, fetchImpl: fetchMock, maxRetries: 1, breakerFailureThreshold: 1 });
    const result = await client.sendChat({ model: "test", messages: [] });
    expect(result.type).toBe("error");
    expect(client.getBreakerState()).toBe("open");
  });

  it("returns circuit-open when breaker is open", async () => {
    const client = new LLMClient({ baseUrl, apiKey, fetchImpl: fetchMock, breakerFailureThreshold: 1, breakerResetMs: 1000 });
    fetchMock.mockRejectedValue(new Error("fail"));
    await client.sendChat({ model: "test", messages: [] });
    const result = await client.sendChat({ model: "test", messages: [] });
    expect(result.type).toBe("circuit-open");
  });
});

