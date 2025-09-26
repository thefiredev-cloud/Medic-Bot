import { NextResponse } from "next/server";

import { EnvironmentManager } from "@/lib/managers/EnvironmentManager";
import { knowledgeBaseInitializer } from "@/lib/managers/KnowledgeBaseInitializer";
import { createLogger } from "@/lib/log";

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
        scope: env.kbScope ?? "unknown",
        source: status.sourcePath ?? "auto",
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

