type ChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

type ChatPayload = {
  model: string;
  messages: ChatMessage[];
  temperature?: number;
};

type FetchFn = typeof fetch;

type CircuitState = "closed" | "open" | "half-open";

export type LLMClientConfig = {
  baseUrl: string;
  apiKey: string;
  timeoutMs?: number;
  maxRetries?: number;
  breakerFailureThreshold?: number;
  breakerResetMs?: number;
  fetchImpl?: FetchFn;
};

export type LLMClientResult =
  | { type: "success"; text: string }
  | { type: "circuit-open" }
  | { type: "error"; message: string };

export class LLMClient {
  private readonly baseUrl: string;
  private readonly apiKey: string;
  private readonly timeoutMs: number;
  private readonly maxRetries: number;
  private readonly breakerFailureThreshold: number;
  private readonly breakerResetMs: number;
  private readonly fetchImpl: FetchFn;

  private state: CircuitState = "closed";
  private failures = 0;
  private nextAttemptAt = 0;

  constructor(config: LLMClientConfig) {
    this.baseUrl = config.baseUrl.replace(/\/$/, "");
    this.apiKey = config.apiKey;
    this.timeoutMs = config.timeoutMs ?? 12_000;
    this.maxRetries = config.maxRetries ?? 2;
    this.breakerFailureThreshold = config.breakerFailureThreshold ?? 3;
    this.breakerResetMs = config.breakerResetMs ?? 30_000;
    this.fetchImpl = config.fetchImpl ?? fetch;
  }

  public getBreakerState(): CircuitState {
    return this.state;
  }

  public async sendChat(payload: ChatPayload): Promise<LLMClientResult> {
    if (this.isCircuitOpen()) {
      return { type: "circuit-open" };
    }

    const result = await this.trySendWithRetries(payload);
    this.handlePostAttempt(result);
    return result;
  }

  private handlePostAttempt(result: LLMClientResult): void {
    if (result.type === "success") {
      this.resetBreaker();
      return;
    }
    if (result.type === "error") {
      this.recordFailure();
    }
  }

  private async trySendWithRetries(payload: ChatPayload): Promise<LLMClientResult> {
    let attempt = 0;
    let lastError: string | null = null;

    while (attempt <= this.maxRetries) {
      const result = await this.trySendOnce(payload).catch<LLMClientResult>((error) => {
        lastError = error instanceof Error ? error.message : String(error);
        return { type: "error", message: lastError };
      });

      if (result.type === "success") {
        return result;
      }

      await this.waitForBackoff(attempt);
      attempt += 1;
    }

    return { type: "error", message: lastError ?? "Unknown LLM failure" };
  }

  private async trySendOnce(payload: ChatPayload): Promise<LLMClientResult> {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), this.timeoutMs);

    try {
      const response = await this.fetchImpl(`${this.baseUrl}/chat/completions`, {
        method: "POST",
        headers: this.buildHeaders(),
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      if (!response.ok) {
        const text = await response.text().catch(() => "");
        throw new Error(`LLM error ${response.status}: ${text}`);
      }

      const body = (await response.json()) as {
        choices?: Array<{ message?: { content?: string } }>;
      };
      const message = body.choices?.[0]?.message?.content;
      return { type: "success", text: message ?? "" };
    } finally {
      clearTimeout(timeout);
    }
  }

  private buildHeaders(): Record<string, string> {
    return {
      Authorization: `Bearer ${this.apiKey}`,
      "Content-Type": "application/json",
    };
  }

  private async waitForBackoff(attempt: number): Promise<void> {
    if (attempt === this.maxRetries) return;
    const delay = Math.min(1500 * 2 ** attempt, 6000);
    await new Promise((resolve) => setTimeout(resolve, delay));
  }

  private isCircuitOpen(): boolean {
    if (this.state === "open" && Date.now() > this.nextAttemptAt) {
      this.state = "half-open";
      return false;
    }
    return this.state === "open";
  }

  private recordFailure(): void {
    this.failures += 1;
    if (this.failures >= this.breakerFailureThreshold) {
      this.state = "open";
      this.nextAttemptAt = Date.now() + this.breakerResetMs;
    }
  }

  private resetBreaker(): void {
    this.state = "closed";
    this.failures = 0;
    this.nextAttemptAt = 0;
  }
}

