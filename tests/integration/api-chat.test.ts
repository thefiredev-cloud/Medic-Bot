import type { NextRequest } from "next/server";

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { knowledgeBaseInitializer } from "@/lib/managers/KnowledgeBaseInitializer";
import { POST as chatPost } from "@/app/api/chat/route";

describe("POST /api/chat", () => {
  const fetchSpy = vi.spyOn(globalThis, "fetch") as unknown as ReturnType<typeof vi.spyOn>;
  const warmSpy = vi.spyOn(knowledgeBaseInitializer, "warm");

  beforeEach(() => {
    warmSpy.mockResolvedValue({ loaded: true, docCount: 0, sourcePath: "test" });
  });

  afterEach(() => {
    fetchSpy.mockReset();
  });

  it("returns assistant message", async () => {
    fetchSpy.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ choices: [{ message: { content: "Hello" } }] }),
    });

    const response = await chatPost(new Request("http://localhost/api/chat", {
      method: "POST",
      body: JSON.stringify({ messages: [{ role: "user", content: "hi" }] }),
    }) as unknown as NextRequest);

    expect(response.status).toBe(200);
    const body = await response.json();
    expect(body.text).toBe("Hello");
  });
});

