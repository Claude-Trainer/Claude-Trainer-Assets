# Lab 1: Your First Claude Code Session

**Module:** 1 — Foundations
**Time:** 30 minutes
**Difficulty:** Beginner

## What You'll Do

This is a simple task manager with an Express API and a basic frontend. You'll use Claude Code to:

1. Initialize the project with `/init`
2. Explore and understand the codebase
3. Add email validation to the signup form
4. Write tests for the new validation
5. Commit your changes using Claude's git integration

## Setup

```bash
# Clone the repo
git clone https://github.com/[your-org]/claude-code-lab-01-foundations.git
cd claude-code-lab-01-foundations

# Install dependencies
npm install

# Start the development server
npm run dev
```

The API runs on `http://localhost:3000` and the client on `http://localhost:3001`.

## The App

A minimal task manager with user registration:

- `POST /api/auth/signup` — Register a new user (name, email, password)
- `POST /api/auth/login` — Log in
- `GET /api/tasks` — List all tasks for the logged-in user
- `POST /api/tasks` — Create a task
- `PUT /api/tasks/:id` — Update a task
- `DELETE /api/tasks/:id` — Delete a task

## Your Mission

### Part A: Initialize (5 min)
1. Start Claude Code: `claude`
2. Run `/init` to generate CLAUDE.md
3. Review the generated CLAUDE.md — add any corrections with `#`

### Part B: Explore (5 min)
1. Ask Claude: "Give me a high-level overview of this project"
2. Ask Claude: "What's the signup flow? Walk me through the code"

### Part C: Add Email Validation (10 min)
1. Ask Claude: "Add email format validation to the signup endpoint in src/api/routes/auth.js. Return a 422 with an error message if the email is invalid. Also add a visual error state to the signup form in src/client/components/SignupForm.jsx"
2. Review the diffs Claude proposes
3. Approve the changes

### Part D: Write Tests (5 min)
1. Ask Claude: "Write tests for the email validation we just added. Test valid emails, invalid emails, and edge cases like emails with plus signs"
2. Run the tests: `! npm test`

### Part E: Commit (5 min)
1. Ask Claude: "Commit all changes with a descriptive conventional commit message"
2. Review and approve the commit message

## Completion Checklist

- [ ] CLAUDE.md generated and customized
- [ ] Email validation working on the API
- [ ] Visual error state on the signup form
- [ ] Tests passing for validation logic
- [ ] Changes committed with Claude-written message

## File Structure

```
src/
├── api/
│   ├── server.js           # Express app setup
│   ├── routes/
│   │   ├── auth.js          # Signup and login routes ← You'll modify this
│   │   └── tasks.js         # Task CRUD routes
│   ├── middleware/
│   │   └── auth.js          # JWT authentication middleware
│   └── models/
│       ├── User.js          # In-memory user store
│       └── Task.js          # In-memory task store
├── client/
│   ├── index.html
│   ├── App.jsx
│   └── components/
│       ├── SignupForm.jsx    # ← You'll modify this
│       ├── LoginForm.jsx
│       └── TaskList.jsx
└── __tests__/
    ├── auth.test.js          # Existing auth tests
    └── tasks.test.js         # Existing task tests
```
