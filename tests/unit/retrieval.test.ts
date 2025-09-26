import { describe, expect, it, vi, beforeEach } from "vitest";

import { RetrievalManager } from "@/lib/managers/RetrievalManager";
import * as retrieval from "@/lib/retrieval";

describe("RetrievalManager", () => {
  beforeEach(() => {
    vi.spyOn(retrieval, "buildContext").mockResolvedValue("context");
    vi.spyOn(retrieval, "searchKB").mockResolvedValue([]);
  });

  it("returns context and hits", async () => {
    const manager = new RetrievalManager();
    const result = await manager.search({ rawText: "query" });
    expect(result.context).toBe("context");
    expect(result.hits).toEqual([]);
  });
});

