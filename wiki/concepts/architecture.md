---
type: concept
title: "Claude-Trainer-Assets Architecture"
updated: 2026-05-01
sources:
  - "[[README]]"
  - "lab-01-foundations/README.md, lab-01-foundations/package.json, lab-01-foundations/src/api/server.js"
  - "lab-02-workflows/README.md, lab-03-configuration/README.md, lab-04-advanced/README.md"
---

# Claude-Trainer-Assets Architecture

Multi-lab training repository for the [Claude Code Mastery](https://github.com/Claude-Trainer/Claude-Trainer) program. Not a single deployable application — instead, a **monorepo of four self-contained sample codebases** (`lab-01` … `lab-04`), each used for one training module. Students clone the whole repo, then `cd` into the lab they're working on.

## What it actually is

- **Format:** static asset / sample-code repo. No top-level `package.json`, no top-level build manifest, no shared dependencies.
- **Audience:** students taking the Claude Code Mastery course, plus instructors.
- **Distribution:** consumed by `git clone`. Each lab folder is set up to be `cd`'d into and run independently (`npm install && npm run dev`).
- **Last commit:** `3fbfbee feat: add all lab repositories for Claude Code Mastery` (2026-03-24, single commit on `main`).

## Top-level layout

```
Claude-Trainer-Assets/
├── README.md                — index of all four labs + quick start
├── .gitignore               — claude-obsidian vault local state only
├── lab-01-foundations/      — Module 1: first Claude Code session
├── lab-02-workflows/        — Module 2: bug hunt + feature dev
├── lab-03-configuration/    — Module 3: build CLAUDE.md, commands, skills, hooks
├── lab-04-advanced/         — Module 4: multi-agent, MCP, CI/CD, Agent SDK
├── .obsidian/               — Obsidian vault config (this wiki)
├── .raw/                    — claude-obsidian source-drop folder (empty)
├── _templates/              — Obsidian templates (empty)
└── wiki/                    — this knowledge base
```

## Lab inventory

| Lab | Module | Difficulty | Time | Has source? | Stack |
|---|---|---|---|---|---|
| `lab-01-foundations/` | 1 | Beginner | 30 min | **Yes** — `package.json` + `src/` | Express 4 + React (Vite), Jest, in-memory models |
| `lab-02-workflows/` | 2 | Beginner–Intermediate | 55 min | **No** — README only (sources missing or referenced via external repo) | Same as Lab 1, plus 5 seeded bugs (per spoiler section in README) |
| `lab-03-configuration/` | 3 | Intermediate | 55 min | **No** — README only | Express + React with roles/teams/notifications (per README) |
| `lab-04-advanced/` | 4 | Advanced | 60 min | **No** — README only | Full-stack with 12+ source files (per README) |

> **Unknown:** Labs 2–4 have only READMEs in this repo. The READMEs reference clone URLs like `https://github.com/[your-org]/claude-code-lab-02-workflows.git`, suggesting the actual source for those labs lives in separate repos (or hasn't been published yet). Lab 1 is the only lab with code committed here.

## Lab 1 — actual stack (only one with code)

| Layer | Technology |
|---|---|
| API | Express 4 (`src/api/server.js`) |
| Routes | `src/api/routes/auth.js`, `src/api/routes/tasks.js` |
| Auth | JWT middleware (`src/api/middleware/auth.js`) |
| Models | In-memory stores — `User.js`, `Task.js` |
| Frontend | React via Vite (port 3001) — `src/client/` (referenced in README; not present in committed source) |
| Tests | Jest + supertest (`src/__tests__/`) |
| Dev runner | `concurrently` running `nodemon` (API) + Vite (client) |
| Lint | ESLint 8 |

API endpoints (from README):
- `POST /api/auth/signup`, `POST /api/auth/login`
- `GET|POST|PUT|DELETE /api/tasks` and `/api/tasks/:id`
- `GET /api/health`

> **Unknown:** README lists `src/client/` files (`SignupForm.jsx`, `LoginForm.jsx`, `TaskList.jsx`, `App.jsx`, `index.html`) but only `src/api/` and `src/__tests__/` exist on disk. The frontend files appear to be missing from the committed source.

## Build / distribution

- No central build system. Each lab is independent.
- Lab 1 ships with `npm run dev` (concurrent API + client) and `npm test` (Jest).
- Labs 2–4 are exercises — students build/configure their own tooling as part of the lesson (especially Lab 3, which is *about* configuring `.claude/`).
- Repo is plain `git`, no CI, no GitHub Actions in this repo (Lab 4 *teaches* setting up Actions, but the workflow doesn't exist here).

## How it's consumed

1. **By students:** `git clone … && cd Claude-Trainer-Assets/lab-XX && npm install && npm run dev`. Each lab README is the lesson plan.
2. **By instructors:** Lab 2 README contains a "Bug Locations" spoiler section listing exact line numbers for the 5 seeded bugs — meant for instructor eyes only.
3. **By the claude-obsidian vault:** this directory doubles as an Obsidian vault. The `wiki/` (this folder) is Claude's knowledge base about the assets; `.obsidian/` is the editor config.

## Conventions worth remembering

1. **Each lab is self-contained.** No shared `node_modules`, no shared config. Treat them as four separate projects that happen to live in one repo.
2. **READMEs are the lesson.** They're the source of truth for what the student is supposed to do — far more detailed than typical READMEs.
3. **Lab 1 source is illustrative, not production.** In-memory `User`/`Task` stores, no real persistence. Don't generalize patterns from this code to a production app.
4. **Lab 2's bugs are intentional.** Don't "fix" them outside the context of teaching the bug-hunt workflow.
5. **Wiki vs. repo.** The `wiki/` folder is added by claude-obsidian and is local context for Claude — not part of the training material itself.

## Where to look for what

| Looking for… | Path |
|---|---|
| Which lab does what | `[[README]]` (top-level) |
| Lab 1 source code | `lab-01-foundations/src/api/` (frontend missing) |
| Bug locations for Lab 2 | `lab-02-workflows/README.md` (instructor-only spoiler section) |
| Configuration exercise spec | `lab-03-configuration/README.md` |
| Advanced workflow exercises | `lab-04-advanced/README.md` |
| Wiki status snapshot | `[[status]]` |
| Wiki executive summary | `[[overview]]` |

## Open questions / unknowns

- Where do the source trees for labs 2, 3, 4 live? (READMEs reference external repos that may or may not exist publicly.)
- Why is `lab-01-foundations/src/client/` missing on disk despite being documented in the README?
- Is the single `3fbfbee` commit the entire history, or has the repo been squashed?

## Related

- [[overview]]
- [[status]]
- [[index]]
