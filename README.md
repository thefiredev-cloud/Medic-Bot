# EmergiBot - LA County EMS Protocols

A comprehensive EMS protocol assistant for fire and first responders. Local JSON knowledge base + BM25 retrieval (MiniSearch) + any OpenAI‑compatible chat endpoint.

## Quickstart

1) **Create env**
   ```bash
   cp .env.example .env
   # put your API key in LLM_API_KEY
   ```

2) **Install + run**
   ```bash
   npm i
   npm run dev
   # then visit http://localhost:3000
   ```

3) **Test it**
   Ask: "What's the protocol for cardiac arrest?" or "When do I need to contact base for chest pain?"

## What this is
- Next.js App Router
- API route `/api/chat` that:
  - BM25 searches `./data/ems_kb.json` for top 6 chunks
  - Calls your `LLM_BASE_URL /chat/completions` with the context and system prompt
  - Returns the assistant text (non‑streaming for simplicity)

## Features
- **47 LA County EMS Protocols** covering all medical emergencies
- **Quick bullet-point format** for rapid field reference
- **Base contact requirements** clearly marked (YES/NO)
- **Voice command optimized** for hands-free use
- **Comprehensive search** across all protocols

## Upgrade paths
- **Supabase + pgvector**: swap `lib/retrieval.ts` with your DB search and pass results to the model.
- **Streaming**: switch the fetch in `app/api/chat/route.ts` to `stream: true` and stream SSE to the client.
- **Add more protocols**: add chunks to `data/ems_kb.json` (fields are obvious).

## Important
This bot is **for educational and reference purposes only** and should not replace proper medical training or official protocol manuals.
# Medic-Bot
