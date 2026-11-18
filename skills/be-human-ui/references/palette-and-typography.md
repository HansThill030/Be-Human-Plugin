# Pre-Balanced Hex Palettes & Typography

## Rule: Balance Your Palette Before Coding
AI has two predictable color/type traps:
1. **Trap 1 — Blue-to-Purple Gradient Soup**: `#6366f1` → `#a855f7` blobs, glowing neon borders on `#0f172a` slate, and low-contrast grey text in permanent dark mode.
2. **Trap 2 — The "Post-Purple" Fallback**: When told to avoid purple/dark mode, AI defaults to warm cream/paper + muted terracotta/red + serif display headers, or leaves `shadcn/ui` stock tokens untouched and only changes the primary CTA color.

Derive your palette from the **actual domain, brand, or visual anchor** (e.g., Coolors or a `DESIGN.md`), and write a **Palette Contract** with exact hex codes and usage rules *before* writing CSS or JSX:

```text
Palette Contract Template (fill for each project):
- Canvas / Page BG:      #______  (main viewport background)
- Surface / Card BG:     #______  (elevated containers, 1px hairline border)
- Muted Surface:         #______  (inset panels, table headers, code blocks)
- Primary Ink:           #______  (headings, primary body — >= 4.5:1 contrast)
- Secondary Ink:         #______  (descriptions, metadata — >= 4.5:1 contrast)
- Hairline Border:       #______  (dividers, input outlines)
- Primary Accent:        #______  (primary CTA, active indicator — max 10% of viewport)
- Secondary Accent:      #______  (sparingly for semantic/highlight tags)
- Semantic Error/Warn:   #______ / #______
```

### Color Discipline Rules
1. **60 / 30 / 10 Ratio**: ~60% canvas/neutral space, ~30% secondary surfaces & typography, ~10% primary accent.
2. **No Colored Left/Top Card Accent Bars**: Never slap `border-l-4` or colored top strips onto cards to fake visual interest.
3. **No Unmotivated Gradients or Glow Halos**: Solid, well-calibrated surfaces beat mesh gradients and colored `box-shadow` halos.
4. **Customize Component Kit Tokens**: If using `shadcn/ui` or a component library, customize `--radius`, `--border`, `--ring`, and surface tokens to match the Palette Contract—never leave stock defaults.

## Typography Hierarchy
- **Break the AI Font Trio**: Avoid defaulting blindly to `Inter` everywhere, or repeating the same `Space Grotesk` + `Instrument Serif` + `Geist` combination. Choose typography that fits the product's actual voice.
- **No Italic-Serif Word Flourish**: Don't put a single *italicized serif word* inside a sans-serif headline (e.g., *"Built for modern teams"* with *modern* in italic serif) — it has become a widespread AI headline tell.
- **No All-Caps Eyebrow Spam**: Don't place tiny tracked uppercase labels (`FEATURES`, `HOW IT WORKS`, `WHY US`) above every section heading.
- **Tighter Display Tracking & Measure**: Large headings (`>= 32px`) use `-0.02em` to `-0.035em` letter-spacing; prose stays between `55ch` and `72ch`; data/tables use `font-variant-numeric: tabular-nums`.
