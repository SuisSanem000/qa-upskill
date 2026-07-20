# Day 5 — Smoke, Sanity & Regression Testing

> **Phase:** 1 — Manual QA
> **Duration:** 1 hour
> **Target App:** https://the-internet.herokuapp.com
> **Deliverables:** `smoke-checklist.md` + `regression-suite.md`

---

## 🎯 Learning Objectives

- Clearly distinguish Smoke, Sanity, and Regression testing
- Know when to run each type and why
- Build a reusable smoke test checklist
- Understand regression risk and how to manage it

---

## 📖 Concepts (15 min)

### Smoke Testing

> "Does the build even work?"

Smoke tests are a **quick, shallow** check of the most critical functionality. Run them immediately after every new build to decide: **is this build worth testing further?**

- Covers ~10–20% of features
- Takes 15–30 minutes max
- If smoke tests fail → reject the build, don't test further
- Also called "Build Verification Testing (BVT)"

**Example Smoke Test for a web app:**
- App loads without 500 errors ✓
- Homepage renders ✓
- Login works ✓
- Main navigation links work ✓
- API returns 200 on health check ✓

---

### Sanity Testing

> "Does the specific fix work?"

Sanity tests are **narrow and focused**. Run them after a bug fix or minor change to verify **that specific area** behaves correctly — without running the full regression suite.

| | Smoke | Sanity |
|--|--|--|
| **When** | New build deployed | After a bug fix |
| **Scope** | Wide (whole system) | Narrow (one feature) |
| **Depth** | Shallow | Moderate |
| **Goal** | Is the build stable? | Did the fix work? |
| **Scripted?** | Usually yes | Usually informal |

---

### Regression Testing

> "Did we break anything that used to work?"

Regression testing ensures that **new changes haven't introduced bugs in existing functionality**. It's wide and deep — the full test suite.

**Types of regression:**
- **Full Regression:** Run everything. Done before major releases.
- **Partial Regression:** Run the subset of tests related to changed areas.
- **Unit Regression:** Re-run unit tests after code changes.

**Risk-Based Regression:** Prioritise tests based on:
1. Features most likely to be affected by the change
2. Features most critical to the business
3. Features most frequently used

---

### Test Pyramid

```
            /\
           /E2E\        ← Few (expensive, slow) — Regression
          /------\
         /Integration\  ← Some — Smoke/Sanity
        /------------\
       /   Unit Tests  \ ← Many (cheap, fast) — Developer-owned
      /------------------\
```

---

## 🛠️ Task (40 min)

1. **Part 1 (20 min):** Build a smoke test checklist in `smoke-checklist.md` for https://the-internet.herokuapp.com. Cover the top 10 most critical checks.

2. **Part 2 (20 min):** Build a mini regression suite in `regression-suite.md`. Take your Day 1 login test cases and categorize them: which would go in smoke, sanity, and regression?

---

## 🎤 Interview Prep (5 min)

### Q1: What is the difference between smoke and regression testing?
**A:** Smoke testing is a quick, high-level check of the most critical features to determine if a build is stable enough for further testing — it's wide but shallow. Regression testing is a comprehensive re-execution of the test suite to ensure existing functionality hasn't been broken by new changes — it's both wide and deep.

### Q2: When do you perform smoke testing vs. sanity testing?
**A:** Smoke testing is performed after every new build deployment to verify overall system stability. Sanity testing is performed after a specific bug fix or minor code change to verify that particular fix works correctly, without running the full suite.

### Q3: How do you decide which tests to include in a regression suite?
**A:** Using risk-based prioritization: tests covering the most business-critical features, tests covering areas changed by recent development, tests covering features most frequently used by customers, and tests that have caught bugs in the past. The goal is maximum risk coverage with minimum execution time.

### Q4: What is a regression bug?
**A:** A regression bug is a bug that was previously working correctly but was broken by a code change. "It worked before your change, now it doesn't." Regression testing is specifically designed to catch these.

### Q5: What is test coverage and how is it measured?
**A:** Test coverage measures what percentage of the application (or requirements) is covered by tests. Types include: requirement coverage (% of requirements tested), code coverage (% of code executed by tests), branch coverage (% of code branches tested). 100% coverage doesn't mean bug-free — it means every path was exercised at least once.

---

## 📁 Files in This Folder

```
phase1/day05/
├── day05-guide.md       ← This file
├── smoke-checklist.md   ← Part 1: Your smoke test checklist
└── regression-suite.md  ← Part 2: Categorized test suite
```
