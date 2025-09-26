import { promises as fs } from "node:fs";
import path from "node:path";

import { EnvironmentManager } from "@/lib/managers/environment-manager";

export type KnowledgeBaseAsset = {
  id: string;
  title: string;
  category: string;
  subcategory?: string;
  keywords?: string[];
  content: string;
};

type KnowledgeBaseSourceOptions = {
  absolutePath?: string;
  remoteUrl?: string;
};

export class KnowledgeBaseManager {
  private static cache: KnowledgeBaseAsset[] | null = null;
  private readonly options?: KnowledgeBaseSourceOptions;
  private readonly env = EnvironmentManager.load();

  constructor(options?: KnowledgeBaseSourceOptions) {
    this.options = options;
  }

  public async load(): Promise<KnowledgeBaseAsset[]> {
    if (!KnowledgeBaseManager.cache) {
      KnowledgeBaseManager.cache = await this.resolveAssets();
    }
    return KnowledgeBaseManager.cache;
  }

  public static clear(): void {
    KnowledgeBaseManager.cache = null;
  }

  private async resolveAssets(): Promise<KnowledgeBaseAsset[]> {
    const tried: string[] = [];

    for (const candidate of this.resolveLocalPaths()) {
      tried.push(candidate);
      const assets = await this.tryLoadFromDisk(candidate);
      if (assets) return assets;
    }

    const remoteUrl = this.resolveRemoteUrl();
    if (remoteUrl) {
      tried.push(remoteUrl);
      const assets = await this.tryLoadFromRemote(remoteUrl);
      if (assets) return assets;
    }

    const message = tried.length
      ? `Knowledge base not found. Tried sources: ${tried.join(", ")}`
      : "Knowledge base not found. No sources configured.";
    throw new Error(message);
  }

  private resolveLocalPaths(): string[] {
    const paths: string[] = [];
    const configured = this.options?.absolutePath ?? this.env.KB_DATA_PATH;
    if (configured) paths.push(this.resolveToAbsolute(configured));
    paths.push(path.join(process.cwd(), "public", "kb", "ems_kb_clean.json"));
    paths.push(path.join(process.cwd(), "data", "ems_kb_clean.json"));
    return paths;
  }

  private resolveRemoteUrl(): string | null {
    const configured = this.options?.remoteUrl ?? this.env.KB_REMOTE_URL;
    if (configured) return configured;
    const base =
      this.env.KB_REMOTE_BASE_URL ||
      process.env.DEPLOY_PRIME_URL ||
      process.env.DEPLOY_URL ||
      process.env.URL;
    if (!base) return null;
    try {
      const url = new URL("/kb/ems_kb_clean.json", base);
      return url.toString();
    } catch {
      return null;
    }
  }

  private resolveToAbsolute(candidate: string): string {
    return path.isAbsolute(candidate) ? candidate : path.join(process.cwd(), candidate);
  }

  private async tryLoadFromDisk(candidate: string): Promise<KnowledgeBaseAsset[] | null> {
    try {
      const payload = await fs.readFile(candidate, "utf8");
      return JSON.parse(payload) as KnowledgeBaseAsset[];
    } catch (error: unknown) {
      if ((error as NodeJS.ErrnoException)?.code === "ENOENT") return null;
      throw error instanceof Error ? error : new Error(String(error));
    }
  }

  private async tryLoadFromRemote(url: string): Promise<KnowledgeBaseAsset[] | null> {
    try {
      const response = await fetch(url, { cache: "force-cache" });
      if (!response.ok) return null;
      const json = await response.json();
      return json as KnowledgeBaseAsset[];
    } catch (error: unknown) {
      // If remote fetch fails (e.g., offline build) swallow and fall back.
      console.warn(`[KB] Remote fetch failed for ${url}:`, error);
      return null;
    }
  }
}
