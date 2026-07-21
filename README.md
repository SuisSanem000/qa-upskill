# QA Upskill — 30-Day Portfolio

> A complete, practical QA portfolio built by transitioning from Developer → QA Analyst.
> **Duration:** 30 days | 1 hour/day | Started: 2026-07-20

---

## 🎯 Goal

Build real QA skills and a deployable portfolio covering:
- Manual QA & Testing Methodologies
- API & Backend Testing (Postman, REST, GraphQL, SQL)
- Performance Testing (Lighthouse, k6)
- Test Automation (Playwright, Cypress, BDD/Cucumber)
- CI/CD (GitHub Actions, Docker)

---

## 🗺️ Structure

```
qa-upskill/
├── phase1/           ← Manual QA (Days 1–10)
├── phase2/           ← API & Performance (Days 11–20)
├── phase3/           ← Automation & CI/CD (Days 21–30)
│   ├── tests/        ← Playwright test specs
│   ├── features/     ← BDD Gherkin feature files
│   ├── step-definitions/ ← Cucumber step definitions
│   ├── cypress/      ← Cypress tests
│   ├── playwright.config.ts
│   ├── Dockerfile
│   └── docker-compose.yml
├── .github/
│   └── workflows/
│       └── playwright.yml  ← CI pipeline
└── documentation/
    └── AI/
        ├── prompt.md
        ├── roadmap.md
        └── project_state.md
```

---

## 🚀 Run the Automation Tests

```bash
# Install dependencies
cd phase3
npm install

# Install Playwright browsers
npx playwright install

# Run all tests
npx playwright test

# Run a specific test file
npx playwright test tests/day21-login.spec.ts

# Open interactive UI mode
npx playwright test --ui

# View HTML report
npx playwright show-report
```

---

## 📋 Phases at a Glance

| Phase | Days | Key Skills | Key Tools |
|-------|------|-----------|-----------|
| **Phase 1** | 1–10 | Manual QA, Test Cases, Agile, BDD, Bug Reports | Browser DevTools |
| **Phase 2** | 11–20 | API Testing, SQL, Lighthouse, Performance | Postman, k6, Swagger |
| **Phase 3** | 21–30 | Automation, CI/CD, Docker | Playwright, Cypress, GitHub Actions |

---

## 🎯 Target Applications

| App | URL | Used For |
|-----|-----|---------|
| The Internet (Herokuapp) | https://the-internet.herokuapp.com | Phase 1 UI + Phase 3 Automation |
| Restful-Booker API | https://restful-booker.herokuapp.com | Phase 2 REST CRUD + Phase 3 API tests |
| JSONPlaceholder | https://jsonplaceholder.typicode.com | Phase 2 quick API practice |
| SpaceX GraphQL | https://spacex-production.up.railway.app/ | Day 14 GraphQL |

---

## 📊 Progress

See [documentation/AI/project_state.md](documentation/AI/project_state.md) for daily tracking.

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| Test Automation | Playwright, Cypress, Cucumber.js |
| API Testing | Postman, Playwright API, k6 |
| Performance | k6, Lighthouse/PageSpeed |
| CI/CD | GitHub Actions |
| Containerisation | Docker |
| Languages | JavaScript, SQL, Gherkin |
