# Day 29 — Flaky Test Management & AI/LLM Testing Intro

> **Phase:** 3 — Automation & CI/CD
> **Duration:** 1 hour
> **Deliverables:** `flaky-test-fixes.md` + `llm-testing-notes.md`

---

## 🎯 Learning Objectives

- Identify root causes of flaky tests
- Apply Playwright-specific strategies to fix flakiness
- Get an introduction to AI/LLM testing concepts
- Understand prompt drift and consistency scoring

---

## 📖 Concepts (20 min)

### What is a Flaky Test?

A flaky test is a test that **passes sometimes and fails other times** without any code changes. It's one of the most damaging problems in test automation because it:
- Erodes trust in the test suite ("is it a real failure or just flaky?")
- Wastes developer time investigating false alarms
- Causes teams to ignore CI failures

### Root Causes of Flaky Tests

| Cause | Example | Fix |
|-------|---------|-----|
| **Timing/Race condition** | Element not yet rendered when `.click()` is called | Use auto-waiting assertions properly |
| **Network dependency** | External API is slow or down | Mock network calls |
| **Test order dependency** | Test assumes data from a previous test | Make tests independent (own setup/teardown) |
| **Shared state** | Tests share a database record and interfere | Use unique test data per test |
| **Dynamic content** | Random IDs, timestamps in assertions | Don't assert on dynamic values |
| **Resource leak** | Browser context not closed properly | Use `afterAll` to close contexts |
| **Environment differences** | CI is slower than local — timeouts hit | Increase timeouts in CI config |
| **Animation timing** | Element moving during `.click()` | Wait for animations to complete |

### Playwright Strategies for Flaky Tests

```javascript
// ❌ Flaky — no wait
await page.click('#button');

// ✅ Better — Playwright auto-waits, but ensure element is actionable
await page.locator('#button').click(); // auto-waits for visible, enabled, stable

// ❌ Flaky — hardcoded wait
await page.waitForTimeout(3000);

// ✅ Better — wait for specific condition
await page.waitForSelector('#result', { state: 'visible' });
await page.waitForLoadState('networkidle');

// ✅ Retry flaky tests in Playwright config
// playwright.config.ts: retries: 2

// ✅ Isolate state with test.beforeEach and API setup
test.beforeEach(async ({ request }) => {
    await request.post('/api/reset-test-data');
});
```

### Playwright Test Retry

```javascript
// playwright.config.ts
module.exports = {
    retries: process.env.CI ? 2 : 0,  // Retry on CI, not locally
};
```

---

### AI/LLM Testing Introduction

Testing AI systems (like ChatGPT, Gemini, Copilot) is a new frontier in QA.

### Why LLM Testing is Different

| Traditional App | LLM/AI App |
|----------------|-----------|
| Deterministic output | Non-deterministic output |
| "Exact match" assertions | Semantic similarity scoring |
| Fixed input → fixed output | Same input → slightly different output |
| Clear pass/fail | Subjective quality evaluation |

### Key LLM Testing Concepts

#### 1. Prompt Drift Analysis
Running the same prompt repeatedly over time to detect if model behavior changes (due to model updates or fine-tuning).

```
Day 1: "Summarise in one sentence" → 25-word response
Day 30: Same prompt → 100-word response 
→ Prompt drift detected!
```

#### 2. Consistency Scoring
Run the same prompt N times and measure how similar the outputs are.

```python
# Pseudocode
responses = [run_prompt(prompt) for _ in range(10)]
consistency_score = calculate_similarity(responses)
# Score 0-1: 0 = completely different, 1 = identical
```

#### 3. Key LLM Test Cases
- **Hallucination detection** — Does the model make up facts?
- **Prompt injection** — Can a user's input override system instructions?
- **Boundary testing** — Max token limits, empty prompts
- **Bias detection** — Does the model treat different groups differently?
- **Safety filters** — Are harmful outputs blocked?
- **Latency** — How slow is inference under load?

---

## 🛠️ Task (40 min)

**Part 1 (20 min):** Review your Playwright tests from Days 21–24. Find 2–3 that could be flaky. Document them and your fix in `flaky-test-fixes.md`.

**Part 2 (20 min):** Design 5 test cases for an imaginary AI chatbot in `llm-testing-notes.md`.

---

## 📁 Files in This Folder

```
phase3/day29/
├── day29-guide.md       ← This file
├── flaky-test-fixes.md  ← Identify and fix flaky tests
└── llm-testing-notes.md ← AI/LLM test case design
```
