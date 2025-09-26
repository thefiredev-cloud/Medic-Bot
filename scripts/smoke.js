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

async function main() {
  const baseUrl = process.env.SMOKE_BASE_URL ?? "http://127.0.0.1:3000";
  await checkHealth(baseUrl);
  await checkChat(baseUrl);
  console.log("Smoke tests passed");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

