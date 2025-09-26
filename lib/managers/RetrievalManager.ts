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

  public async search(query: RetrievalQuery): Promise<RetrievalResult> {
    const limit = query.maxChunks ?? this.defaultLimit;
    const context = await buildContext(query.rawText, limit);
    const hits = await searchKB(query.rawText, limit);
    return { context, hits };
  }
}


