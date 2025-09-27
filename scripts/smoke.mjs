#!/usr/bin/env node

import process from "node:process";

async function checkHealth(baseUrl) {
  const res = await fetch(new URL("/api/health", baseUrl));
  if (!res.ok) {
    throw new Error(`Health endpoint failed: ${res.status}`);
  }
  const json = await res.json();
  if (json.status !== "ok") {
    throw new Error(`Health status not ok: ${JSON.stringify(json)}`);
  }
  if (!json?.kb?.loaded) {
    throw new Error("Knowledge base not warmed yet");
  }
  if ((json.kb.docCount ?? 0) < 500) {
    throw new Error(`Knowledge base doc count too low: ${json.kb.docCount}`);
  }
  const attempts = json.kb.attempts ?? [];
  if (!attempts.length) {
    console.warn("[warn] KB attempts array empty; ensure resolution diagnostics are wired up");
  }
  return json.kb;
}

async function checkChat(baseUrl) {
  const res = await fetch(new URL("/api/chat", baseUrl), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages: [{ role: "user", content: "Chest pain" }] }),
  });
  if (!res.ok) {
    throw new Error(`Chat endpoint failed: ${res.status}`);
  }
  const json = await res.json();
  if (!json.text) {
    throw new Error("Chat response missing text");
  }
}

async function checkKnowledgeBase(baseUrl) {
  const res = await fetch(new URL("/api/kb/smoke", baseUrl));
  if (!res.ok) {
    throw new Error(`KB smoke endpoint failed: ${res.status}`);
  }
  const json = await res.json();
  if (!json.ok) {
    throw new Error(`KB smoke checks failed: ${JSON.stringify(json)}`);
  }
  return json;
}

async function main() {
  const baseUrl = process.env.SMOKE_BASE_URL ?? "http://127.0.0.1:3000";
  const kb = await checkHealth(baseUrl);
  const lastSource = kb.lastSource ? `${kb.lastSource.kind}:${kb.lastSource.location}` : kb.source ?? "auto";
  console.log("KB loaded", kb.docCount, "docs from", lastSource);
  if (kb.attempts?.length) {
    console.log("KB attempts:", kb.attempts.map((a) => `${a.kind}:${a.location}:${a.success ? "ok" : "fail"}`).join(", "));
  }
  const smoke = await checkKnowledgeBase(baseUrl);
  console.log("KB smoke checks passed:", smoke.passedChecks);
  await checkChat(baseUrl);
  console.log("Smoke tests passed");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});


