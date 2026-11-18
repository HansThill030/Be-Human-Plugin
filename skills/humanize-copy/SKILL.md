---
name: humanize-copy
description: >-
  Remove signs of AI-generated writing ("cara de IA") from English and
  Brazilian Portuguese (pt-BR) prose, articles, posts, emails, docs, slides,
  and UI microcopy. Auto-detects language and applies curated EN (33 patterns)
  and pt-BR (22 patterns) catalogs plus 2026 anti-slop slogan/meta-prose and
  UI copy clarity rules.
---

# Humanize Copy (EN + pt-BR)

Remove the "AI face" from any text—marketing copy, blog posts, emails, documentation, slide decks, or UI microcopy—so it reads like natural, specific human writing.

## Catalogs (Load Before Rewriting)

Read the matching catalog(s) in `references/` before rewriting:
- **English**: `references/patterns-en.md` (33 patterns from Wikipedia's *Signs of AI writing*, with false-positive guidance)
- **Portuguese (pt-BR)**: `references/patterns-pt-br.md` (22 pt-BR patterns `PT-1` to `PT-22`, with false-positive guidance)
- **Mixed EN/pt-BR**: Load both catalogs and apply each to its respective passages without flattening the author's language mix.

## Hard Rules (Classic + 2026 Tells)

1. **No em/en dashes (`—`, `–`) as pauses or asides** (`EN §14`, `PT-1`). Replace with commas, parentheses, or periods. (Exception: dialogue dashes in Portuguese fiction.)
2. **No repeated sentence-opening connectors** (`Moreover`, `Additionally`, `Furthermore`, `Além disso`, `Portanto`, `Nesse sentido`).
3. **No AI hype vocabulary** (`delve`, `tapestry`, `testament`, `embark`, `landscape`, `vibrant`, `jornada`, `essência`, `paradigma`, `revolucionário`, `alavancar`).
4. **No matched-pair slogan headings or negative parallelisms**: Eliminate `"X, not Y"`, `"X. No Y."`, `"Three steps. No [jargon]."`, `"It's not just X — it's Y"`, `"Não é apenas X, é Y"`. State what it actually is directly.
5. **No self-describing meta-sentences**: Cut smooth, empty prose that merely describes *what the page/section does* without concrete facts, names, dates, or numbers (e.g., *"This unified workflow is built for modern teams"*).
6. **No leaked placeholders or edit notes**: Catch bracketed gaps (`[Pending...]`), dummy numbers (`123 456`), duplicate table rows, and FAQ questions that read like prompt-revision notes.
7. **No chatbot framing or generic wrap-ups** (`Certainly!`, `In conclusion, the future looks bright`, `Em suma, o futuro é promissor`).
8. **Never fabricate facts, anecdotes, or round KPI numbers** to sound "personal" or "data-driven."

## UI Microcopy & Slide Rules

- **Buttons & Actions**: Use specific `verb + object` labels (`Save invoice`, `Delete project`)—never generic `Submit`, `OK`, `Yes/No`, or hollow greetings (`"Welcome back!"`, `"Manage your account here"`).
- **Errors**: State (1) what failed, (2) why (when known), and (3) how to recover. Never blame the user or expose raw stack traces as the primary message.
- **Empty States**: Distinguish first use vs. no search results vs. permission/error, and offer one clear next action.
- **Slides & Decks**: Replace 6-tile KPI dashboards with one insight-led claim backed by one real, editable chart.

## Delivery Format

1. **Final text** (ready to copy).
2. **Patterns found → what changed**: Short bullet list referencing `EN §n`, `PT-n`, or `2026-tell`.
3. **Points to check** (only if any facts/sources/placeholders need user input).
