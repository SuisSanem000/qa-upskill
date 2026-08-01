# QA Interview Prep — Master Q&A Bank

> **Purpose:** A single, growing file of interview questions and answers.
> One question is never repeated. Each daily session adds new unique questions.
> Use this to revise before interviews — read out loud.
>
> **Last updated:** 2026-08-01 (Day 5)
> **Total questions:** 25

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

---

## Agile QA & Scrum Ceremonies `[Day 3]`

---

### Q11 — What is the role of a QA engineer in an Agile/Scrum team?

**A:** In Agile, QA engineers are quality advocates embedded in the team throughout the entire sprint — not a gate at the end. Concretely:
- **Sprint Planning:** Review stories for testability, write/refine acceptance criteria, estimate testing effort
- **Backlog Refinement:** Flag ambiguous stories before they reach a sprint
- **Three Amigos:** Ask edge-case questions before development begins
- **During the sprint:** Execute tests continuously as stories are completed, not in a batch at the end
- **Sprint Review:** Present test results and quality metrics to stakeholders
- **Retrospective:** Raise process improvements for testing efficiency

The key distinction from Waterfall QA: **prevention over detection.**

---

### Q12 — What is shift-left testing?

**A:** Shift-left means moving testing activities earlier in the development lifecycle — to the left on a timeline. Instead of testing only after development is complete, QA activities begin at requirements:
- Writing test cases before coding starts (helps developers understand edge cases)
- Reviewing designs and wireframes for testability
- Participating in PR reviews to spot missing error handling
- Requiring unit test coverage as part of the Definition of Done

Benefit: bugs found in planning cost a fraction of bugs found in production. The earlier a defect is caught, the cheaper it is to fix.

---

### Q13 — What is the Definition of Done, and who owns it?

**A:** The Definition of Done (DoD) is a shared team agreement — a checklist that every user story must satisfy before being called "done." It is **owned by the whole team**, not just QA. Typical items include:
- Code peer-reviewed
- Unit tests written and passing (e.g. ≥ 80% coverage)
- QA test cases executed and passed
- No open Critical/High bugs
- Acceptance criteria verified
- Deployed to staging
- Accessibility checked
- Product Owner sign-off

QA's role is to verify the DoD was honoured, not to be the only person who cares about it.

---

### Q14 — What is a Three Amigos meeting?

**A:** A short collaboration session between **Business (Product Owner), Development, and QA** held before a story is developed. The goal is to surface ambiguities and align on the expected behaviour *before any code is written*.

Each role brings a different lens:
- **PO:** What does the business need?
- **Dev:** How will this be built? What are the technical constraints?
- **QA:** How will we verify this works? What could go wrong? What edge cases are missing from the story?

The output is a shared understanding and updated acceptance criteria — preventing rework caused by misaligned assumptions.

---

### Q15 — What is the difference between acceptance criteria and test cases?

**A:**

| | Acceptance Criteria | Test Cases |
|---|---|---|
| Written by | Product Owner + QA | QA |
| Format | Given/When/Then or bullet points | Step-by-step with exact data |
| Level | Business / feature level | Implementation / execution level |
| When | Before development | Before/during testing |
| Example | "User can log in with valid credentials" | TC_LOGIN_001 with username: `tomsmith`, password: `SuperSecretPassword!` |

Acceptance criteria define *what* success looks like. Test cases define *how* to verify it. One acceptance criterion typically generates multiple test cases (positive, negative, edge cases).

---

## Bug Lifecycle & Reporting `[Day 4]`

---

### Q16 — What is the difference between Severity and Priority?

**A:** 
- **Severity** measures the technical impact of a bug on the system—how badly does it break functionality? (Set by QA).
- **Priority** measures the business urgency—how soon must it be fixed? (Set by Product Owner/Manager).

