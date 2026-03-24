# Lab 3: Build Your Project's Configuration

**Module:** 3 — Configuration & Customization
**Time:** 55 minutes
**Difficulty:** Intermediate

## What You'll Do

Take a provided Express + React project and configure a complete Claude Code environment: CLAUDE.md, custom commands, skills, and hooks.

## Setup

```bash
git clone https://github.com/[your-org]/claude-code-lab-03-configuration.git
cd claude-code-lab-03-configuration
npm install
```

This is a slightly more complex version of the Lab 1 project — a task manager with user roles, team workspaces, and a notification system.

## Part A: Write CLAUDE.md (15 min)

Start Claude Code and run `/init`, then **replace** the generated CLAUDE.md with a comprehensive version. Your CLAUDE.md should include:

1. **Architecture section** — Framework, database, auth strategy, state management
2. **Conventions section** — Naming patterns, file organization, API response format
3. **Testing section** — Framework, patterns, commands, coverage requirements
4. **Build & deploy section** — Dev/build/test commands
5. **Current work section** — What you're currently focused on

**Evaluation criteria:**
- Minimum 50 lines
- Specific enough that Claude produces code matching YOUR patterns (not generic)
- No sensitive data (no API keys, no connection strings)
- Actionable (every line tells Claude something it can use)

**Test it:** Start a new session. Ask Claude to "add a PATCH endpoint for updating user profile." Does it follow your conventions? If not, refine the CLAUDE.md.

## Part B: Custom Slash Commands (15 min)

Create these three commands:

### 1. `/test-all` — Full test suite runner
`.claude/commands/test-all.md`:
- Runs unit tests, integration tests, and lint
- Reports failures with the test name and error
- If all pass, reports total count and time

### 2. `/deploy-staging` — Pre-deploy validation
`.claude/commands/deploy-staging.md`:
- Runs tests (abort if any fail)
- Runs linter (auto-fix what's fixable)
- Builds the project (abort on compile errors)
- Shows summary of what will deploy
- Pushes to staging branch
- Use `allowed-tools` to restrict to safe operations

### 3. `/changelog` — Generate changelog
`.claude/commands/changelog.md`:
- Reads git log since last tag
- Categorizes: Added, Changed, Fixed, Removed
- Writes user-facing descriptions (not raw commit messages)
- Follows Keep a Changelog format
- Use `$ARGUMENTS` for specifying version number

**Test each command** by invoking it in a Claude Code session.

## Part C: Create a Skill (15 min)

Create a skill with supporting files:

### API Design Skill
```
.claude/skills/api-design/
├── SKILL.md           — Conventions and patterns
├── templates/
│   ├── controller.ts.template
│   └── test.ts.template
└── examples/
    └── user-controller.ts
```

The SKILL.md should document:
- Route naming conventions (plural nouns, kebab-case)
- Request/response format
- Error handling pattern
- Validation approach
- Authentication requirements

The templates should be reusable patterns Claude can follow.

**Test it:** Ask Claude to "create a new notifications API" and verify it uses your skill's patterns.

## Part D: Configure Hooks (10 min)

Edit `.claude/settings.json` to add:

1. **PostToolUse hook:** Auto-format with Prettier after any .js/.ts/.jsx/.tsx file write
2. **PostToolUse hook:** Run related Jest tests when source files in `src/` change

Verify both hooks trigger:
- Ask Claude to write a deliberately unformatted file → confirm Prettier fixes it
- Ask Claude to modify a source file → confirm related tests run

## Completion Checklist

- [ ] CLAUDE.md: 50+ lines, covers architecture/conventions/testing/commands
- [ ] `/test-all` created and working
- [ ] `/deploy-staging` created with allowed-tools restrictions
- [ ] `/changelog` created with $ARGUMENTS for version
- [ ] API design skill with SKILL.md + templates + examples
- [ ] Prettier hook configured and verified
- [ ] Test-running hook configured and verified
- [ ] All configurations committed to git

## File Structure After Completion

```
.claude/
├── CLAUDE.md
├── settings.json          # hooks + permissions
├── commands/
│   ├── test-all.md
│   ├── deploy-staging.md
│   └── changelog.md
└── skills/
    └── api-design/
        ├── SKILL.md
        ├── templates/
        │   ├── controller.ts.template
        │   └── test.ts.template
        └── examples/
            └── user-controller.ts
```
