# QA Upskill — 30-Day Roadmap

> A structured program for a developer transitioning into QA.  
> **Time commitment:** 1 hour/day | **Start date:** 2026-07-20

---

## Phase 1 — Manual QA, Methodologies & Interview Prep (Days 1–10)

| Day | Topic | Key Deliverable |
|-----|-------|----------------|
| **Day 1** | QA Foundations & Test Case Writing | Write 10 test cases for a login form |
| **Day 2** | Test Design Techniques (EP, BVA, Decision Tables) | Apply EP & BVA to registration form |
| **Day 3** | Agile QA & Scrum Ceremonies | Map QA activities to Scrum events |
| **Day 4** | Bug Lifecycle & Bug Report Writing | File 3 formal bug reports |
| **Day 5** | Smoke, Sanity & Regression Testing | Build a smoke test checklist |
| **Day 6** | Exploratory Testing & Session-Based Testing | Run a timed exploratory session |
| **Day 7** | BDD & Gherkin Syntax | Write 5 feature files in Gherkin |
| **Day 8** | Web UI QA — Cross-Browser & Responsive | Manual cross-browser test matrix |
| **Day 9** | Mobile QA Concepts | Device/OS fragmentation matrix |
| **Day 10** | Phase 1 Review + Mock Interview Prep | Answer 20 interview Q&A |

---

## Phase 2 — API, Backend & Performance (Days 11–20)

| Day | Topic | Key Deliverable |
|-----|-------|----------------|
| **Day 11** | API Testing Fundamentals + Postman Setup | Configure Postman, first GET call |
| **Day 12** | REST API Validation (Status Codes, Schemas) | Schema + status assertions in Postman |
| **Day 13** | REST CRUD Testing (POST/PUT/DELETE) | Full CRUD collection in Postman |
| **Day 14** | GraphQL Testing Basics | Write GraphQL queries in Postman |
| **Day 15** | API Contract Testing (Pact Concepts) | Document a consumer contract |
| **Day 16** | SQL & Database State Verification | Write SQL queries to verify API side effects |
| **Day 17** | Charles Proxy / Swagger / API Interception | Intercept and modify API traffic |
| **Day 18** | Lighthouse & Core Web Vitals | Run Lighthouse audit, document findings |
| **Day 19** | Performance Testing with k6 | Write and run a basic k6 load test |
| **Day 20** | Phase 2 Review + API Interview Prep | Answer 20 API-focused interview Q&A |

---

## Phase 3 — Intro to Automation & CI/CD (Days 21–30)

| Day | Topic | Key Deliverable |
|-----|-------|----------------|
| **Day 21** | Playwright Setup + Project Scaffolding | `npm init playwright` + first test |
| **Day 22** | Playwright — Navigation & Assertions | Automate Day 1 manual tests |
| **Day 23** | Playwright — Form Interactions & File Upload | Form fill + screenshot on failure |
| **Day 24** | Playwright — API Testing via Code | API assertions in Playwright |
| **Day 25** | BDD with Cucumber + Playwright | Automate a Gherkin feature file |
| **Day 26** | Cypress Overview & Comparison | Run same tests in Cypress |
| **Day 27** | GitHub Actions — Basic CI Pipeline | `.yml` CI workflow for Playwright |
| **Day 28** | Docker for QA | Containerise the Playwright suite |
| **Day 29** | Flaky Test Management + AI/LLM Testing | Retry logic + prompt drift analysis |
| **Day 30** | Portfolio Review & Final Mock Interview | Push all work + write README |

---

## Target Applications

### Primary — The Internet (Herokuapp)
- **URL:** https://the-internet.herokuapp.com
- **Why:** Purposely built for practice. Has login forms, file upload, dropdowns, dynamic content, alerts, frames, and more.

### API Target — Restful-Booker
- **URL:** https://restful-booker.herokuapp.com
- **Swagger Docs:** https://restful-booker.herokuapp.com/apidoc/index.html
- **Why:** Full CRUD REST API with authentication. Perfect for Postman, Playwright API testing, and contract testing.

### Secondary — JSONPlaceholder
- **URL:** https://jsonplaceholder.typicode.com
- **Why:** Zero setup. Fake REST API for quick concept validation.

### GraphQL — SpaceX GraphQL API
- **URL:** https://spacex-production.up.railway.app/
- **Why:** Free public GraphQL endpoint with rich query capability.

---

## Portfolio Structure (GitHub Repo)
```
qa-upskill/
├── README.md                    ← Portfolio intro
├── documentation/
│   └── AI/
│       ├── prompt.md
│       ├── project_state.md
│       └── roadmap.md           ← This file
├── phase1/                      ← Manual QA artifacts
│   ├── day01/
│   ├── day02/
│   └── ...
├── phase2/                      ← API & performance artifacts
│   ├── day11/
│   └── ...
├── phase3/                      ← Automation code
│   ├── day21/
│   ├── playwright.config.js
│   ├── tests/
│   └── .github/workflows/
└── package.json
```