They are independent. A typo on the homepage is Low Severity (doesn't break anything) but High Priority (looks bad to customers). A crash on a hidden admin page used once a year is High Severity (system failure) but Low Priority (not urgent).

---

### Q17 — What makes a good, effective bug report?

**A:** A good bug report is **objective, atomic, and highly reproducible.** It must contain:
1. **Clear Title:** Specific summary (e.g., "500 error on upload when no file is selected").
2. **Environment:** OS, Browser, App Version, Device.
3. **Steps to Reproduce:** Numbered, unambiguous actions to trigger the bug.
4. **Expected vs. Actual Result:** What should happen vs. what actually happened.
5. **Attachments:** Screenshots, screen recordings, network logs (HAR), or console errors.

If the developer cannot reproduce it based on the steps, they cannot fix it.

---

### Q18 — Explain the typical Bug Lifecycle.

**A:** 
1. **New:** QA logs the bug.
2. **Assigned:** Triaged and assigned to a developer.
3. **In Progress / Open:** Developer is actively fixing it.
4. **Fixed:** Developer deploys the fix to the test environment.
5. **Retest / Ready for QA:** QA verifies the fix.
6. **Closed:** QA confirms the fix worked.
*OR*
**Reopened:** QA finds the bug is still present and sends it back to the developer.
(Other states include **Deferred** for postponing, or **Rejected/Invalid** if it's by design).

---

### Q19 — What is a "flaky" bug, and how do you report it?

**A:** A flaky bug (or intermittent bug) is one that doesn't reproduce 100% of the time. They are often caused by race conditions, network latency, or environment inconsistencies. 
To report it effectively, I note the **reproducibility rate** (e.g., "Reproduces 3 out of 10 times") and provide as much contextual evidence as possible (timestamps, full logs, video). I never ignore a flaky bug; I log it so a pattern can be established over time.

---

### Q20 — What do you do if a developer rejects your bug, saying "It's not a bug, it's a feature"?

**A:** 
1. I cross-reference the behavior against the accepted requirements, user story, or Acceptance Criteria. 
2. If the spec proves it's a bug, I present that to the developer.
3. If the spec is missing or ambiguous, I don't argue with the developer—I escalate to the Product Owner to make a business decision.
4. If the PO decides it *is* a feature, I request that the documentation be updated so future QA testers know the correct expected behavior.

---

## Smoke, Sanity & Regression Testing `[Day 5]`

---

### Q21 — What is the difference between smoke testing and regression testing?

**A:** They answer different questions at different points in the lifecycle:
- **Smoke testing** asks *"Is this build stable enough to test?"* — it is **wide but shallow**, covering only the most critical paths. Run it immediately after a new build is deployed. If smoke fails, reject the build without further testing.
- **Regression testing** asks *"Did our changes break anything that previously worked?"* — it is **wide and deep**, covering the full test suite. Run it before any release to catch regressions introduced by new code.

*Memory aid: Smoke = survival check. Regression = full health check.*

---

### Q22 — What is sanity testing, and how does it differ from smoke testing?

**A:**
- **Smoke testing** is run after a **new build** and checks the overall system's health across many features. It is usually scripted.
- **Sanity testing** is run after a **specific bug fix or minor change** and checks only that particular area. It is narrower, often informal, and does not re-run the full suite.

Example: A developer fixes a bug where the dropdown resets on page load. Sanity testing = navigate to the dropdown page, verify the fix. Nothing else. You are *not* re-testing login or file upload.

---

### Q23 — How do you decide which test cases belong in a smoke suite vs. a regression suite?

**A:** The key filter for smoke is: *"If this test fails, is the build completely worthless and should be sent back to development immediately?"* Only tests meeting that bar belong in smoke — typically 5–15 tests maximum.

Everything else goes into the regression suite, prioritized by:
1. **Business criticality** — what features drive the most revenue or user trust?
2. **Blast radius** — what areas are most likely to be affected by the recent change?
3. **Historical bug density** — what areas have had bugs before?

The goal is maximum risk coverage with minimum execution time.

---

### Q24 — What is a regression bug, and what causes them?

**A:** A regression bug is functionality that **worked correctly before a code change but is now broken**. It is the software equivalent of fixing one crack and creating two new ones.

Common causes:
- A developer modifies shared utility code that multiple features depend on
- A dependency is upgraded and its API changes subtly
- A configuration change (environment variable, feature flag) has unexpected side effects
- A CSS/JS bundle change conflicts with an existing component

This is why regression test suites must be maintained as living documents — they are your safety net for exactly this risk.

---

### Q25 — What is the Test Pyramid and why does it matter?

**A:** The Test Pyramid is a model for balancing the composition of a test suite across three layers:

```
       /E2E (few)\
      /Integration \
     /  Unit Tests  \
```

- **Unit tests** (base): Fast, cheap, developer-written. Test individual functions. Should be the most numerous.
- **Integration tests** (middle): Test how components interact. Slower and more complex. Medium number.
- **E2E / UI tests** (top): Full user journey through the browser. Slowest and most expensive to maintain. Should be few in number, covering only the most critical flows.

It matters because teams that invert the pyramid (too many E2E tests, too few unit tests) end up with slow, flaky, expensive test suites. The pyramid optimizes for fast feedback at the lowest possible cost.
