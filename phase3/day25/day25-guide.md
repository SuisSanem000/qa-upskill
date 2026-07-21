# Day 25 — BDD with Cucumber + Playwright

> **Phase:** 3 — Automation
> **Duration:** 1 hour
> **Deliverable:** Running Cucumber BDD suite against `features/login.feature`

---

## 🎯 Learning Objectives

- Set up Cucumber.js with Playwright
- Connect Gherkin feature files to JavaScript step definitions
- Run BDD tests and see Gherkin-style reports
- Understand living documentation from BDD

---

## 📖 Concepts (10 min)

### Cucumber Architecture

```
feature/login.feature  (Gherkin — written by QA/PO)
         ↓
step-definitions/login.steps.ts  (JavaScript — written by Dev/QA)
         ↓
Playwright browser automation
```

The Gherkin file from Day 7 Phase 1 is now being automated here.

---

## 🛠️ Setup & Task (50 min)

### Step 1 — Install Cucumber

```bash
cd "d:\projects\personal projects\qa-upskill\phase3"
npm install --save-dev @cucumber/cucumber @playwright/test
```

### Step 2 — Create cucumber.js config

```javascript
// cucumber.js
module.exports = {
    default: {
        require: ['step-definitions/**/*.js'],
        format: ['html:cucumber-report.html', 'summary'],
    },
};
```

### Step 3 — Add script to package.json

```json
"scripts": {
    "cucumber": "cucumber-js features/**/*.feature"
}
```

### Step 4 — Complete step-definitions/login.steps.ts

All TODO markers are in the file — complete them!

### Step 5 — Run

```bash
npm run cucumber
```

---

## 📁 Files in This Folder

```
phase3/day25/
└── day25-guide.md  ← This file

BDD files:
phase3/features/login.feature
phase3/step-definitions/login.steps.ts
```
