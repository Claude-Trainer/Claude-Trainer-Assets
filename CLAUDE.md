# Claude-Trainer-Assets

<!-- >>> wiki-knowledge-base >>> -->
## Wiki Knowledge Base

This project has an Obsidian wiki at `wiki/`. The claude-obsidian plugin auto-loads `wiki/hot.md` at session start. When you need broader context:

1. `wiki/index.md` — master catalog
2. `wiki/concepts/architecture.md` — stack, conventions, where-to-look
3. `wiki/status.md` — current state snapshot
4. `wiki/decisions/` — ADR-style decision records
5. `wiki/sources/` — summaries of external sources you've ingested

Update `wiki/log.md` when you change something significant. Refresh `wiki/hot.md` on session stop if context shifted. Drop new sources into `.raw/` then say "ingest <file>" in Claude Code.
<!-- <<< wiki-knowledge-base <<< -->
