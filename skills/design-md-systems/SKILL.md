---
name: design-md-systems
description: >-
  Ground any app or website in a real-world DESIGN.md design system (84 curated
  systems from awesome-design-md: Linear, Stripe, Raycast, Apple, Notion, Figma,
  Vercel, Resend, Airbnb, Claude, and more) or author a project-specific
  DESIGN.md with pre-balanced hex tokens before writing UI code.
---

# DESIGN.md Systems

Instead of letting AI invent generic Tailwind styling on the fly, pick or author a `DESIGN.md` **before** writing components.

## Bundled Catalog (84 Real-World Systems)

All 84 extracted `DESIGN.md` files live in `catalog/<brand>/DESIGN.md` inside this skill folder. Examples by aesthetic:

- **Precision / Dev Tools**: `linear.app`, `raycast`, `vercel`, `cursor`, `resend`, `supabase`, `posthog`, `mintlify`, `clickhouse`, `sentry`, `hashicorp`
- **Clean Consumer / Editorial**: `apple`, `airbnb`, `notion`, `figma`, `framer`, `cal`, `oura`, `wired`, `spotify`
- **Fintech / Enterprise**: `stripe`, `mercury`, `wise`, `revolut`, `ramp`, `coinbase`, `airtable`, `intercom`
- **AI / Creative**: `claude`, `elevenlabs`, `runwayml`, `replicate`, `mistral.ai`, `cohere`, `x.ai`, `lovable`

To list all 84 brands in `catalog/`:
```powershell
Get-ChildItem -Directory "<skill-dir>\catalog" | Select-Object -ExpandProperty Name
```

## Workflow

1. **Select or Inspect**: Match the user's product domain to 1–2 systems in `catalog/<brand>/DESIGN.md` and read the relevant `DESIGN.md` sections (Color Palette, Typography, Elevation/Borders, Layout Principles).
2. **Adapt, Don't Clone Blindly**:
   - Extract the structural discipline, spacing rhythm, and surface contrast.
   - If the user wants their own brand identity, adjust the primary/secondary accent hex codes upfront (e.g. from Coolors) while keeping the neutral surface/ink contrast ratios intact.
   - Enforce **Be Human** defaults: use **Phosphor Icons** (`@phosphor-icons/react`) and **Lottie** micro-interactions instead of `lucide-react`.
3. **Write `DESIGN.md` in the Project Root**: Save the finalized design system (exact hex palette table, font stack, spacing, border/radius rules, and icon/motion rules) to `DESIGN.md` in the target project so every subsequent UI edit stays consistent.
