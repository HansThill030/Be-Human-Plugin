---
name: be-human-ui
description: >-
  Remove the "AI face" from apps, websites, and UI components. Replaces generic
  Lucide-react icons and blue-purple gradient soup with Phosphor Icons, Lottie
  micro-interactions, pre-balanced hex color palettes, visual anchors, and
  taste-skill + impeccable craft passes (audit, critique, polish, bolder,
  quieter, distill, clarify, harden). Use whenever building, redesigning,
  restyling, or reviewing any frontend UI so it looks genuinely human-crafted.
---

# Be Human UI

Eliminate the telltale "AI-generated template" look from any web or app interface.

## The 4 Non-Negotiable Pillars

1. **Swap Lucide for Phosphor Icons + Lottie Motion** — Read `references/icon-and-motion.md`.
   - Never default to `lucide-react`. Install and use `@phosphor-icons/react` (or framework equivalent) with deliberate weights (`regular`, `duotone`, `bold`).
   - Add purposeful Lottie micro-interactions (`@lottiefiles/dotlottie-react` or `lottie-react`) for key moments (empty states, confirmations, loading, interactive toggles).
2. **Pre-Balance Your Hex Palette Before Coding** — Read `references/palette-and-typography.md`.
   - Never start coding with Tailwind's default indigo/purple gradients.
   - Define an explicit **Hex Token Table** (primary surface, elevated surface, primary text, muted text, hairline border, primary accent, secondary accent, semantic states) with exact hex codes and usage rules *before* writing components.
3. **Show, Don't Just Describe (Visual Anchor First)**
   - Before coding a new page or major redesign, anchor the layout in either:
     - A user-supplied screenshot (analyze layout density, negative space, and proportions without copying content),
     - A generated reference via `visual-anchor-to-code`, or
     - A real-world `DESIGN.md` from `design-md-systems`.
4. **Apply Taste & Impeccable Craft** — Read `references/taste-and-craft.md` and `references/impeccable-commands.md`.
   - One clear focal point per viewport, equal content edges, zero nested card-in-card-in-card spam, real photography or real product UI, and crisp copy.

## Workflow

1. **Anchor & Palette**: Establish the visual anchor (or `DESIGN.md`) and lock the exact hex palette + font pairing.
2. **Icon & Motion Setup**: Replace any `lucide-react` imports with `@phosphor-icons/react` and wire Lottie for meaningful micro-interactions.
3. **Build with Restraint**: Follow `references/taste-and-craft.md` (spacing, hierarchy, zero fake metrics, zero badge/pill clutter).
4. **Refine & Verify**: Run targeted Impeccable passes (`audit`, `critique`, `distill`, `clarify`, `polish`) and verify in a real browser using `ui-verify-and-audit`.
