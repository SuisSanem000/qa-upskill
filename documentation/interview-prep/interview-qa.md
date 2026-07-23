# QA Interview Prep — Master Q&A Bank

> **Purpose:** A single, growing file of interview questions and answers.
> One question is never repeated. Each daily session adds new unique questions.
> Use this to revise before interviews — read out loud.
>
> **Last updated:** 2026-07-21 (Day 2)
> **Total questions:** 10

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

---

## Test Design Techniques `[Day 2]`

---

### Q6 — What is Equivalence Partitioning and why do we use it?

**A:** Equivalence Partitioning divides the input space into **partitions** (classes) where the software behaves identically for any value in the class. We pick one representative per partition instead of testing every possible input. It dramatically reduces test count while maintaining full coverage of distinct behaviours. For a password field with an 8–50 char rule: instead of writing 50+ tests, you write 5 (one per partition: empty, too short, valid, too long, special chars only).

---

### Q7 — What is the difference between Equivalence Partitioning and Boundary Value Analysis?

**A:** They work together but answer different questions:
- **EP** answers *which groups* to test — it identifies distinct behavioural partitions
- **BVA** answers *which specific values* at the edges of those partitions to test

BVA is an extension of EP. EP says "test the valid partition and the invalid partition." BVA adds "and test exactly at the boundary between them, plus one step either side" — because off-by-one errors (e.g. `>= 8` vs `> 8`) are only caught at the boundary, not by a value safely inside the partition.

---

### Q8 — When would you use a Decision Table?

**A:** When a feature has **two or more independent conditions** that combine to produce different outcomes. A decision table ensures no combination is missed. Classic use cases:
- Login with multiple factors (username + password + MFA + account status)
- Pricing / discount rules (membership tier + cart value + coupon)
- Access control (user role + resource type + ownership)

The table maps every condition combination to its expected actions. After filling it in, you **collapse** rules that produce identical outcomes — reducing redundant test cases.

---

### Q9 — What is State Transition Testing and when is it most useful?

**A:** State Transition Testing models a system as a finite set of **states** with **transitions** triggered by events. You derive test cases that cover every valid state, every valid transition, every invalid transition, and every event. It is most useful for:
- Session management (logged in, logged out, timed out)
- Shopping carts (empty, has items, checked out, payment failed)
- Order workflows (pending, approved, shipped, delivered, returned)

The key value is discovering **paths that feature specs don't describe** — particularly edge cases like what happens when a session expires mid-checkout.

---

### Q10 — What is the 'test oracle problem'?

**A:** The test oracle is the mechanism that determines whether a test passed or failed — i.e., what the *correct* expected result is. The oracle problem occurs when it is difficult or impossible to automatically determine the expected result. This is common in:
- AI/ML systems (what is the "correct" image caption?)
- Complex financial calculations (is this tax figure right?)
- Legacy systems with no documentation

Solutions: use a reference implementation, apply metamorphic testing (change input slightly and verify the *relationship* between outputs), or use human review as the oracle.

