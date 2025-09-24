'use strict';

/*
  Ingest all PDFs under ./PDFs into ./data/ems_kb_pdfs.json
  - Extract text with pdf-parse (CommonJS script to avoid ESM issues)
  - Chunk text into ~1200 chars with 150 char overlap
  - Write array of KBDoc { id, title, category, subcategory?, keywords?, content }
*/

const fs = require('fs');
const fsp = require('fs/promises');
const path = require('path');
const crypto = require('crypto');
const pdfParse = require('pdf-parse');

const PROJECT_ROOT = path.resolve(__dirname, '..');
const PDF_DIR = path.join(PROJECT_ROOT, 'PDFs');
const OUT_FILE = path.join(PROJECT_ROOT, 'data', 'ems_kb_pdfs.json');

function toTitleFromFilename(filename) {
  const base = filename.replace(/\.pdf$/i, '');
  return base
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function deriveKeywords(filename) {
  const name = filename.toLowerCase();
  const tokens = name
    .replace(/\.pdf$/i, '')
    .split(/[^a-z0-9]+/)
    .filter(Boolean);
  const refs = Array.from(name.matchAll(/\b(\d{3,4}(?:\.\d)?)\b/g)).map(m => m[1]);
  const unique = Array.from(new Set([...tokens, ...refs]));
  return unique.slice(0, 20);
}

function chunkText(text, chunkSize = 1200, overlap = 150) {
  const clean = text.replace(/\u0000/g, '').replace(/\r/g, '');
  const chunks = [];
  let i = 0;
  while (i < clean.length) {
    const end = Math.min(clean.length, i + chunkSize);
    const slice = clean.slice(i, end).trim();
    if (slice.length > 0) chunks.push(slice);
    if (end === clean.length) break;
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
    } else if (entry.isFile() && /\.pdf$/i.test(entry.name)) {
      yield full;
    }
  }
}

async function main() {
  const outDir = path.dirname(OUT_FILE);
  await fsp.mkdir(outDir, { recursive: true });

  const docs = [];
  let processed = 0;
  let skipped = 0;

  console.log(`Scanning PDFs in ${PDF_DIR} ...`);
  for await (const pdfPath of walk(PDF_DIR)) {
    const rel = path.relative(PDF_DIR, pdfPath);
    const base = path.basename(pdfPath);
    try {
      const data = await fsp.readFile(pdfPath);
      const parsed = await pdfParse(data);
      const text = String(parsed.text || '').trim();
      if (text.length < 50) {
        skipped++;
        console.warn(`Skip (too short): ${rel}`);
        continue;
      }
      const chunks = chunkText(text);
      const title = toTitleFromFilename(base);
      const keywords = deriveKeywords(base);
      const fileHash = crypto.createHash('sha1').update(base).digest('hex').slice(0, 8);
      chunks.forEach((content, idx) => {
        docs.push({
          id: `pdf:${base}:${fileHash}:c${idx + 1}`,
          title,
          category: 'PDF',
          subcategory: 'LA County EMS',
          keywords,
          content
        });
      });
      processed++;
      if (processed % 25 === 0) console.log(`Processed ${processed} PDFs ...`);
    } catch (err) {
      skipped++;
      console.warn(`Failed to parse ${rel}: ${err && err.message ? err.message : err}`);
    }
  }

  // Write output
  await fsp.writeFile(OUT_FILE, JSON.stringify(docs, null, 2), 'utf-8');
  console.log(`Done. Wrote ${docs.length} chunks from ${processed} PDFs. Skipped ${skipped}.`);
  console.log(`Output: ${OUT_FILE}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});


