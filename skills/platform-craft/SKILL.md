---
name: platform-craft
description: >-
  Anti-dashboard UX and architecture patterns for vibe-coded web apps and SaaS
  platforms. Replaces repetitive "sidebar + topbar + 4 KPI cards + table"
  screens with task-specific layouts (split-pane triage, command palettes,
  inline editing, optimistic undo toasts, and complete auth/form states).
---

# Platform Craft (Anti-Dashboard App Patterns)

When vibe-coding SaaS platforms and web apps, AI defaults to repeating `sidebar + topbar + 4 KPI cards + data table` on every route. Real software shapes each screen around the user's actual job.

## 1. Choose the Right Screen Archetype
- **Triage / Inbox / Review**: Split-pane list + detail inspector with `j`/`k` keyboard navigation (like Linear or Superhuman).
- **Authoring / Creation**: Focused canvas/editor with collapsible side inspector—no top KPI banner cluttering the workspace.
- **Pipeline / Status Tracking**: Kanban board, timeline, or grouped list with inline status/assignee pickers.
- **Overview (only when monitoring is the job)**: Max 1–2 focal charts + actionable queue, never 6 equal-weight stat tiles.

## 2. High-Craft Interaction Patterns
- **Command Palette (`⌘K` / `Ctrl+K`)**: Provide quick navigation and actions without bloating the sidebar.
- **Inline Editing**: Let users edit titles, tags, or statuses in place instead of opening a modal for every single field.
- **Optimistic UI + Undo Toasts**: For non-catastrophic actions (archive, status change, delete item), update immediately and show a toast with an **Undo** button rather than interrupting with `"Are you sure?"` modals.
- **Real Forms & Auth**: Persistent labels above inputs (never placeholder-only), inline validation on blur/submit, clear password/magic-link feedback, and disabled submit state while pending.

## 3. Complete Edge States
Every route must handle: **First-run empty** (guided next step), **No search/filter results** (reset filters button), **Loading** (layout-matched skeleton), **Permission denied**, and **Network/API error** (what failed + retry).
