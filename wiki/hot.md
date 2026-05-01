---
type: meta
title: "Hot Cache"
updated: 2026-05-01
---

# Recent Context

## Last Updated
2026-05-01 — wiki seeded with architecture concept page.

## Key Recent Facts

- **Project:** Claude-Trainer-Assets — sample codebases for the [Claude Code Mastery](https://github.com/Claude-Trainer/Claude-Trainer) training program.
- **Format:** static-asset / sample-code monorepo. **No top-level build manifest** (no root `package.json`, no `pyproject.toml`). Four self-contained lab folders, each meant to be `cd`'d into independently.
- **Stack (Lab 1, the only lab with code):** Express 4 + React (Vite) + Jest + JWT auth, in-memory `User`/`Task` models. Concurrent dev runner via `concurrently` (API on :3000, client on :3001).
- **Stack (Labs 2–4):** README-only in this repo. READMEs reference external clone URLs like `claude-code-lab-02-workflows.git`, suggesting source lives elsewhere (or isn't published).
- **Last commit on `main`:** `3fbfbee feat: add all lab repositories for Claude Code Mastery` (2026-03-24). Single commit — entire repo history.
- **Notable details:**
  - Lab 2 README has a **"Bug Locations" spoiler section** listing exact line numbers for 5 intentional bugs — instructor-only.
  - Lab 3 is *about* configuring `.claude/` (CLAUDE.md, commands, skills, hooks) — meta/self-referential to Claude Code itself.
  - Lab 4 covers multi-agent plan mode, MCP install, GitHub Actions, and `@anthropic-ai/claude-code` SDK scripts.
  - `lab-01-foundations/src/client/` is documented in the README but **missing on disk** — only `src/api/` and `src/__tests__/` are present.

## Recent Changes

- Vault scaffolded (index, log, status, overview, hot).
- Created [[concepts/architecture]] — full architecture concept page.
- Updated [[index]] to link to architecture page under `## Knowledge`.

## Active Threads

- Discover where Lab 2/3/4 source trees actually live (separate repos? squashed away? not yet written?).
- Investigate the missing `lab-01-foundations/src/client/` directory — README references it but disk doesn't have it.
- Status snapshot ([[status]]) and overview ([[overview]]) still say "Unknown stack" — refresh once we have more context.
