# Lab 2: Debugging and Feature Development

**Module:** 2 — Core Workflows
**Time:** 55 minutes
**Difficulty:** Beginner–Intermediate

## What You'll Do

This is a task management API with 5 intentional bugs and one missing feature. You'll use Claude Code to find and fix the bugs, then add a search feature.

## Setup

```bash
git clone https://github.com/[your-org]/claude-code-lab-02-workflows.git
cd claude-code-lab-02-workflows
npm install
npm run dev
```

## The Five Bugs

The application has 5 bugs hidden across the codebase. Here's what you'll notice:

1. **The app crashes on startup** — there's an immediate error when you try to run it
2. **Creating a task returns the wrong status code** — should be 201, but isn't
3. **Marking a task as complete doesn't persist** — the update endpoint has a logic error
4. **Deleting a task deletes ALL tasks** — a scoping issue in the delete logic
5. **The task count on the dashboard shows NaN** — a type coercion issue

Don't look at the source code to find them manually — use Claude Code!

## Your Mission

### Part A: Bug Hunt (20 min)
1. Start Claude Code: `claude`
2. Try to run the app: `! npm run dev`
3. When it fails, paste the error into Claude and let it investigate
4. Fix each bug, run tests after each fix, and commit individually

### Part B: Add Search Feature (20 min)
Ask Claude:
```
Add a search endpoint GET /api/tasks/search?q=QUERY that filters tasks
by title (case-insensitive partial match). Also add a search bar component
to the frontend that calls this endpoint with debounced input.
Include tests for the search endpoint.
```

### Part C: Code Review + PR (15 min)
1. Run `/review` to review all changes
2. Address any issues Claude identifies
3. Ask Claude to write a PR description

## Bug Locations (for instructors only)

> **Spoiler warning — don't share with students!**
> 1. `src/api/server.js` line 8 — missing `require` for middleware
> 2. `src/api/routes/tasks.js` line 28 — `res.status(200)` instead of `201`
> 3. `src/api/routes/tasks.js` line 45 — `Object.assign` overwrites `completed` field
> 4. `src/api/models/Task.js` line 22 — `splice(0)` instead of `splice(idx, 1)`
> 5. `src/client/components/Dashboard.jsx` line 12 — `tasks.length` called on undefined

## Completion Checklist

- [ ] All 5 bugs found and fixed
- [ ] Tests passing after each fix
- [ ] Search endpoint working with tests
- [ ] Frontend search bar with debounce
- [ ] `/review` feedback addressed
- [ ] PR description written
