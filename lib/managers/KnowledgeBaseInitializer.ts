import { EnvironmentManager } from "@/lib/managers/EnvironmentManager";
import { createLogger } from "@/lib/log";
import { KnowledgeBaseManager } from "@/lib/storage/knowledge-base-manager";

type KnowledgeBaseStatus = {
  loaded: boolean;
  docCount: number;
  sourcePath?: string;
};

class KnowledgeBaseInitializer {
  private status: KnowledgeBaseStatus = { loaded: false, docCount: 0 };
  private readonly manager: KnowledgeBaseManager;
  private readonly logger = createLogger("KnowledgeBaseInitializer");

  constructor(manager = new KnowledgeBaseManager()) {
    this.manager = manager;
  }

  public async warm(): Promise<KnowledgeBaseStatus> {
    if (this.status.loaded) return this.status;

    const env = EnvironmentManager.load();
    const docs = await this.manager.load();
    this.status = {
      loaded: true,
      docCount: docs.length,
      sourcePath: env.KB_DATA_PATH,
    };
    this.logger.info("Knowledge base warmed", {
      docCount: docs.length,
      sourcePath: this.status.sourcePath ?? "auto",
    });
    return this.status;
  }

  public getStatus(): KnowledgeBaseStatus {
    return this.status;
  }
}

export const knowledgeBaseInitializer = new KnowledgeBaseInitializer();

