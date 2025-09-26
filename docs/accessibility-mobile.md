# Accessibility & Mobile Checklist

## Contrast
- Buttons `.micButton`, `.errorBanner`, `.inputRow` meet WCAG AA contrast (>4.5:1).
- Test via Chrome DevTools > Accessibility > Contrast (toggle dark theme).

## Focus States
- Ensure keyboard users see focus: `textarea`, buttons have focus rings via `globals.css`.
- Use `Tab` to navigate voice/send/narrative buttons.

## Touch Targets
- Buttons are ≥44px tall (`height: 46px` in CSS).
- Confirm on device simulator (DevTools responsive mode).

## Screen Readers
- Input textarea labeled via `aria-label="Message the medic bot"`.
- Error banners use `role="status"` for announcements.

## Mobile Layout
- Input row sticky at bottom with safe area padding.
- Run Playwright mobile test: `npm run test:e2e` (mobile project).

