import * as fs from "fs";
import MiniSearch from "minisearch";
import * as path from "path";

import ems_epinephrine_dosing from "@/data/ems_epinephrine_dosing.json"; // Epinephrine dosing
import ems_kb from "@/data/ems_kb.json"; // This line imports your EMS knowledge base
import ems_kb_clean from "@/data/ems_kb_clean.json"; // Deduplicated Markdown‑first bundle (optional)
import ems_kb_md from "@/data/ems_kb_md.json"; // Auto‑generated from Markdown
import ems_kb_pdfs from "@/data/ems_kb_pdfs.json"; // Auto‑generated from PDFs
import provider_impressions from "@/data/provider_impressions.json"; // Provider Impressions mapping

export type KBDoc = {
  id: string;
  title: string;
  category: string;
  subcategory?: string;
  keywords?: string[];
  content: string;
};

let index: MiniSearch<KBDoc> | null = null;

function augmentQueryWithSynonyms(originalQuery: string): string {
  const lower = (originalQuery || "").toLowerCase();
  const expansions: string[] = [];

  // Medication synonyms
  const addIf = (regexes: RegExp[], canonical: string) => {
    if (regexes.some((r) => r.test(lower))) expansions.push(canonical);
  };

  addIf([
    /\bsodium\s*bi\s*carb\b/,
    /\bbicarb\b/,
    /\bbi\s*carb\b/,
    /\bnahco3\b/, // chemical name
  ], "sodium bicarbonate");

  // Clinical contexts that commonly imply bicarbonate use in LA County
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

  // Return original plus expansions to maximize MiniSearch hits
  return [originalQuery, ...expansions].join(" ").trim();
}

