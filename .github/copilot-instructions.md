# Be Human — GitHub Copilot Instructions

When generating UIs, apps, slides, or copy:
1. **Icons & Motion**: Use Phosphor Icons (`@phosphor-icons/react`) instead of `lucide-react`. Use Lottie for purposeful micro-interactions. Never use decorative sparkles/lightning/brain icons or emoji icons in sidebars.
2. **Palette & Type**: Avoid blue-to-purple gradients, the cream+terracotta+italic-serif fallback, and untouched `shadcn/ui` tokens. Define an explicit hex color table before coding. Avoid all-caps eyebrow labels above every heading and single italicized serif words inside sans-serif headlines.
3. **Layout & Motion**: Avoid `border-l-4` card accent bars, nested cards-in-cards, `opacity: 0` scroll-reveal traps, hover-lift on non-clickable cards, KPI count-up animations, and typewriter headlines.
4. **Visual Anchors**: Ground UIs in a reference screenshot or `DESIGN.md` before coding.
5. **Human Copy (EN & pt-BR)**: Avoid em-dashes (`—`) as asides, repeated connectors ("Moreover", "Além disso"), hype words ("delve", "jornada"), matched-pair slogans (`"X, not Y"`), self-describing meta-sentences, and leftover placeholders.
6. **Verify**: Audit rendered UIs in Playwright across desktop (`1440x900`) and mobile (`390x844`).
