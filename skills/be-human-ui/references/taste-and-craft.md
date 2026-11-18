# Taste & Anti-Slop UI Craft (Synthesized from taste-skill, impeccable & 2025–2026 Audits)

## Anti-Slop Laws (Never Ship These)
1. **No Universal AI Landing Sequence**: Break out of `pill badge → centered H1 → 2 CTAs + checkmarks → 3-col icon cards → 1-2-3 steps → stat banner → FAQ → closing CTA` (and its Bento-grid fallback).
2. **No "Just a Series of Dashboards" in SaaS Apps**: Don't repeat `sidebar + topbar + KPI card grid` on every route. Design task-specific screens (focused editors, triage list-detail views, guided setup flows).
3. **No Colored Accent-Bar Cards (`border-l-4`) or Nested Card Spam**: Flatten cards-inside-cards-inside-cards. Use whitespace, typography, and `1px` hairlines instead of wrapping every group in another box.
4. **No Badge / Pill Spam or Fake Metrics**: Strip decorative pills ("AI-Powered", "Next-Gen", "99.9% Uptime") and never invent vanity counters ("10,000+ teams", "+340% ROI").
5. **No Untouched `shadcn/ui` Defaults**: Customize surface tokens, radii, borders, and focus rings so the UI doesn't look like a raw component-kit template.
6. **Fail-Proof Visual Hierarchy (The Squint Test)**: Primary, secondary, and tertiary actions must be visually distinct—never give every card and button equal weight.

## Motion & Interaction Discipline (Kill the 6 AI Motion Tells)
1. **No Scroll-Triggered Fade-Up Traps**: Never hide grids at `opacity: 0` waiting for IntersectionObserver—slow devices or tall viewports get stuck looking at blank space.
2. **No False-Affordance Hover-Lift**: Never add `hover:-translate-y-1` + drop shadow to *non-clickable* cards. Reserve hover lift (`2px`) strictly for interactive links/buttons.
3. **No KPI Count-Up Animations**: Render real numbers immediately instead of making users wait 2 seconds for `0 → 12,480`.
4. **No Typewriter Headlines**: Display headlines immediately—never spell them out letter-by-letter.
5. **No Glowing Blobs Behind Inputs**: Keep search/prompt inputs crisp and grounded.
6. **Complete Edge States**: Always design loading (skeletons), empty (distinguishing first-use vs. no-results), error (what failed + how to recover), and disabled states.

## Layout, Media & Viewport Discipline
- **One Section Per Screen**: On desktop (`1440x900`), the hero fits cleanly in the first viewport without a second section heading peeking in awkwardly.
- **Equal Content Edges & Deliberate Rhythm**: Align left/right margins consistently. Group related items tightly and separate distinct groups generously instead of using one uniform `gap-4`/`gap-6` everywhere.
- **Real Media & Alt Text**: Use real photographs or real product UI (never generic AI "concept renders" for real-world businesses), and ensure every meaningful `<img>` has descriptive `alt` text.
- **Touch & Mobile (`390x844`)**: Zero horizontal overflow, touch targets `>= 44x44px` (WCAG AA min `24x24px` with spacing).
