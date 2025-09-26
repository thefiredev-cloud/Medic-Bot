import { NextResponse } from "next/server";

import { createLogger } from "@/lib/log";
import { EnvironmentManager } from "@/lib/managers/environment-manager";
import { knowledgeBaseInitializer } from "@/lib/managers/knowledge-base-initializer";

export const runtime = "nodejs";

export async function GET() {
  const logger = createLogger("api.health");
  const env = EnvironmentManager.load();

  try {
    const status = await knowledgeBaseInitializer.warm();
    return NextResponse.json({
      status: "ok",
      kb: {
        loaded: status.loaded,
        docCount: status.docCount,
        scope: env.KB_SCOPE,
        source: status.sourcePath ?? env.KB_SOURCE ?? "auto",
      },
      model: env.llmModel,
      runtime: env.NODE_ENV,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    logger.error("Health check failed", { message });
    return NextResponse.json({
      status: "error",
      error: {
        code: "KB_UNAVAILABLE",
        message,
      },
    }, { status: 503 });
  }
}

