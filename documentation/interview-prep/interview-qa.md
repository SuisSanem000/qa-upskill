# QA Interview Prep — Master Q&A Bank

> **Purpose:** A single, growing file of interview questions and answers.
> One question is never repeated. Each daily session adds new unique questions.
> Use this to revise before interviews — read out loud.
>
> **Last updated:** 2026-07-21 (Day 1)
> **Total questions:** 5

---

## How to Use This File

- Read each answer out loud — don't just skim.
- Cover the answer and try to recall it before reading.
- Questions marked `[Day X]` show which session introduced them.

---

## Foundations & Test Case Writing `[Day 1]`

---

### Q1 — What is the difference between a test case and a test scenario?

**A:** A **test scenario** is a high-level statement of *what* to test — e.g., "Test the login functionality." A **test case** is a detailed, step-by-step procedure with exact inputs, preconditions, and expected results. One test scenario typically generates multiple test cases. Scenarios drive coverage planning; test cases drive execution.

---

### Q2 — What is the difference between Verification and Validation?

**A:**
- **Verification** = *"Are we building the product right?"* — Checks the product against specs and designs. Done via reviews, walkthroughs, and inspections. No code needs to run.
- **Validation** = *"Are we building the right product?"* — Checks the product meets actual user needs. Done via testing and UAT.

*Memory aid: Verification → **V**et the specs. Validation → **V**erify with users.*

---

### Q3 — What are the different types of testing?

**A:**
- **Functional:** Unit, Integration, System, Acceptance (UAT)
- **Non-functional:** Performance, Security, Usability, Reliability
- **Structural:** White-box (code path coverage)
- **Change-related:** Regression, Smoke, Sanity

In interviews, group them by category — don't just list names. Examiners want to see you understand the *purpose* of each group.

---

### Q4 — What is the difference between a test plan and a test strategy?

**A:**
- **Test Strategy** = Organisation-wide, high-level document covering the overall testing approach, methodologies, tools, and responsibilities. It rarely changes.
- **Test Plan** = Project-specific document covering scope, objectives, schedule, resources, risks, and entry/exit criteria for one particular project. It changes per project.

*Analogy: Strategy is the company's playbook; Test Plan is the game plan for Tuesday's match.*

---

### Q5 — What makes a good test case?

**A:** A good test case is:
- **Atomic** — tests exactly one thing
- **Repeatable** — same steps always produce the same result
- **Unambiguous** — every step is clear with no room for interpretation
- **Traceable** — linked back to a requirement or user story
- **Independent** — does not rely on another test case having been run first

---

<!-- ═══════════════════════════════════════════════════════════
     ADD NEW QUESTIONS BELOW THIS LINE — DO NOT REPEAT QUESTIONS
     Format: ## Topic Name [Day X]
     ════════════════════════════════════════════════════════ -->
