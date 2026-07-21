# Day 1 — Personal Notes & Learnings
# Session date: 2026-07-21

---

## Key Concepts I Learned Today

### QA vs QC vs Testing — the triangle

These three are often used interchangeably, but they're different:

- **QA (Quality Assurance)** is about the *process* — setting up practices, standards, and reviews that prevent defects from being introduced in the first place. It is proactive.
- **QC (Quality Control)** is about the *product* — inspecting the output to find defects. It is reactive.
- **Testing** is a subset of QC — the act of executing the software to find defects.

**Why it matters in interviews:** Interviewers test this distinction constantly. If someone says "QA is just finding bugs" — that's QC thinking, not QA thinking. A QA engineer also improves processes, runs retros on test quality, and works with the team to catch problems before they become code.

---

### The STLC (Software Testing Life Cycle)

```
Requirement Analysis  → Understand what needs to be tested
Test Planning         → Scope, schedule, resources, risks
Test Case Design      → Write the test cases (today's session)
Environment Setup     → Configure test tools and data
Test Execution        → Actually run the tests
Test Closure          → Report, lessons learned, metrics
```

The key insight: **STLC runs in parallel with SDLC** (Software Development Life Cycle). QA doesn't start when developers "finish" — it starts when requirements exist.

---

### What Makes a Good Test Case

After writing 10 today, the pattern is clear. A great test case is:

| Principle | What it means | Example |
|-----------|--------------|---------|
| **Atomic** | Tests exactly one thing | TC_LOGIN_001 tests *only* valid login, not login + logout |
| **Repeatable** | Same steps → same result, always | Using fixed test data (`tomsmith`) instead of random data |
| **Unambiguous** | Zero interpretation required | "Click the blue Login button" not "press login" |
| **Traceable** | Links back to a requirement | TC_LOGIN_008 traces to security requirement |
| **Independent** | Doesn't need another test to run first | TC_LOGIN_010 has a clear precondition but stands alone |

---

## Findings & Observations from Today's Execution

### Finding 1 — No HTML5 `required` attribute on login fields

When submitting with empty username (TC_LOGIN_004), the browser did **not** show a native validation popup. The form submits and the server returns an error. This means:
- Client-side validation is missing
- Every empty-field submission hits the server unnecessarily
- **UX Improvement:** Add `required` attribute to both input fields

**Severity:** Low (functional, not blocking) / **Type:** UX / Performance

### Finding 2 — Validation order is deterministic

When both fields are empty (TC_LOGIN_006), the error message is always "Your username is invalid!" — never a password error. This tells us:
- Username is validated before password on the server
- The system doesn't concatenate errors ("username AND password are invalid")

**Implication:** If you're designing error messages, single-field feedback can help an attacker know which field is correct. Better practice is a generic "Invalid credentials" message.

### Finding 3 — Case sensitivity confirmed

`TomSmith` fails, `tomsmith` passes (TC_LOGIN_009). This is expected for security, but worth documenting since some legacy apps normalise usernames to lowercase.

---

## Interview Answers Practiced

### Q: What is the difference between a test case and a test scenario?
**My answer:** A test scenario is high-level — "test the login functionality." A test case is a detailed, step-by-step procedure with exact inputs and expected outputs. One scenario usually produces multiple test cases. I wrote 10 test cases today all from the single scenario "test the login form."

### Q: What is Verification vs Validation?
**My answer:** Verification = "are we building the product right?" — checking we follow specs, designs, and standards (reviews, walkthroughs). Validation = "are we building the right product?" — checking it actually meets user needs (testing, UAT). Both are needed.

### Q: What makes a good test case?
**My answer:** It should be atomic (one thing), repeatable (deterministic), unambiguous (clear steps), traceable (linked to a requirement), and independent (doesn't depend on other tests passing first).

### Q: What is the STLC?
**My answer:** The Software Testing Life Cycle has 6 phases: Requirement Analysis, Test Planning, Test Case Design, Environment Setup, Test Execution, and Test Closure. It runs in parallel with development — not after it.

### Q: What types of tests did you write today?
**My answer:** Positive tests (TC_LOGIN_001), negative tests (TC_LOGIN_002, 003, 004, 005, 006), edge/security tests (TC_LOGIN_008), UI/UX tests (TC_LOGIN_007), and flow tests (TC_LOGIN_010 — the logout flow). The mix ensures broad coverage.

---

## What to Remember for Tomorrow (Day 2)

- Day 2 covers **Equivalence Partitioning (EP)** and **Boundary Value Analysis (BVA)** — formal techniques for choosing *which* inputs to test
- Today I chose test inputs somewhat intuitively; tomorrow I'll apply mathematical rules
- Look at TC_LOGIN_004, 005, 006 — tomorrow's techniques would have derived these cases systematically, not by guessing
