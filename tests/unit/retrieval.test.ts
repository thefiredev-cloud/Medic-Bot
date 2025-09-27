import { beforeEach, describe, expect, it, vi } from "vitest";

import { RetrievalManager } from "@/lib/managers/RetrievalManager";
import * as retrieval from "@/lib/retrieval";

describe("Retrieval", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  describe("RetrievalManager", () => {
    it("returns context and hits", async () => {
      const contextSpy = vi.spyOn(retrieval, "buildContext").mockResolvedValue("ctx");
      const searchSpy = vi.spyOn(retrieval, "searchKB").mockResolvedValue([]);
      const manager = new RetrievalManager();
      const result = await manager.search({ rawText: "query" });
      expect(contextSpy).toHaveBeenCalledWith("query", 6);
      expect(searchSpy).toHaveBeenCalledWith("query", 6);
      expect(result.context).toBe("ctx");
      expect(result.hits).toEqual([]);
    });
  });

  describe("augmentQueryWithSynonyms", () => {
    it("expands common clinical scenarios", () => {
      const cases = new Map<string, string[]>([
        ["patient with copd wheezing", ["protocol 1233", "albuterol"]],
        ["possible stemi chest pain", ["protocol 1211", "nitroglycerin"]],
        ["postictal seizure", ["protocol 1239", "midazolam"]],
        ["suspected hyperkalemia", ["sodium bicarbonate", "cardiac arrest"]],
        ["pediatric asthma attack", ["MCG 1309", "pediatric doses"]],
      ]);

      for (const [input, expectedTokens] of cases.entries()) {
        const expanded = retrieval.augmentQueryWithSynonyms(input);
        for (const token of expectedTokens) {
          expect(expanded.toLowerCase()).toContain(token.toLowerCase());
        }
      }
    });
  });
});

