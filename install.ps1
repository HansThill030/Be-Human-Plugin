# Be Human — Universal Installer (Windows PowerShell)
# Installs Be Human skills to Claude Code, Codex, universal .agents/skills, and Antigravity.

param(
  [switch]$ProjectOnly
)

$ErrorActionPreference = "Stop"
$RepoRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$SkillsSrc = Join-Path $RepoRoot "skills"

if ($ProjectOnly) {
  $targets = @(
    ".\.claude\skills",
    ".\.agents\skills"
  )
} else {
  $targets = @(
    "$env:USERPROFILE\.claude\skills",
    "$env:USERPROFILE\.codex\skills",
    "$env:USERPROFILE\.agents\skills"
  )

  # Also install full Antigravity plugin bundle
  $agyDest = "$env:USERPROFILE\.gemini\config\plugins\be-human"
  if (Test-Path $agyDest) { Remove-Item -Recurse -Force $agyDest }
  Copy-Item -Path $RepoRoot -Destination $agyDest -Recurse -Force
  Write-Host "Installed Antigravity plugin -> $agyDest"
}

$skillDirs = Get-ChildItem -Directory $SkillsSrc
foreach ($target in $targets) {
  New-Item -ItemType Directory -Force -Path $target | Out-Null
  foreach ($skill in $skillDirs) {
    $destSkill = Join-Path $target $skill.Name
    if (Test-Path $destSkill) { Remove-Item -Recurse -Force $destSkill }
    Copy-Item -Path $skill.FullName -Destination $destSkill -Recurse -Force
  }
  Write-Host "Installed $($skillDirs.Count) skills -> $target"
}

Write-Host "`nDone! For ChatGPT / Claude.ai web projects, paste chatgpt-and-claude/SYSTEM_PROMPT.md into your Project Instructions."
