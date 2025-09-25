'use strict';

// Build a single, deduplicated KB JSON that prefers Markdown over PDFs
// Output: data/ems_kb_clean.json

const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(PROJECT_ROOT, 'data');

function safeLoad(jsonPath) {
  try {
    // eslint-disable-next-line import/no-dynamic-require, global-require
    return require(jsonPath);
  } catch (err) {
    return [];
  }
}

function getBaseTitle(title) {
  const idx = String(title || '').indexOf(' — ');
  return (idx >= 0 ? title.slice(0, idx) : title).trim();
}

function deduplicateKB(docs) {
  // 1) Prefer Markdown over PDFs for the same base title
  const mdBaseTitles = new Set();
  for (const d of docs) {
    if (String(d.category || '').toLowerCase() === 'markdown') {
      mdBaseTitles.add(getBaseTitle(d.title));
    }
  }
  let filtered = docs.filter(d => {
    const isPDF = String(d.category || '').toLowerCase() === 'pdf';
    return !(isPDF && mdBaseTitles.has(getBaseTitle(d.title)));
  });

  // 2) Prefer JSON-ingested Markdown (id starts with 'md:') over runtime/disk (id starts with 'mdfs:')
  const mdJsonBases = new Set();
  for (const d of filtered) {
    if (String(d.id || '').startsWith('md:')) {
      mdJsonBases.add(getBaseTitle(d.title));
    }
  }
  filtered = filtered.filter(d => {
    if (String(d.id || '').startsWith('mdfs:')) {
      const base = getBaseTitle(d.title);
      if (mdJsonBases.has(base)) return false;
    }
    return true;
  });

  // 3) Final duplicate elimination by (title + first 64 chars of content)
  const seen = new Map();
  for (const d of filtered) {
    const key = `${d.title}\n${String(d.content || '').slice(0, 64)}`;
    const prev = seen.get(key);
    if (!prev) {
      seen.set(key, d);
    } else {
      if (String(d.content || '').length > String(prev.content || '').length) {
        seen.set(key, d);
      }
    }
  }
  return Array.from(seen.values());
}

async function main() {
  const kbCore = safeLoad(path.join(DATA_DIR, 'ems_kb.json'));
  const kbPDF = safeLoad(path.join(DATA_DIR, 'ems_kb_pdfs.json'));
  const kbMD = safeLoad(path.join(DATA_DIR, 'ems_kb_md.json'));
  const epi = safeLoad(path.join(DATA_DIR, 'ems_epinephrine_dosing.json'));

  const raw = [
    ...kbCore,
    ...epi,
    ...kbPDF,
    ...kbMD
  ];

  const clean = deduplicateKB(raw);

  const outPath = path.join(DATA_DIR, 'ems_kb_clean.json');
  fs.writeFileSync(outPath, JSON.stringify(clean, null, 2), 'utf-8');

  const stats = {
    input_counts: {
      core: kbCore.length,
      epinephrine: epi.length,
      pdf_chunks: kbPDF.length,
      md_chunks: kbMD.length
    },
    output_count: clean.length,
    output_path: outPath
  };
  console.log(JSON.stringify(stats, null, 2));
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});


