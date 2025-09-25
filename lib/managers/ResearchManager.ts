/* eslint-disable unicorn/filename-case */
export type ResearchQuery = {
  question: string;
  scope?: string[]; // e.g., ["LA County EMS", "TCA overdose", "hyperkalemia"]
};

export type ResearchHit = {
  title: string;
  url: string;
  published?: string;
  snippet?: string;
  score?: number;
};

/**
 * Stub for Hyperbrowser integration. Wire actual client here later.
 * Keep interface simple so callers can swap providers.
 */
// eslint-disable-next-line unicorn/filename-case
export class ResearchManager {
  async search(): Promise<ResearchHit[]> {
    // TODO: integrate Hyperbrowser SDK/client
    return [];
  }
}