function sanitizeTitleFromFilename(filename: string): string {
  return filename
    .replace(/\.[a-zA-Z0-9]+$/i, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function deriveKeywordsFromName(filename: string): string[] {
  const base = filename.toLowerCase().replace(/\.[a-z0-9]+$/i, "");
  const tokens = base.split(/[^a-z0-9]+/).filter(Boolean);
  const refs = (base.match(/\b(\d{3,4}(?:\.\d)?)\b/g) || []);
  const unique = Array.from(new Set([...tokens, ...refs]));
  return unique.slice(0, 20);
}

function splitMarkdownByHeadings(markdown: string): Array<{ title: string | null; content: string }>{
  const lines = markdown.split(/\n/);
  const sections: Array<{ title: string | null; content: string }> = [];
  let buffer: string[] = [];
  let currentTitle: string | null = null;

  const pushSection = () => {
    if (buffer.length === 0) return;
    sections.push({ title: currentTitle, content: buffer.join("\n").trim() });
    buffer = [];
  };

  for (const line of lines) {
    if (/^#{2,6}\s+/.test(line)) {
      pushSection();
      currentTitle = line.replace(/^#{2,6}\s+/, "").trim();
      continue;
    }
    buffer.push(line);
  }
  pushSection();
  if (sections.length === 0) return [{ title: null, content: markdown }];
  return sections.filter(s => s.content && s.content.length > 0);
}

function chunkText(text: string, size = 1400, overlap = 150): string[] {
  const chunks: string[] = [];
  let i = 0;
  while (i < text.length) {
    const end = Math.min(text.length, i + size);
    const slice = text.slice(i, end).trim();
    if (slice.length > 0) chunks.push(slice);
    if (end === text.length) break;
    i = end - overlap;
    if (i < 0) i = 0;
  }
  return chunks;
}

function walkMarkdownFiles(dir: string, files: string[] = []): string[] {
  if (!fs.existsSync(dir)) return files;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walkMarkdownFiles(full, files);
    else if (e.isFile() && /\.md$/i.test(e.name) && e.name.toLowerCase() !== "all_pdfs.md") files.push(full);
  }
  return files;
}

function loadMarkdownDocsFromDisk(): KBDoc[] {
  try {
    const kbDocs: KBDoc[] = [];
    const inputDirs: string[] = [path.join(process.cwd(), "PDFs")];
    const extra = process.env.KB_MD_DIRS;
    if (extra) extra.split(",").map(p => p.trim()).filter(Boolean).forEach(p => inputDirs.push(p));

    const allFiles: string[] = [];
    inputDirs.forEach(d => walkMarkdownFiles(d, allFiles));
    for (const filePath of allFiles) processMarkdownFile(filePath, kbDocs);
    return kbDocs;
  } catch {
    return [];
  }
}

function processMarkdownFile(filePath: string, kbDocs: KBDoc[]) {
  let content = "";
  try {
    content = fs.readFileSync(filePath, "utf-8");
  } catch {
    return;
  }
  const stripped = content.replace(/^---[\s\S]*?---\n/m, "").trim();
  if (stripped.length < 50) return;
  const base = path.basename(filePath);
  const titleBase = sanitizeTitleFromFilename(base);
  const keywords = deriveKeywordsFromName(base);
  const sections = splitMarkdownByHeadings(stripped);
  const hash = Buffer.from(filePath).toString("base64").replace(/[^A-Za-z0-9]/g, "").slice(0, 12);
  let sIdx = 0;
  for (const s of sections) {
    const sectTitle = s.title ? `${titleBase} — ${s.title}` : titleBase;
    const parts = chunkText(s.content);
    let pIdx = 0;
    for (const part of parts) {
      kbDocs.push({
        id: `mdfs:${base}:${hash}:s${sIdx + 1}:c${pIdx + 1}`,
        title: sectTitle,
        category: "Markdown",
        subcategory: "LA County EMS",
        keywords,
        content: part,
      });
      pIdx += 1;
    }
    sIdx += 1;
  }
}

function getBaseTitle(title: string): string {
  const idx = title.indexOf(" — ");
  return (idx >= 0 ? title.slice(0, idx) : title).trim();
}

function buildRawKB(): KBDoc[] {
  return [
    ...(ems_kb as KBDoc[]),
    ...(ems_epinephrine_dosing as KBDoc[]),
    ...(((ems_kb_pdfs as unknown) as KBDoc[]) || []),
    ...(((ems_kb_md as unknown) as KBDoc[]) || []),
    // Dynamically include any Markdown files present under PDFs/ and KB_MD_DIRS
    ...loadMarkdownDocsFromDisk()
  ];
}

function deduplicateKB(docs: KBDoc[]): KBDoc[] {
  // 1) If a Markdown version exists for a base title, drop all PDF chunks for that base title
  const mdBaseTitles = new Set<string>();
  for (const d of docs) {
    if ((d.category || "").toLowerCase() === "markdown") {
      mdBaseTitles.add(getBaseTitle(d.title));
    }
  }

  let filtered = docs.filter(d => {
    const isPDF = (d.category || "").toLowerCase() === "pdf";
    return !(isPDF && mdBaseTitles.has(getBaseTitle(d.title)));
  });

  // 2) Avoid double-loading the same Markdown from JSON and runtime disk scan
  // Prefer the JSON-ingested Markdown (ids starting with "md:") over runtime (ids starting with "mdfs:")
  const mdJsonBases = new Set<string>();
  for (const d of filtered) {
    if ((d.id || "").startsWith("md:")) {
      mdJsonBases.add(getBaseTitle(d.title));
    }
  }
  filtered = filtered.filter(d => {
    if (!(d.id || "").startsWith("mdfs:")) return true;
    const base = getBaseTitle(d.title);
    return !mdJsonBases.has(base);
  });

  // 3) Final de-duplication by (title + first 64 chars of content), keeping the longer content
  const seen = new Map<string, KBDoc>();
  for (const d of filtered) {
    const key = `${d.title}\n${(d.content || "").slice(0, 64)}`;
    const existing = seen.get(key);
    if (!existing) {
      seen.set(key, d);
      continue;
    }
    if ((d.content || "").length > (existing.content || "").length) {
      seen.set(key, d);
    }
  }
  return Array.from(seen.values());
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

const KB: KBDoc[] = applyScopeFilter(
  (process.env.KB_SOURCE || "clean").toLowerCase() === "clean"
    ? ((ems_kb_clean as unknown) as KBDoc[])
    : deduplicateKB(buildRawKB())
);

function buildIndex() {
  const ms = new MiniSearch<KBDoc>({
    fields: ["title", "category", "subcategory", "content", "keywords"],
    storeFields: ["id", "title", "category", "subcategory", "content"],
    searchOptions: {
      boost: { title: 3, category: 1.5 },
      prefix: true,
      fuzzy: 0.2
    }
  });
  ms.addAll(KB); // This adds all knowledge base entries to the search index
  return ms;
}

type SearchHit = { id: string };

export function searchKB(query: string, limit = 6): KBDoc[] {
  if (!index) index = buildIndex();
  const expanded = augmentQueryWithSynonyms(query);
  const results = index.search(expanded, { combineWith: "OR" }).slice(0, limit) as unknown as SearchHit[];
  const mapped = results.map((r: SearchHit) => KB.find(d => d.id === r.id)).filter(Boolean) as KBDoc[];
  
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

export function buildContext(query: string, limit = 6): string {
  const hits = searchKB(query, limit);
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
