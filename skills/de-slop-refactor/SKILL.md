---
name: de-slop-refactor
description: >-
  Rescue an existing AI-generated (v0, Lovable, Bolt, or AI-scaffolded) site or
  app. Captures a before screenshot, runs static AI-slop scanning, replaces
  Lucide/purple/shadcn defaults with Phosphor Icons, Lottie, balanced hex
  palettes, and humanized copy, then verifies the after state in Playwright.
---

# De-Slop Refactor (Before / After Rescue Mode)

Use this workflow when the user brings an existing AI-built site or app and says *"this looks AI-made, fix it."*

## Step 1: Baseline Capture & Static Scan
1. Run the static slop scanner on the project:
   ```bash
   node "<ui-verify-and-audit-dir>/scripts/scan-slop.mjs" "." --warn-only
   ```
2. If the dev server is running, capture the **before** state:
   ```bash
   node "<ui-verify-and-audit-dir>/scripts/verify-ui.mjs" "http://localhost:3000" "./.be-human-verify/before"
   ```
3. Inspect `./.be-human-verify/before/desktop.png` and `mobile.png` via `read_file` to note layout clutter, card spam, and contrast issues.

## Step 2: Targeted De-AI Refactor
1. **Palette & Tokens**: Run `generate-palette.mjs` (or load a `DESIGN.md` from `design-md-systems`) to replace `from-indigo-`/`to-purple-` gradients and stock `shadcn/ui` tokens with a balanced, WCAG-verified hex palette.
2. **Icons & Motion**: Replace `lucide-react` with `@phosphor-icons/react`; remove decorative sparkles/lightning/brain icons and emoji sidebar icons; add Lottie for empty/success states; remove `opacity-0` scroll-reveal traps, KPI count-ups, typewriter text, and hover-lift on non-clickable cards.
3. **Structure & Copy**: Remove `border-l-4` accent bars, flatten nested cards, strip all-caps eyebrow spam, and run `humanize-copy` on headlines, buttons (`verb + object`), and descriptions.

## Step 3: Verify After & Compare
1. Re-run `scan-slop.mjs` (must have 0 high-severity findings).
2. Capture the **after** screenshots:
   ```bash
   node "<ui-verify-and-audit-dir>/scripts/verify-ui.mjs" "http://localhost:3000" "./.be-human-verify/after"
   ```
3. Inspect `./.be-human-verify/after/desktop.png` and `mobile.png` via `read_file` and summarize the before/after improvements.
