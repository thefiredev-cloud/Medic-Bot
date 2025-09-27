#!/usr/bin/env node

// Convert all PDFs to Markdown alongside each PDF
// Usage:
//   node tools/pdf-to-md.mjs                 # converts ./PDFs
//   node tools/pdf-to-md.mjs ./PDFs /path/other/PDFs

import fs from "fs";
import * as fsp from "fs/promises";
import path from "path";
import pdfParse from "pdf-parse";

const INPUT_DIRS = process.argv.slice(2).length
  ? process.argv.slice(2)
  : [path.join(process.cwd(), "PDFs")];

function normalizeWhitespace(text) {
  return text
    .replace(/\u0000/g, " ")
    .replace(/\r/g, "")
    .replace(/[\t\f\v]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

async function* walk(dir) {
  const entries = await fsp.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      yield* walk(full);
    } else if (e.isFile() && \/\.pdf$\/i.test(e.name)) {
      yield full;
    }
  }
}

async function convertOne(pdfPath) {
  const baseName = path.basename(pdfPath).replace(/\.pdf$/i, "");
  const mdPath = pdfPath.replace(/\.pdf$/i, ".md");
  if (fs.existsSync(mdPath)) {
    return { status: "skip", pdfPath, mdPath, reason: "exists" };
  }
  const buf = await fsp.readFile(pdfPath);
  const parsed = await pdfParse(buf);
  const raw = String(parsed.text || "").trim();
  if (raw.length < 20) return { status: "skip", pdfPath, mdPath, reason: "too-short" };
  const text = normalizeWhitespace(raw);
  const title = baseName.replace(/[_-]+/g, " ").replace(/\s+/g, " ").trim();
  const md = `# ${title}\n\n${text}\n`;
  await fsp.writeFile(mdPath, md, "utf-8");
  return { status: "ok", pdfPath, mdPath };
}

async function main() {
  let ok = 0, skip = 0, err = 0;
  const report = [];
  console.log(`Converting PDFs in: ${INPUT_DIRS.join(", ")}`);
  for (const dir of INPUT_DIRS) {
    if (!fs.existsSync(dir)) {
      console.warn(`Skip missing dir: ${dir}`);
      continue;
    }
    for await (const pdf of walk(dir)) {
      try {
        const res = await convertOne(pdf);
        report.push(res);
        if (res.status === "ok") ok++; else if (res.status === "skip") skip++; else err++;
        if ((ok + skip + err) % 50 === 0) console.log(`Progress → OK:${ok} SKIP:${skip} ERR:${err}`);
      } catch (e) {
        err++;
        report.push({ status: "err", pdfPath: pdf, error: e?.message || String(e) });
      }
    }
  }
  // Write summary report in first input dir
  const outDir = INPUT_DIRS[0] || process.cwd();
  const reportPath = path.join(outDir, "MD_CONVERSION_REPORT.txt");
  const lines = [];
  lines.push(`Converted: ${ok}`);
  lines.push(`Skipped: ${skip}`);
  lines.push(`Errors: ${err}`);
  lines.push("");
  for (const r of report) {
    if (r.status === "ok") lines.push(`OK    ${r.mdPath}`);
    else if (r.status === "skip") lines.push(`SKIP  ${r.pdfPath} :: ${r.reason}`);
    else lines.push(`ERR   ${r.pdfPath} :: ${r.error}`);
  }
  await fsp.writeFile(reportPath, lines.join("\n"), "utf-8");
  console.log(`Done. Converted: ${ok}, Skipped: ${skip}, Errors: ${err}`);
  console.log(`Report: ${reportPath}`);
}

main().catch(e => { console.error(e); process.exit(1); });


