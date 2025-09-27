# Deployment Ops

## Health Diagnostics Checklist
- Call `/api/health` before traffic; confirm `status: ok` and `kb.loaded: true`.
- Review `kb.scope`, `kb.docCount`, `kb.lastSource`, and `kb.attempts` to ensure the bundle came from the expected path (local or remote).
- Verify `llm.apiKeyConfigured` is `true` and `runtime` matches the target environment.

## Smoke Script
- Run `SMOKE_BASE_URL=<deploy_url> npm run smoke`.
- Script logs KB doc count, last source, and resolution attempts; investigate any failed attempts or missing history.
- Streaming endpoint `/api/chat/stream` uses the same guardrails and diagnostics; smoke test is sufficient for coverage.

## Manual Warm-Up
- Optionally warm the KB during deploy with:
  ```ts
  import { ChatService } from "@/lib/managers/chat-service";
  await new ChatService().warm();
  ```
- Useful for serverless environments to avoid cold-start KB loads.
- To reset caches (e.g., between blue/green deploys):
  ```ts
  import { knowledgeBaseInitializer } from "@/lib/managers/knowledge-base-initializer";
  knowledgeBaseInitializer.reset();
  ```
- New care plan outputs surface weight-based dosing tables; confirm pediatric data present in `/api/health` KB doc count before deployments involving pediatric protocols.
