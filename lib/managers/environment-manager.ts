import { z } from "zod";

const schema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  LLM_API_KEY: z
    .string({ required_error: "LLM_API_KEY is required" })
    .min(1, { message: "LLM_API_KEY is required" }),
  LLM_BASE_URL: z.string().url("LLM_BASE_URL must be a valid URL").optional(),
  LLM_MODEL: z.string().min(1).default("gpt-4o-mini"),
  KB_SCOPE: z
    .string()
    .default("pcm")
    .transform((value) => value.trim().toLowerCase())
    .refine((value) => value === "pcm", {
      message: "KB_SCOPE must be 'pcm' to comply with LA County restrictions.",
    }),
  KB_SOURCE: z
    .string()
    .default("clean")
    .transform((value) => value.trim().toLowerCase())
    .refine((value) => value === "clean", {
      message: "KB_SOURCE must be 'clean'.",
    }),
  KB_DATA_PATH: z.string().optional(),
  KB_REMOTE_URL: z.string().url().optional(),
  KB_REMOTE_BASE_URL: z.string().url().optional(),
});

export type EnvironmentConfig = z.infer<typeof schema> & {
  llmBaseUrl: string;
  llmModel: string;
  kbScope: string;
  kbSource: string;
};

export type EnvironmentDiagnostics = {
  nodeEnv: EnvironmentConfig["NODE_ENV"];
  llm: {
    baseUrl: string;
    model: string;
    apiKeyConfigured: boolean;
  };
  knowledgeBase: {
    scope: string;
    source: string;
    dataPath?: string;
    remoteUrl?: string;
    remoteBaseUrl?: string;
  };
};

export class EnvironmentManager {
  private static cached: EnvironmentConfig | null = null;

  public static load(): EnvironmentConfig {
    if (!EnvironmentManager.cached) {
      const parsed = schema.safeParse(process.env);
      if (!parsed.success) {
        const message = parsed.error.issues.map((issue) => issue.message).join("; ");
        throw new Error(`Invalid environment configuration: ${message}`);
      }

      const env = parsed.data;
      EnvironmentManager.cached = {
        ...env,
        llmBaseUrl: env.LLM_BASE_URL ?? "https://api.openai.com/v1",
        llmModel: env.LLM_MODEL,
        kbScope: env.KB_SCOPE,
        kbSource: env.KB_SOURCE,
      };
    }

    return EnvironmentManager.cached;
  }

  public static diagnostics(): EnvironmentDiagnostics {
    const env = EnvironmentManager.load();
    return {
      nodeEnv: env.NODE_ENV,
      llm: {
        baseUrl: env.llmBaseUrl,
        model: env.llmModel,
        apiKeyConfigured: Boolean(env.LLM_API_KEY?.length),
      },
      knowledgeBase: {
        scope: env.kbScope,
        source: env.kbSource,
        dataPath: env.KB_DATA_PATH || undefined,
        remoteUrl: env.KB_REMOTE_URL || undefined,
        remoteBaseUrl: env.KB_REMOTE_BASE_URL || undefined,
      },
    };
  }

  public static reset(): void {
    EnvironmentManager.cached = null;
  }
}