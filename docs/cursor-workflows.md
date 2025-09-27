# Cursor MCP Workflows

Use these sequences inside Cursor with MCP tools enabled.

## 1. Sync / Install
- `npm install`
- `npm run lint`
- `npm run test`
- `npm run test:e2e`
- `npm run test:unit tests/unit/managers/NarrativeManager.test.ts`

## 2. Smoke Test (staging/prod)
- `SMOKE_BASE_URL=https://<deployment-url>` `npm run smoke`

## 3. Lighthouse (optional)
- `npx @lhci/cli autorun --collect.url=https://<deployment-url>`

