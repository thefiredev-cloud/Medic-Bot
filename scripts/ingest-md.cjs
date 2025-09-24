'use strict';

/*
  Ingest all Markdown files under ./PDFs into ./data/ems_kb_md.json
  - Splits by headings (##, ###, etc.) and then chunks long sections
  - Emits KBDoc entries: { id, title, category, subcategory?, keywords?, content }
*/

const fs = require('fs');
const fsp = require('fs/promises');
const path = require('path');
const crypto = require('crypto');

const PROJECT_ROOT = path.resolve(__dirname, '..');
const OUT_FILE = path.join(PROJECT_ROOT, 'data', 'ems_kb_md.json');
// Accept multiple source directories via CLI args, default to ./PDFs
const INPUT_DIRS = process.argv.slice(2).length
  ? process.argv.slice(2)
  : [path.join(PROJECT_ROOT, 'PDFs')];

function toTitleFromFilename(filename) {
  const base = filename.replace(/\.md$/i, '');
  return base
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function deriveKeywords(filename) {
  const name = filename.toLowerCase();
  const tokens = name
    .replace(/\.md$/i, '')
    .split(/[^a-z0-9]+/)
    .filter(Boolean);
  const refs = Array.from(name.matchAll(/\b(\d{3,4}(?:\.\d)?)\b/g)).map(m => m[1]);
  const unique = Array.from(new Set([...tokens, ...refs]));
  return unique.slice(0, 20);
}

function splitByHeadings(markdown) {
  const lines = markdown.split(/\n/);
  const sections = [];
  let current = [];
  let currentTitle = null;
  for (const line of lines) {
    if (/^#{2,6}\s+/.test(line)) {
      if (current.length) {
        sections.push({ title: currentTitle, content: current.join('\n').trim() });
        current = [];
      }
      currentTitle = line.replace(/^#{2,6}\s+/, '').trim();
    } else {
      current.push(line);
    }
  }
  if (current.length) sections.push({ title: currentTitle, content: current.join('\n').trim() });
  // If no heading sections found, return whole doc as one section
  if (!sections.length) return [{ title: null, content: markdown }];
  // Filter empty
  return sections.filter(s => s.content && s.content.length > 0);
}

function chunkText(text, chunkSize = 1400, overlap = 150) {
  const chunks = [];
  let i = 0;
  while (i < text.length) {
    const end = Math.min(text.length, i + chunkSize);
    const slice = text.slice(i, end).trim();
    if (slice.length > 0) chunks.push(slice);
    if (end === text.length) break;
    i = end - overlap;
    if (i < 0) i = 0;
  }
  return chunks;
}

async function* walk(dir) {
  const entries = await fsp.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(full);
    } else if (entry.isFile() && /\.md$/i.test(entry.name)) {
      yield full;
    }
  }
}

async function main() {
  await fsp.mkdir(path.dirname(OUT_FILE), { recursive: true });
  const docs = [];
  let processed = 0, skipped = 0;

  console.log(`Scanning Markdown in: `, INPUT_DIRS.join(', '));
  for (const sourceDir of INPUT_DIRS) {
    // Skip non-existent dirs silently
    if (!fs.existsSync(sourceDir)) continue;
    for await (const mdPath of walk(sourceDir)) {
      const rel = path.relative(sourceDir, mdPath);
      const base = path.basename(mdPath);
      if (base.toLowerCase() === 'all_pdfs.md') { continue; }
    try {
      const content = await fsp.readFile(mdPath, 'utf-8');
      const text = content.replace(/^---[\s\S]*?---\n/m, '').trim(); // strip YAML frontmatter if any
      if (text.length < 50) {
        skipped++;
        console.warn(`Skip (too short): ${rel}`);
        continue;
      }
      const titleBase = toTitleFromFilename(base);
      const keywords = deriveKeywords(base);
      // Use full relative path in hash to minimize collisions across sources
      const hash = crypto.createHash('sha1').update(path.join(sourceDir, rel)).digest('hex').slice(0, 8);

      const sections = splitByHeadings(text);
      for (let sIdx = 0; sIdx < sections.length; sIdx++) {
        const s = sections[sIdx];
        const sectionTitle = s.title ? `${titleBase} — ${s.title}` : titleBase;
        const parts = chunkText(s.content);
        for (let pIdx = 0; pIdx < parts.length; pIdx++) {
          docs.push({
            id: `md:${base}:${hash}:s${sIdx + 1}:c${pIdx + 1}`,
            title: sectionTitle,
            category: 'Markdown',
            subcategory: 'LA County EMS',
            keywords,
            content: parts[pIdx]
          });
        }
      }
      processed++;
    } catch (err) {
      skipped++;
      console.warn(`Failed to parse ${rel}: ${err && err.message ? err.message : err}`);
    }
    }
  }

  await fsp.writeFile(OUT_FILE, JSON.stringify(docs, null, 2), 'utf-8');
  console.log(`Done. Wrote ${docs.length} chunks from ${processed} Markdown files. Skipped ${skipped}.`);
  console.log(`Output: ${OUT_FILE}`);
}

main().catch(err => { console.error(err); process.exit(1); });


