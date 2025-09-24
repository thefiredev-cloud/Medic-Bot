'use strict';

/*
  Batch convert all PDFs under ./PDFs (and optional extra dirs passed as args)
  into Markdown files placed alongside each PDF.

  Requires: pdf-parse (npm install)

  Usage:
    node scripts/convert-pdfs-to-md.cjs                # converts ./PDFs
    node scripts/convert-pdfs-to-md.cjs ./PDFs /path/to/other/PDFs
*/

const fs = require('fs');
const fsp = require('fs/promises');
const path = require('path');
const pdfParse = require('pdf-parse');

const PROJECT_ROOT = path.resolve(__dirname, '..');
const INPUT_DIRS = process.argv.slice(2).length
  ? process.argv.slice(2)
  : [path.join(PROJECT_ROOT, 'PDFs')];

function normalizeWhitespace(text) {
  return text
    .replace(/\r/g, '')
    .replace(/[\t\f\v]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

async function* walk(dir) {
  const entries = await fsp.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      yield* walk(full);
    } else if (e.isFile() && /\.pdf$/i.test(e.name)) {
      yield full;
    }
  }
}

async function convertOne(pdfPath) {
  const base = path.basename(pdfPath).replace(/\.pdf$/i, '');
  const mdPath = pdfPath.replace(/\.pdf$/i, '.md');
  try {
    if (fs.existsSync(mdPath)) {
      return { status: 'skip', pdfPath, mdPath, reason: 'exists' };
    }
    const data = await fsp.readFile(pdfPath);
    const parsed = await pdfParse(data);
    const text = String(parsed.text || '').trim();
    if (text.length < 20) {
      return { status: 'skip', pdfPath, mdPath, reason: 'too-short' };
    }
    const cleaned = normalizeWhitespace(text);
    const title = base.replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').trim();
    const md = `# ${title}\n\n${cleaned}\n`;
    await fsp.writeFile(mdPath, md, 'utf-8');
    return { status: 'ok', pdfPath, mdPath };
  } catch (err) {
    return { status: 'err', pdfPath, mdPath, error: err && err.message ? err.message : String(err) };
  }
}

async function main() {
  const report = [];
  let ok = 0, skip = 0, err = 0;

  for (const dir of INPUT_DIRS) {
    if (!fs.existsSync(dir)) continue;
    for await (const pdf of walk(dir)) {
      const res = await convertOne(pdf);
      report.push(res);
      if (res.status === 'ok') ok++; else if (res.status === 'skip') skip++; else err++;
      if ((ok + skip + err) % 25 === 0) {
        console.log(`Converted: ${ok}, Skipped: ${skip}, Errors: ${err}`);
      }
    }
  }

  // Write a summary report in the first input dir
  const outDir = INPUT_DIRS[0] || process.cwd();
  const reportPath = path.join(outDir, 'MD_CONVERSION_REPORT.txt');
  const lines = [];
  lines.push(`Converted: ${ok}`);
  lines.push(`Skipped: ${skip}`);
  lines.push(`Errors: ${err}`);
  lines.push('');
  for (const r of report) {
    if (r.status === 'ok') lines.push(`OK    ${r.mdPath}`);
    else if (r.status === 'skip') lines.push(`SKIP  ${r.pdfPath} :: ${r.reason}`);
    else lines.push(`ERR   ${r.pdfPath} :: ${r.error}`);
  }
  await fsp.writeFile(reportPath, lines.join('\n'), 'utf-8');
  console.log(`Done. Converted: ${ok}, Skipped: ${skip}, Errors: ${err}`);
  console.log(`Report: ${reportPath}`);
}

main().catch(err => { console.error(err); process.exit(1); });


