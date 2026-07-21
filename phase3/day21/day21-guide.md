# Day 21 — Playwright Setup & Project Scaffolding

> **Phase:** 3 — Intro to Automation & CI/CD
> **Duration:** 1 hour
> **Deliverables:** Working Playwright project with first passing test

---

## 🎯 Learning Objectives

- Understand what Playwright is and why it's popular
- Set up a Playwright project from scratch
- Understand the Playwright project structure
- Write and run your very first automated test

---

## 📖 Concepts (10 min)

### What is Playwright?

Playwright is a modern end-to-end testing framework by Microsoft. It:
- Supports Chromium, Firefox, and WebKit (Safari) in a single script
- Runs tests **headless** (no browser window) by default, great for CI
- Has built-in **auto-waiting** (no manual `sleep()` needed)
- Supports API testing, network interception, and mobile emulation
- Has **Codegen** — records your browser actions and generates test code

### Playwright vs. Selenium vs. Cypress

| Feature | Playwright | Selenium | Cypress |
|---------|-----------|---------|---------|
| Browsers | Chrome, FF, Safari | Chrome, FF, Safari, IE | Chrome, FF, Edge only |
| Language | JS/TS, Python, Java, C# | Most languages | JS/TS only |
| Speed | Fast (parallel, headless) | Slower | Moderate |
| Auto-wait | Built-in | No | Yes (some) |
| API testing | Yes (built-in) | No | Yes (limited) |
| Network mock | Yes (built-in) | No | Yes |
| CI support | Excellent | Good | Good |
| Origin limitations | None | None | Same-origin only |

---

## 🛠️ Setup Task (50 min)

### Step 1 — Initialize Playwright (run in project root)

```bash
# Navigate to the phase3 folder
cd "d:\projects\personal projects\qa-upskill\phase3"

# Initialize a new Node.js project
npm init -y

# Install Playwright
npm init playwright@latest
```

When prompted:
- TypeScript or JavaScript? → **JavaScript**
- Put tests in? → `tests`
- Add GitHub Actions? → **Yes**
- Install browsers? → **Yes**

### Step 2 — Verify Installation

```bash
# Check it works — runs the example test
npx playwright test

# Open the HTML report
npx playwright show-report
```

### Step 3 — Explore Project Structure

```
phase3/
├── tests/
│   └── example.spec.ts   ← Example test (generated)
├── playwright.config.ts  ← Configuration
├── package.json
└── .github/
    └── workflows/
        └── playwright.yml
```

### Step 4 — Update playwright.config.ts

Open `playwright.config.ts` and update:
```javascript
// Set baseURL to our test site
baseURL: 'https://the-internet.herokuapp.com',
```

### Step 5 — Write Your First Real Test

Open `tests/example.spec.ts` (or create `tests/day21-first-test.spec.ts`) and fill in the TODO markers.

---

## 🎤 Interview Prep (5 min)

### Q1: What is Playwright and what are its key advantages?
**A:** Playwright is Microsoft's end-to-end testing framework supporting Chromium, Firefox, and WebKit. Key advantages: cross-browser from a single API, built-in auto-waiting (no explicit sleeps), first-class API testing support, network interception, mobile emulation, parallel execution, and excellent CI/CD integration. It's faster and more capable than Selenium for modern web apps.

### Q2: What is auto-waiting in Playwright?
**A:** Auto-waiting means Playwright automatically waits for elements to be in the right state before performing actions. Before clicking, it waits for the element to be visible, stable (not animating), and enabled. Before assertions, it retries until the condition is met (with a configurable timeout). This eliminates most timing issues that plague Selenium tests.

### Q3: What is the difference between page.click() and page.locator().click()?
**A:** `page.click(selector)` is the older API — a shorthand. `page.locator(selector).click()` uses the Locator API, which is the modern recommended approach. Locators are reusable, can be composed, and work better with auto-retry assertions. The Locator API also provides better error messages and works with `expect()` assertions.

### Q4: What is the Playwright Codegen tool?
**A:** Codegen is Playwright's browser recording tool. Run `npx playwright codegen https://example.com` and it opens a browser where you interact manually — every action is recorded and JavaScript/TypeScript test code is generated in real time. It's a great starting point for new tests, though the generated code usually needs cleanup for maintainability.

### Q5: What browsers does Playwright support?
**A:** Playwright supports Chromium (Chrome and Edge), Firefox, and WebKit (Safari/iOS Safari). All three are bundled when you install Playwright — no separate driver installation like Selenium. You can run tests against all three browsers in parallel, or configure projects to target specific browsers.

---

## 📁 Files in This Folder

```
phase3/day21/
├── day21-guide.md       ← This file
└── setup-notes.md       ← Your notes from the setup process

Note: The actual Playwright code lives at phase3/
(playwright.config.ts, tests/, package.json)
```
