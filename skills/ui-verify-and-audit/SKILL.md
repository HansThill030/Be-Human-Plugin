---
name: ui-verify-and-audit
description: >-
  Audit UI code against Web Interface Guidelines and verify rendered apps in a
  real Playwright browser across desktop (1440x900) and mobile (390x844)
  viewports. Checks horizontal overflow, broken images, console/page errors,
  accessibility basics, and AI-slop tells (lucide-react, border-l-4 accent
  bars, opacity:0 scroll-reveal traps, leaked placeholders, italic-serif
  flourishes), and captures screenshots for visual inspection.
---

# UI Verify & Audit

Never declare an app or website "done" based on code inspection alone. Audit the code and verify the rendered UI in a real browser.

## 1. Code Audit (Web Interface Guidelines + 2026 AI-Slop Tells)

1. **Scan for AI-Slop Tells**:
   - Check `package.json` and source files for `lucide-react` (migrate to `@phosphor-icons/react`).
   - Check for unmotivated `indigo`/`purple` gradient classes (`from-indigo-`, `to-purple-`) OR the "post-purple" cream+terracotta+italic-serif fallback.
   - Check for `border-l-4` / colored card accent bars, all-caps tracked eyebrow spam above every heading, emoji icons in sidebars, and non-clickable cards with hover-lift classes.
   - Check for missing `alt` attributes, `<div onClick>` instead of `<button>`, missing form `<label>`s, and missing `prefers-reduced-motion` support.
2. **Web Interface Guidelines Compliance**:
   - When reviewing UI files against Vercel's Web Interface Guidelines, fetch the latest rules from `https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md` (when network is available) and report findings in terse `file:line` format.

## 2. Real-Browser Verification (Playwright)

Run the bundled `scripts/verify-ui.mjs` script against a running local dev server or static URL:

```bash
node "<skill-dir>/scripts/verify-ui.mjs" "http://localhost:3000" "./.be-human-verify"
```

What `verify-ui.mjs` checks automatically:
- **Desktop (`1440x900`) & Mobile (`390x844`)** viewports.
- **Console errors & uncaught page errors** (must be 0).
- **Horizontal overflow** (`document.documentElement.scrollWidth <= window.innerWidth`).
- **Broken images** and **missing `alt` attributes**.
- **AI-Slop DOM Signals**: `opacity: 0` scroll-reveal traps, `border-l-*`/`border-t-*` colored accent-bar cards, and leaked `[Pending...]`/`[TODO...]` placeholders.
- **Screenshots** saved to `./.be-human-verify/desktop.png` and `./.be-human-verify/mobile.png` so you can inspect them directly with `read_file` for visual density, negative space, alignment, and palette balance.

> Note: Requires `playwright` installed in the project or globally. If `playwright` is not installed yet, run `npx playwright install chromium` or use the `browser` subagent to visually inspect `localhost:PORT`.
