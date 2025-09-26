import { z } from "zod";

const schema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  LLM_API_KEY: z.string().min(1, "LLM_API_KEY is required"),
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
      };
    }

    return EnvironmentManager.cached;
  }

  public static reset(): void {
    EnvironmentManager.cached = null;
  }
}

