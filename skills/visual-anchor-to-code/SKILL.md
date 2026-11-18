---
name: visual-anchor-to-code
description: >-
  "Stop describing, start showing." Visual-first frontend workflow adapted from
  image-to-code. Before coding a landing page, dashboard, or UI, either analyze
  user-provided reference screenshots or generate high-clarity visual anchors
  first, extract their layout density, negative space, hex palette, and type
  hierarchy, then implement the frontend faithfully without AI clichés.
---

# Visual Anchor to Code (Stop Describing, Start Showing)

Never build a visually important UI from vague text prompts like *"make it look like Linear"* or *"modern SaaS dashboard"*. AI handles aesthetics dramatically better when anchored to a concrete visual reference.

## Mandatory Order of Operations

1. **Anchor First** (pick one):
   - **User-Provided Screenshot(s)**: If the user shares screenshots of sites or UI dashboards they admire, inspect them carefully via `read_file` (or ask the user to drop 1–3 screenshots).
   - **Generate Visual Reference(s)**: If no screenshot was provided and `generate_image` is available, generate clean, readable, section-specific visual references (hero, key section, or dashboard view) *before* writing HTML/JSX. Do not cram an entire multi-section site into one tiny compressed image.
2. **Deep Visual Extraction** (before coding):
   Analyze and write down:
   - **Layout Density & Negative Space**: Approximate whitespace ratio, grid columns, max container width, vertical section rhythm.
   - **Hex Color Extraction**: Extract exact hex codes for canvas, surface, primary ink, muted ink, border, and accent (no blue-purple gradient soup).
   - **Typography & Scale**: Display vs. body font character, weight contrast, heading-to-body ratio, tight vs. airy tracking.
   - **Component Restraint**: Notice what is *absent* (no nested cards-in-cards, no floating badge clutter).
3. **Faithful Implementation**:
   - Implement the frontend to match the extracted density, negative space, hex palette, and hierarchy—*without* copying the reference's brand names, logos, or copyrighted copy.
   - Use **Phosphor Icons** (`@phosphor-icons/react`) and **Lottie** micro-interactions instead of `lucide-react`.
   - Keep the hero clean, readable, and comfortably framed on a standard laptop viewport (`1440x900` / `1280x800`).
4. **Verify**:
   - Inspect the rendered result in a real browser (`ui-verify-and-audit`) and compare it side-by-side against the visual anchor.
