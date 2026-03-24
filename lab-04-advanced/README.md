# Lab 4: Advanced Workflows

**Module:** 4 — Advanced Techniques
**Time:** 60 minutes
**Difficulty:** Advanced

## What You'll Do

Use multi-agent plan mode, install and use an MCP server, set up CI/CD automation, and write an Agent SDK script.

## Setup

```bash
git clone https://github.com/[your-org]/claude-code-lab-04-advanced.git
cd claude-code-lab-04-advanced
npm install
```

This project is a full-stack application with 12+ source files across API, frontend, and shared libraries — complex enough to benefit from multi-agent workflows.

## Part A: Multi-Agent Refactoring (15 min)

Ask Claude to perform a complex, multi-file refactoring using plan mode:

```
/plan

I need to refactor the error handling across the entire API layer.
Currently, each controller has its own try/catch with inconsistent
error formats. I want:

1. A centralized error handler middleware
2. Custom error classes (NotFoundError, ValidationError, AuthError)
3. All 5 controllers updated to use the new error classes
4. Consistent error response format: { error: { code, message } }
5. Tests updated to verify error responses

There are 5 controllers in src/api/controllers/. Plan this carefully.
```

**What to observe:**
- Claude entering plan mode and spawning Explore subagents
- The structured plan with file-by-file breakdown
- How you can modify the plan before execution

**Your task:**
1. Review the plan Claude presents
2. Suggest at least one modification (e.g., "Also add a request ID to error responses")
3. Approve and let Claude execute
4. Verify all tests pass

## Part B: MCP Integration (15 min)

### Option A: GitHub MCP (if you have a GitHub account)

```bash
# Install the GitHub MCP server
claude mcp add github -s user \
  -e GITHUB_PERSONAL_ACCESS_TOKEN=ghp_YOUR_TOKEN \
  -- npx -y @modelcontextprotocol/server-github
```

Then in Claude Code:
```
List the open issues in [your-repo-name].
Pick the most recent bug report and investigate it.
If you can identify the fix, implement it.
```

### Option B: Filesystem MCP (no external account needed)

```bash
claude mcp add filesystem -- npx -y @modelcontextprotocol/server-filesystem
```

Then:
```
Using the filesystem MCP server, scan the project for all TODO
comments across all source files. Create a prioritized list and
fix the top 3 most important ones.
```

**Your task:**
1. Install one MCP server
2. Use it through Claude Code for a real task
3. Verify the MCP server appears in `claude mcp list`

## Part C: CI/CD Setup (15 min)

Create a GitHub Actions workflow for automated code review:

```bash
mkdir -p .github/workflows
```

Ask Claude:
```
Create a GitHub Actions workflow at .github/workflows/claude-review.yml
that runs on every pull request. It should:

1. Check out the code
2. Install Claude Code
3. Run a code review focused on:
   - Security vulnerabilities
   - Missing test coverage
   - Performance concerns
4. Post the review as a PR comment

Use the ANTHROPIC_API_KEY secret for authentication.
Include error handling if the review fails.
```

**Your task:**
1. Create the workflow file
2. Review it for correctness
3. If you have a GitHub repo, push and test with a real PR
4. If not, verify the YAML is valid: `! npx yaml-lint .github/workflows/claude-review.yml`

## Part D: Agent SDK Script (15 min)

Write a Node.js script that uses Claude Code programmatically:

```
Create a script at scripts/nightly-analysis.js that uses the
@anthropic-ai/claude-code SDK to:

1. Analyze the codebase for code quality issues:
   - Dead code (unused functions, imports, variables)
   - Duplicated logic
   - Functions over 50 lines
   - Missing error handling
2. Output a Markdown report to reports/quality-report.md
3. Include severity ratings (high/medium/low) for each finding
4. Add a summary section with total counts

The script should be runnable with: node scripts/nightly-analysis.js
```

**Your task:**
1. Have Claude write the script
2. Review the code
3. Run it and verify it produces a report
4. Commit the script and a sample report

## Completion Checklist

- [ ] Multi-agent refactoring completed using plan mode
- [ ] Plan reviewed and modified before execution
- [ ] MCP server installed and used for a real task
- [ ] CI/CD workflow created (valid YAML)
- [ ] Agent SDK script written and producing output
- [ ] All changes committed

## Bonus Challenges

If you finish early:

1. **Voice mode:** Run `/voice` and complete a small task using only spoken commands
2. **Worktree:** Run `claude --worktree` and have Claude work on a feature branch while you stay on main
3. **Loop:** Set up `/loop every 2m: Run the linter and report any new violations` — let it run for 10 minutes while you make changes
