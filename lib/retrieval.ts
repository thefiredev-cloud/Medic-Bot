import MiniSearch from "minisearch";
import ems_kb from "@/data/ems_kb.json"; // This line imports your EMS knowledge base
import ems_kb_pdfs from "@/data/ems_kb_pdfs.json"; // Auto‑generated from PDFs
import ems_kb_md from "@/data/ems_kb_md.json"; // Auto‑generated from Markdown
import ems_epinephrine_dosing from "@/data/ems_epinephrine_dosing.json"; // Epinephrine dosing
import provider_impressions from "@/data/provider_impressions.json"; // Provider Impressions mapping
import * as fs from "fs";
import * as path from "path";

export type KBDoc = {
  id: string;
  title: string;
  category: string;
  subcategory?: string;
  keywords?: string[];
  content: string;
};

let index: MiniSearch<KBDoc> | null = null;

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
  let current: string[] = [];
  let currentTitle: string | null = null;
  for (const line of lines) {
    if (/^#{2,6}\s+/.test(line)) {
      if (current.length > 0) {
        sections.push({ title: currentTitle, content: current.join("\n").trim() });
        current = [];
      }
      currentTitle = line.replace(/^#{2,6}\s+/, "").trim();
    } else {
      current.push(line);
    }
  }
  if (current.length > 0) {
    sections.push({ title: currentTitle, content: current.join("\n").trim() });
  }
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
    const inputDirs: string[] = [];
    // Default to local PDFs dir
    inputDirs.push(path.join(process.cwd(), "PDFs"));
    // Allow extra dirs via env (comma-separated)
    const extra = process.env.KB_MD_DIRS;
    if (extra) {
      for (const p of extra.split(",")) {
        const trimmed = p.trim();
        if (trimmed) inputDirs.push(trimmed);
      }
    }
    const allFiles: string[] = [];
    inputDirs.forEach(d => walkMarkdownFiles(d, allFiles));
    for (const filePath of allFiles) {
      let content = "";
      try {
        content = fs.readFileSync(filePath, "utf-8");
      } catch {
        continue;
      }
      const stripped = content.replace(/^---[\s\S]*?---\n/m, "").trim();
      if (stripped.length < 50) continue;
      const base = path.basename(filePath);
      const titleBase = sanitizeTitleFromFilename(base);
      const keywords = deriveKeywordsFromName(base);
      const sections = splitMarkdownByHeadings(stripped);
      const hash = Buffer.from(filePath).toString("base64").replace(/[^A-Za-z0-9]/g, "").slice(0, 12);
      sections.forEach((s, sIdx) => {
        const sectTitle = s.title ? `${titleBase} — ${s.title}` : titleBase;
        const parts = chunkText(s.content);
        parts.forEach((part, pIdx) => {
          kbDocs.push({
            id: `mdfs:${base}:${hash}:s${sIdx + 1}:c${pIdx + 1}`,
            title: sectTitle,
            category: "Markdown",
            subcategory: "LA County EMS",
            keywords,
            content: part,
          });
        });
      });
    }
    return kbDocs;
  } catch {
    return [];
  }
}

const KB: KBDoc[] = [
  ...ems_kb as KBDoc[],
  ...ems_epinephrine_dosing as KBDoc[],
  ...((ems_kb_pdfs as unknown as KBDoc[]) || []),
  ...((ems_kb_md as unknown as KBDoc[]) || []),
  // Dynamically include any Markdown files present under PDFs/ and KB_MD_DIRS
  ...loadMarkdownDocsFromDisk()
]; // Include PDF-derived KB

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

export function searchKB(query: string, limit = 6): KBDoc[] {
  if (!index) index = buildIndex();
  const results = index.search(query, { combineWith: "OR" }).slice(0, limit);
  const mapped = results.map((r: any) => KB.find(d => d.id === r.id)).filter(Boolean) as KBDoc[];
  
  // Debug logging
  if (query.toLowerCase().includes('mcg') || query.toLowerCase().includes('1309')) {
    console.log('MCG 1309 Query:', query);
    console.log('Search results:', results.length);
    console.log('Mapped results:', mapped.length);
    if (mapped.length > 0) {
      console.log('First result:', mapped[0].title);
    }
  }
  
  return mapped;
}

export function buildContext(query: string, limit = 6): string {
  const hits = searchKB(query, limit);
  
  // Debug logging for MCG 1309 queries and stroke queries
  if (query.toLowerCase().includes('mcg') || query.toLowerCase().includes('1309') || query.toLowerCase().includes('pink') || query.toLowerCase().includes('grey') || query.toLowerCase().includes('red') || query.toLowerCase().includes('purple') || query.toLowerCase().includes('yellow') || query.toLowerCase().includes('white') || query.toLowerCase().includes('blue') || query.toLowerCase().includes('orange') || query.toLowerCase().includes('green') || query.toLowerCase().includes('stroke')) {
    console.log('Debug Query:', query);
    console.log('Search hits:', hits.length);
    hits.forEach((hit, i) => {
      console.log(`Hit ${i + 1}:`, hit.title);
    });
  }
  
  if (!hits.length) return "No direct matches in knowledge base.";
  
  // Add Provider Impressions context if query matches common medical terms
  const medicalTerms = ['chest pain', 'cardiac', 'stroke', 'seizure', 'trauma', 'respiratory', 'abdominal', 'allergic', 'burn', 'overdose', 'diabetic', 'fever', 'shock', 'hypotension', 'bradycardia', 'tachycardia', 'syncope', 'dizziness', 'headache', 'nausea', 'vomiting', 'bleeding', 'pregnancy', 'childbirth', 'newborn', 'behavioral', 'psychiatric', 'alcohol', 'intoxication', 'electrocution', 'hypothermia', 'hyperthermia', 'carbon monoxide', 'hazmat', 'dystonic', 'epistaxis', 'eye', 'dental', 'ent', 'brue', 'airway', 'obstruction', 'choking', 'inhalation', 'smoke', 'stings', 'bites', 'submersion', 'drowning'];
  
  const queryLower = query.toLowerCase();
  const hasMedicalTerms = medicalTerms.some(term => queryLower.includes(term));
  
  let context = "";
  
  if (hasMedicalTerms) {
    // Find relevant Provider Impressions
    const relevantPIs = provider_impressions.filter(pi => 
      queryLower.includes(pi.pi_name.toLowerCase()) ||
      queryLower.includes(pi.pi_code.toLowerCase()) ||
      queryLower.includes(pi.tp_name.toLowerCase()) ||
      pi.keywords?.some(keyword => queryLower.includes(keyword.toLowerCase()))
    ).slice(0, 3);
    
    if (relevantPIs.length > 0) {
      context += "**PROVIDER IMPRESSIONS REFERENCE:**\n";
      relevantPIs.forEach(pi => {
        context += `• **${pi.pi_name} (${pi.pi_code})** → **${pi.tp_name} (${pi.tp_code}${pi.tp_code_pediatric ? '/' + pi.tp_code_pediatric : ''})**\n`;
        context += `  ${pi.guidelines}\n\n`;
      });
      context += "---\n\n";
    }
  }
  
  const chunks = hits.map((d, i) => {
    const trimmed = d.content.length > 1400 ? d.content.slice(0, 1400) + " …" : d.content;
    return `#${i + 1} • ${d.title} [${d.category}${d.subcategory ? " / " + d.subcategory : ""}]\n${trimmed}`;
  });
  
  return context + chunks.join("\n\n---\n\n");
}
