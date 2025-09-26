import MiniSearch from "minisearch";

import provider_impressions from "@/data/provider_impressions.json"; // Provider Impressions mapping
import { KnowledgeBaseManager } from "@/lib/storage/knowledge-base-manager";

export type KBDoc = {
  id: string;
  title: string;
  category: string;
  subcategory?: string;
  keywords?: string[];
  content: string;
};

let index: MiniSearch<KBDoc> | null = null;
let kbDocs: KBDoc[] | null = null;

async function loadKnowledgeBase(): Promise<KBDoc[]> {
  if (!kbDocs) {
    const manager = new KnowledgeBaseManager();
    const docs = await manager.load();
    kbDocs = applyScopeFilter(docs);
  }
  return kbDocs;
}

function getLoadedKB(): KBDoc[] {
  if (!kbDocs) {
    throw new Error("Knowledge base not loaded. Call initializeKnowledgeBase() before using retrieval utilities.");
  }
  return kbDocs;
}

function ensureIndexLoaded() {
  if (index) return;
  const docs = getLoadedKB();
  const ms = new MiniSearch<KBDoc>({
    fields: ["title", "category", "subcategory", "content", "keywords"],
    storeFields: ["id", "title", "category", "subcategory", "content"],
    searchOptions: {
      boost: { title: 3, category: 1.5 },
      prefix: true,
      fuzzy: 0.2
    }
  });
  ms.addAll(docs);
  index = ms;
}

export async function initializeKnowledgeBase(): Promise<void> {
  await loadKnowledgeBase();
  ensureIndexLoaded();
}

function applyQueryNormalization(query: string): string {
  return query.replace(/\s+/g, " ").trim();
}

function augmentQueryWithSynonyms(originalQuery: string): string {
  const normalized = applyQueryNormalization(originalQuery);
  const lower = normalized.toLowerCase();
  const expansions: string[] = [];

  const addIf = (regexes: RegExp[], canonical: string) => {
    if (regexes.some((r) => r.test(lower))) expansions.push(canonical);
  };

  addIf([
    /\bsodium\s*bi\s*carb\b/,
    /\bbicarb\b/,
    /\bbi\s*carb\b/,
    /\bnahco3\b/,
  ], "sodium bicarbonate");

  const mentionsCrush = /\bcrush\b/.test(lower);
  const mentionsTCA = /\b(tca|tricyclic)\b/.test(lower);
  const mentionsHyperK = /\b(hyperk|hyperkalemi\w*)\b/.test(lower);
  const mentionsDialysis = /\bdialysis|renal failure|ckd\b/.test(lower);
  const peakedT = /\bpeaked\s*t\s*waves?\b/.test(lower);

  if (mentionsCrush) {
    expansions.push(
      "crush injury 1242",
      "crush syndrome",
      "hyperkalemia",
      "sodium bicarbonate",
    );
  }
  if (mentionsTCA) {
    expansions.push(
      "tricyclic overdose",
      "qrs widening",
      "sodium bicarbonate",
    );
  }
  if (mentionsHyperK || mentionsDialysis || peakedT) {
    expansions.push(
      "hyperkalemia",
      "sodium bicarbonate",
      "cardiac arrest",
      "bradycardia",
    );
  }

  return [normalized, ...expansions].join(" ").trim();
}

function isPCMDoc(d: KBDoc): boolean {
  const category = String(d.category || "").toLowerCase();
  const subcat = String(d.subcategory || "").toLowerCase();
  // Prehospital Care Manual docs come from our PDFs/Markdown ingest
  // which are categorized as PDF/Markdown with subcategory 'LA County EMS'
  return (category === "markdown" || category === "pdf") && subcat.includes("la county ems");
}

function applyScopeFilter(docs: KBDoc[]): KBDoc[] {
  const scope = (process.env.KB_SCOPE || "pcm").toLowerCase();
  if (scope === "pcm") {
    return docs.filter(isPCMDoc);
  }
  return docs;
}

type SearchHit = { id: string };

