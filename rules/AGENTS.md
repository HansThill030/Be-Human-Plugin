# Be Human — Anti-AI-Slop Rules

When the **Be Human** plugin is enabled, apply these standards to every app, UI, slide deck, and piece of copy you produce or review:

## 1. Eliminate the Lucide-React & AI Icon Defaults
- **Never** default to `lucide-react` for new UIs. AI reaches for Lucide 99% of the time, which immediately stamps an app as a generic template.
- **Use Phosphor Icons** (`@phosphor-icons/react`, `phosphor-icons`, or `@phosphor-icons/vue` / SVG) as the default icon library for softer, modern optical weight (`regular`, `duotone`, `bold`).
- **Ban AI Icon & Emoji Clichés**: Never use sparkles, lightning bolts, or brain icons as generic "smart/feature" decorations, and never put emoji icons inside sidebars or nav lists.
- **Use Lottie** (`lottie-react`, `@lottiefiles/dotlottie-react`, or `lottie-web`) for purposeful micro-interactions (empty states, success confirmations, loading states)—never gratuitous loops.

## 2. Stop Describing, Start Showing (Visual Anchors First)
- Never code a visually important UI from vague adjectives ("make it look like Linear" or "modern SaaS").
- Ground every UI in a **visual anchor** first: either a user-provided screenshot/mockup, an image generated with `generate_image`, or a real `DESIGN.md` from `design-md-systems`.
- Extract layout density, negative space ratio, typographic hierarchy, and border/surface discipline from the anchor without copying its content.

## 3. Balance the Hex Palette Before Coding (And Avoid the "Post-Purple" Fallback)
- **Ban blue-to-purple gradient soup** (`#6366f1` → `#a855f7` blobs, neon-purple glow cards, unmotivated dark-mode gradients).
- **Don't just swap to the second AI default** (warm cream + terracotta + serif display everywhere, or stock untouched `shadcn/ui` tokens with only the primary button color changed). Derive the palette from the product's actual domain or visual anchor.
- Before writing UI code, define an explicit, balanced **hex color table** (surface, elevated surface, primary text, muted text, border, primary accent, secondary accent, semantic states) and specify *where each hex code is used*.

## 4. Anti-Slop UI, Motion & Slide Craft
- **No `border-l-4` / colored accent-bar cards** or glassmorphic input blobs.
- **No template sequence**: Avoid `pill badge → centered H1 → 2 CTAs + checkmarks → 3-col icon cards → 1-2-3 steps → stat banner → FAQ` and avoid repeating `sidebar + topbar + KPI grid` on every SaaS route.
- **No eyebrow/flourish spam**: Avoid all-caps tracked eyebrows (`FEATURES`, `HOW IT WORKS`) above every heading and avoid the single *italicized serif word* inside a sans-serif headline.
- **No fake motion**: Never add hover-lift on non-clickable cards (false affordance), KPI count-up animations from `0`, typewriter headlines, or scroll-reveal `opacity: 0` traps that hide grids on arrival.
- **Verify in a real browser**: Check rendered UIs via Playwright or the Browser subagent at desktop (`1440x900`) and mobile (`390x844`) before declaring done.

## 5. De-AI All Text, Copy & Slides (EN & pt-BR)
- Beyond banning em-dash (`—`) asides, repeated connectors ("Moreover", "Além disso"), and hype words ("delve", "jornada"), also eliminate **2026 AI copy tells**:
  - Matched-pair slogan headings (`"X, not Y"`, `"X. No Y."`, `"Three steps. No [jargon]."`).
  - Self-describing meta-sentences that explain what a section does with zero concrete facts, names, or numbers.
  - Leftover placeholders (`[Pending...]`, `"123 456"`), duplicate table rows, and fabricated round KPI numbers on slides.
- Keep UI labels specific (`verb + object`), errors actionable (what failed, why, how to recover), and never fabricate facts or anecdotes.
