# Production Polish Checklist (Sites, Apps & Platforms)

Vibe-coded projects often look 80% done because they skip the finishing details that real teams ship:

1. **Identity & Metadata**:
   - Real `<title>` and `<meta name="description">` on every route (never `"Create Next App"` or `"Vite + React"`).
   - Custom SVG/PNG **favicon** (`<link rel="icon">`) matching the brand, not the framework logo.
   - **OpenGraph (`og:image`, `og:title`)** so links shared in Slack/X/WhatsApp render cleanly.
2. **Error & Edge Routes**:
   - Custom **`404` (Not Found)** and **`500` (Error Boundary)** pages styled with the project's Palette Contract and a clear way back (`Return to dashboard` / `Reload`).
   - **Loading Skeletons** matching the real layout geometry instead of a centered spinner on a blank screen.
   - **Empty States** distinguishing first-run onboarding vs. zero search results vs. permission/error, each with one clear next action.
3. **Media & Assets**:
   - Every `<img>` has descriptive `alt` text (or `alt=""` if purely decorative) and explicit `width`/`height` or `aspect-ratio` to prevent layout shift (CLS).
   - Zero broken external image URLs (verified via `ui-verify-and-audit`).
