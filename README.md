# EmergiBot - LA County EMS Protocols

A comprehensive EMS protocol assistant for fire and first responders. Local JSON knowledge base + BM25 retrieval (MiniSearch) + any OpenAI‑compatible chat endpoint.

## Quickstart

1) **Create env**
   ```bash
   cp .env.example .env
   # set LLM_API_KEY and keep KB_SCOPE=pcm, KB_SOURCE=clean
   ```

2) **Install + run**
   ```bash
   npm i
   npm run dev
   # visit http://localhost:3000
   ```

3) **Optional warm-up**
   ```bash
   node -e "import('./dist/lib/managers/chat-service.js').then(m => new m.ChatService().warm())"
   ```

4) **Test it**
   Ask: "What's the protocol for cardiac arrest?" or "When do I need to contact base for chest pain?"

## What this is
- Next.js App Router
- API route `/api/chat` that:
  - BM25 searches `./data/ems_kb.json` for top 6 chunks
  - Calls your `LLM_BASE_URL /chat/completions` with the context and system prompt
  - Returns the assistant text (non‑streaming for simplicity)

## Features
- **LA County PCM focused** – KB scope restricted to clean PCM ingestion
- **Rapid bullet-point answers** with base contact and med dosing
- **Voice command optimized** for hands-free use
- **Health endpoint** (`/api/health`) for deployments (reports KB attempts + LLM diagnostics)
- **Fallback guardrails** if LLM unreachable

## Upgrade paths
- **Supabase + pgvector**: swap `lib/retrieval.ts` with your DB search and pass results to the model.
- **Streaming**: switch the fetch in `app/api/chat/route.ts` to `stream: true` and stream SSE to the client.
- **Add more protocols**: add chunks to `data/ems_kb.json` (fields are obvious).

## Scripts
- `npm run dev` – start dev server
- `npm run lint` – lint sources
- `npm run test` – Vitest unit/integration
- `npm run test:e2e` – Playwright suite (requires server)
- `npm run smoke` – hits `/api/health` and `/api/chat`, prints KB source history

## Deployment (Netlify)
- Ensure Node 20 runtime (see `package.json` engines)
- Set env vars: `LLM_API_KEY`, `KB_SCOPE=pcm`, `KB_SOURCE=clean`, optional KB path
- Pre-deploy: `npm run lint && npm run test && npm run test:e2e`
- Optional: `SMOKE_BASE_URL=https://<site>.netlify.app npm run smoke`
  - Confirms KB source resolution history (local vs remote) and prints last successful source

## Deployment Ops Quick Reference
- `/api/health` returns KB doc count, PCM scope, last source, resolution attempts, and LLM diagnostics
- `docs/deployment-ops.md` lists the full checklist for warming and smoke testing
- To clear caches between deploys: `node -e "import('./dist/lib/managers/knowledge-base-initializer.js').then(m => m.knowledgeBaseInitializer.reset())"`
- Care plans in the UI include dosing tables generated from the medication registry; keep pediatric KB bundles updated.
- Streaming endpoint available at `/api/chat/stream` (mirrors guardrails, currently returns buffered JSON pending SSE adoption).

## Important
This bot is **for educational reference** only and does not replace official prehospital training or command authority.