export async function searchKB(query: string, limit = 6): Promise<KBDoc[]> {
  ensureIndexLoaded();
  const docs = getLoadedKB();
  const expanded = augmentQueryWithSynonyms(query);
  const results = index!.search(expanded, { combineWith: "OR" }).slice(0, limit) as unknown as SearchHit[];
  const mapped = results
    .map((r: SearchHit) => docs.find(d => d.id === r.id))
    .filter(Boolean) as KBDoc[];
  
  // Debug logging (disabled in production)
  // if (process.env.NODE_ENV !== 'production' && (query.toLowerCase().includes('mcg') || query.toLowerCase().includes('1309'))) {
  //   console.log('MCG 1309 Query:', query);
  //   console.log('Search results:', results.length);
  //   console.log('Mapped results:', mapped.length);
  //   if (mapped.length > 0) {
  //     console.log('First result:', mapped[0].title);
  //   }
  // }
  
  return mapped;
}

export async function buildContext(query: string, limit = 6): Promise<string> {
  const hits = await searchKB(query, limit);
  const ql = query.toLowerCase();
  // if (process.env.NODE_ENV !== 'production' && isSpecialDebugQuery(ql)) debugLogQuery(ql, hits);
  if (!hits.length) return "No direct matches in knowledge base.";
  const pcmOnly = (process.env.KB_SCOPE || "").toLowerCase() === "pcm";
  const context = buildProviderImpressionsSection(ql, pcmOnly);
  const chunks = buildKBChunks(hits);
  return context + chunks.join("\n\n---\n\n");
}

// Debug helpers kept for local investigation only
// function isSpecialDebugQuery(ql: string): boolean {
//   const tokens = ['mcg', '1309', 'pink', 'grey', 'red', 'purple', 'yellow', 'white', 'blue', 'orange', 'green', 'stroke'];
//   return tokens.some(t => ql.includes(t));
// }
// function debugLogQuery(ql: string, hits: KBDoc[]) {
//   console.log('Debug Query:', ql);
//   console.log('Search hits:', hits.length);
//   hits.forEach((hit, i) => console.log(`Hit ${i + 1}:`, hit.title));
// }

function buildProviderImpressionsSection(ql: string, pcmOnly: boolean): string {
  const medicalTerms = ['chest pain', 'cardiac', 'stroke', 'seizure', 'trauma', 'respiratory', 'abdominal', 'allergic', 'burn', 'overdose', 'diabetic', 'fever', 'shock', 'hypotension', 'bradycardia', 'tachycardia', 'syncope', 'dizziness', 'headache', 'nausea', 'vomiting', 'bleeding', 'pregnancy', 'childbirth', 'newborn', 'behavioral', 'psychiatric', 'alcohol', 'intoxication', 'electrocution', 'hypothermia', 'hyperthermia', 'carbon monoxide', 'hazmat', 'dystonic', 'epistaxis', 'eye', 'dental', 'ent', 'brue', 'airway', 'obstruction', 'choking', 'inhalation', 'smoke', 'stings', 'bites', 'submersion', 'drowning'];
  const hasMedicalTerms = medicalTerms.some(term => ql.includes(term));
  if (!hasMedicalTerms) return "";

  const relevantPIs = provider_impressions.filter(pi =>
    ql.includes(pi.pi_name.toLowerCase()) ||
    ql.includes(pi.pi_code.toLowerCase()) ||
    ql.includes(pi.tp_name.toLowerCase()) ||
    pi.keywords?.some(keyword => ql.includes(keyword.toLowerCase()))
  ).slice(0, 3);
  if (!relevantPIs.length) return "";

  let section = "**PROVIDER IMPRESSIONS REFERENCE (LA County):**\n";
  for (const pi of relevantPIs) {
    section += `• **${pi.pi_name} (${pi.pi_code})** → **${pi.tp_name} (${pi.tp_code}${pi.tp_code_pediatric ? '/' + pi.tp_code_pediatric : ''})**\n`;
    if (!pcmOnly && pi.guidelines) section += `  ${pi.guidelines}\n\n`;
    else section += `\n`;
  }
  return section + "---\n\n";
}

function buildKBChunks(hits: KBDoc[]): string[] {
  return hits.map((d, i) => {
    const trimmed = d.content.length > 1400 ? d.content.slice(0, 1400) + " …" : d.content;
    return `#${i + 1} • ${d.title} [${d.category}${d.subcategory ? " / " + d.subcategory : ""}]\n${trimmed}`;
  });
}
