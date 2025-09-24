'use strict';

/*
  Dev search utility: searches across data/ems_kb.json, data/ems_kb_pdfs.json, data/ems_kb_md.json
  Usage: node scripts/dev-search.cjs "your query"
  Prints top 10 results with title and snippet.
*/

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DATA = path.join(ROOT, 'data');

function loadJsonSafe(file) {
  try {
    const full = path.join(DATA, file);
    if (!fs.existsSync(full)) return [];
    const txt = fs.readFileSync(full, 'utf-8');
    const json = JSON.parse(txt);
    if (Array.isArray(json)) return json;
    return [];
  } catch {
    return [];
  }
}

const kb = [
  ...loadJsonSafe('ems_kb.json'),
  ...loadJsonSafe('ems_kb_pdfs.json'),
  ...loadJsonSafe('ems_kb_md.json')
];

function scoreDoc(doc, tokens) {
  const title = (doc.title || '').toLowerCase();
  const content = (doc.content || '').toLowerCase();
  let score = 0;
  for (const t of tokens) {
    if (!t) continue;
    const rx = new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    const titleHits = (title.match(rx) || []).length;
    const contentHits = (content.match(rx) || []).length;
    score += titleHits * 3 + contentHits * 1;
  }
  return score;
}

function snippet(text, q, len = 180) {
  const lower = text.toLowerCase();
  const idx = lower.indexOf(q.toLowerCase());
  if (idx === -1) return text.slice(0, len).trim();
  const start = Math.max(0, idx - Math.floor(len / 2));
  const end = Math.min(text.length, start + len);
  return (text.slice(start, end)).trim();
}

function search(query, limit = 10) {
  const tokens = query.toLowerCase().split(/\s+/).filter(Boolean);
  const scored = kb.map(d => ({ d, s: scoreDoc(d, tokens) })).filter(x => x.s > 0);
  scored.sort((a, b) => b.s - a.s);
  return scored.slice(0, limit).map(x => x.d);
}

const q = process.argv.slice(2).join(' ').trim() || 'cardiac arrest';
console.log(`Query: ${q}`);
const results = search(q, 10);
console.log(`Results: ${results.length}`);
for (let i = 0; i < results.length; i++) {
  const d = results[i];
  const snip = snippet(d.content || '', q, 200);
  console.log(`\n#${i + 1} ${d.title || d.id}`);
  console.log(snip);
}


