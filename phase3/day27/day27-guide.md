# Day 27 — GitHub Actions: CI Pipeline for Playwright

> **Phase:** 3 — Automation & CI/CD
> **Duration:** 1 hour
> **Deliverable:** Working GitHub Actions workflow that runs Playwright tests on push

---

## 🎯 Learning Objectives

- Understand CI/CD concepts in the context of QA
- Set up a GitHub Actions workflow for Playwright
- Understand workflow triggers, jobs, and steps
- Know how to view test results in GitHub

---

## 📖 Concepts (15 min)

### What is CI/CD?

| Term | Full Name | Purpose |
|------|-----------|---------|
| **CI** | Continuous Integration | Automatically run tests on every push/PR |
| **CD** | Continuous Delivery | Automatically deploy to staging on green CI |
| **CD** | Continuous Deployment | Automatically deploy to production on green CI |

**The QA goal in CI:** Catch bugs before they reach the main branch.

### GitHub Actions Concepts

```yaml
name: Workflow name
on:             # Trigger events
  push:
    branches: [main]
  pull_request:

jobs:           # One or more parallel jobs
  test:         # Job name
    runs-on: ubuntu-latest  # Runner (OS)
    steps:      # Sequential steps within a job
      - uses: actions/checkout@v4    # Pre-built action
      - name: Run tests
        run: npm test                # Shell command
```

### Why QA Owns the CI Pipeline

- Tests must run automatically — no manual "remember to test"
- Test failures block merges to `main`
- QA configures: which tests run, on which events, with what settings
- QA monitors: failure rates, flaky tests, test execution time

---

## 🛠️ Task (40 min)

The workflow file is at `.github/workflows/playwright.yml`.

**Step 1:** Review and complete all TODO markers in the workflow file.

**Step 2:** Make sure your Playwright tests pass locally first:
```bash
cd phase3
npx playwright test
```

**Step 3:** Commit and push to GitHub:
```bash
git add .
git commit -m "feat: add Playwright CI pipeline — Day 27"
git push
```

**Step 4:** Go to your GitHub repo → Actions tab → Watch the workflow run.

**Step 5:** Document your findings in `ci-setup-notes.md`.

---

## 📁 Files in This Folder

```
phase3/day27/
├── day27-guide.md     ← This file
└── ci-setup-notes.md  ← Your notes from setting up CI

CI Workflow:
.github/workflows/playwright.yml
```
