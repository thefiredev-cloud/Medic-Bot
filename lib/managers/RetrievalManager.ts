/* eslint-disable unicorn/filename-case */
import type { KBDoc } from "@/lib/retrieval";
import { buildContext, searchKB } from "@/lib/retrieval";
import type { TriageResult } from "@/lib/triage";

export type RetrievalQuery = {
  rawText: string;
  triage?: TriageResult;
  maxChunks?: number;
};

export type RetrievalResult = {
  context: string; // Render-ready concatenated context
  hits: KBDoc[];   // Raw docs in case callers need more control
};

/**
 * RetrievalManager centralizes KB query expansion and context assembly.
 * It wraps existing retrieval utilities to keep the API surface stable and testable.
 */
// eslint-disable-next-line unicorn/filename-case
export class RetrievalManager {
  private readonly defaultLimit: number;

  constructor(options?: { defaultLimit?: number }) {
    this.defaultLimit = options?.defaultLimit ?? 6;
  }

  public search(query: RetrievalQuery): RetrievalResult {
    const limit = query.maxChunks ?? this.defaultLimit;
    const context = buildContext(query.rawText, limit);
    const hits = searchKB(query.rawText, limit);
    return { context, hits };
  }
}


