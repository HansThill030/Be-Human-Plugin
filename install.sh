#!/usr/bin/env bash
set -euo pipefail

# Be Human — Universal Installer (macOS / Linux)
# Usage: ./install.sh [--project]

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SKILLS_SRC="$SCRIPT_DIR/skills"

if [[ "${1:-}" == "--project" ]]; then
  TARGETS=("./.claude/skills" "./.agents/skills")
else
  TARGETS=("$HOME/.claude/skills" "$HOME/.codex/skills" "$HOME/.agents/skills")

  AGY_DEST="$HOME/.gemini/config/plugins/be-human"
  rm -rf "$AGY_DEST"
  mkdir -p "$(dirname "$AGY_DEST")"
  cp -R "$SCRIPT_DIR" "$AGY_DEST"
  echo "Installed Antigravity plugin -> $AGY_DEST"
fi

for target in "${TARGETS[@]}"; do
  mkdir -p "$target"
  for skill in "$SKILLS_SRC"/*/; do
    name="$(basename "$skill")"
    rm -rf "$target/$name"
    cp -R "$skill" "$target/$name"
  done
  echo "Installed skills -> $target"
done

echo ""
echo "Done! For ChatGPT / Claude.ai web projects, paste chatgpt-and-claude/SYSTEM_PROMPT.md into your Project Instructions."
