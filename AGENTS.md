# Be Human — Anti-AI-Slop Rules

Apply these standards to every app, UI, slide deck, and piece of copy you produce or review:

## 1. Eliminate the Lucide-React & AI Icon Defaults
- **Never** default to `lucide-react` for new UIs. Use **Phosphor Icons** (`@phosphor-icons/react`, `phosphor-icons`, or `@phosphor-icons/vue`) as the default icon library.
- **Ban AI Icon & Emoji Clichés**: Never use sparkles, lightning bolts, or brain icons as generic "smart/feature" decorations, and never put emoji icons inside sidebars or nav lists.
- **Use Lottie** (`@lottiefiles/dotlottie-react`, `lottie-react`) for purposeful micro-interactions (empty states, confirmations, loading)—never gratuitous loops.

## 2. Stop Describing, Start Showing (Visual Anchors First)
- Never code a visually important UI from vague adjectives ("make it look like Linear").
- Ground every UI in a **visual anchor** first: a user-provided screenshot, a generated reference image (`skills/visual-anchor-to-code`), or a real `DESIGN.md` (`skills/design-md-systems`).

## 3. Balance the Hex Palette Before Coding (No "Post-Purple" Fallback)
- **Ban blue-to-purple gradient soup** (`#6366f1` → `#a855f7` blobs, neon-purple glow cards).
- **Don't fall back to the second AI cliché** (warm cream + terracotta + serif everywhere, or untouched `shadcn/ui` stock tokens). Derive the palette from the domain or visual anchor.
- Define an explicit **hex color table** (canvas, surface, muted, primary ink, secondary ink, border, primary accent, secondary accent, semantic states) before writing UI code.

## 4. Anti-Slop UI, Motion & Slide Craft
- **No `border-l-4` / colored accent-bar cards** or glassmorphic input blobs.
- **No template sequence**: Avoid `pill badge → centered H1 → 2 CTAs + checkmarks → 3-col icon cards → 1-2-3 steps → stat banner → FAQ` and avoid repeating `sidebar + topbar + KPI grid` on every SaaS route.
- **No eyebrow/flourish spam**: Avoid all-caps tracked eyebrows (`FEATURES`, `HOW IT WORKS`) above every heading and avoid a single *italicized serif word* inside a sans-serif headline.
- **No fake motion**: Never add hover-lift on non-clickable cards, KPI count-up animations from `0`, typewriter headlines, or scroll-reveal `opacity: 0` traps.
- **Verify in a real browser**: Run `skills/ui-verify-and-audit/scripts/verify-ui.mjs` (Playwright) at desktop (`1440x900`) and mobile (`390x844`) before declaring done.

## 5. De-AI All Text, Copy & Slides (EN & pt-BR)
- Ban em-dash (`—`) asides as a crutch, repeated connectors ("Moreover", "Além disso"), hype words ("delve", "jornada"), matched-pair slogans (`"X, not Y"`), self-describing meta-sentences, leftover placeholders (`[Pending...]`), and fabricated round KPI numbers on slides.
- Keep UI labels specific (`verb + object`), errors actionable (what failed, why, how to recover), and never fabricate facts or anecdotes.
