# Impeccable Refinement Commands

When reviewing or elevating an existing UI, run one or more of these focused passes (adapted from `impeccable`):

| Pass | Goal | What to Do |
|---|---|---|
| `audit` | Technical quality scan | Check Accessibility (WCAG AA contrast, keyboard nav, ARIA, `prefers-reduced-motion`), Performance (layout thrashing, bundle size, lazy media), Theming (token discipline), and Responsive (`390px`–`1440px`, touch targets, overflow). |
| `critique` | Design & UX critique | Evaluate visual hierarchy, focal point clarity, AI-slop tells (Lucide, purple gradients, card spam), and emotional resonance. |
| `distill` | Strip complexity | Remove redundant containers, decorative pills, secondary chrome, and repeated explanations until only the essential remains. |
| `clarify` | Fix UX microcopy | Rewrite vague labels (`Submit`, `OK`) into specific `verb + object` actions; make errors state what failed, why, and how to recover; align empty states. |
| `polish` | Final pre-ship pass | Triage: (1) broken tasks/a11y, (2) missing loading/empty/error states, (3) grid & optical alignment, (4) motion & hover consistency, (5) dead code/unused `lucide-react` cleanup. |
| `bolder` | Fix bland/safe UI | Increase typographic scale contrast, sharpen focal point, introduce asymmetric layout or deliberate accent contrast. |
| `quieter` | Tone down noisy UI | Reduce visual clutter, soften harsh borders/shadows, increase negative space, restrict accent color to primary actions. |
| `colorize` | Fix flat/gray UI | Apply a pre-balanced hex palette with intentional 60/30/10 surface-to-accent hierarchy. |
| `typeset` | Fix weak type | Upgrade font pairing, tighten display tracking (`-0.02em`), enforce `tabular-nums` on data, set `55ch–72ch` prose measure. |
| `harden` | Production readiness | Test edge cases, long strings, missing data, slow networks, i18n/RTL, and keyboard-only flows. |
