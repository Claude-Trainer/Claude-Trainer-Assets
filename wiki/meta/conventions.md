---
type: meta
title: "Claude-Trainer-Assets Wiki Conventions"
updated: 2026-05-01
---

# Wiki Conventions

- Frontmatter is required on every note: `type`, `title`, `updated`.
- Use [[wikilinks]] for internal references.
- `.raw/` holds source documents — never modify them; reference via `sources/` summary pages.
- `log.md` is append-only; new entries go at the top.
- `hot.md` is a cache (~500 words); overwrite completely each refresh.
- `status.md` is overwritten on each update; archived snapshots go in `updates/YYYY-MM-DD.md`.

## Note Types

| type | folder | purpose |
|---|---|---|
| status | wiki/ | current state snapshot |
| update | updates/ | dated status snapshot |
| decision | decisions/ | ADR-style decision record |
| entity | entities/ | person, service, system |
| concept | concepts/ | idea, pattern, framework |
| source | sources/ | summary of a raw source |

