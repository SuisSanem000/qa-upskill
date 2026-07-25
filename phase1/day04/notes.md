# Day 4 — Personal Notes & Learnings
# Session date: 2026-07-25

---

## The Core Shift: Writing for the Developer

Before today, I thought a bug report was just a way to say "this is broken". Today I learned that a bug report is a **technical communication tool** designed specifically to help a developer fix an issue as quickly as possible.

The most important part of a bug report isn't the bug itself—it's the **Steps to Reproduce**. If a developer cannot reproduce the bug, they cannot fix it. "Atomic, numbered steps" is the golden rule.

---

## Severity vs. Priority (The Interview Trap)

This is a classic interview question and a crucial concept to master:

- **Severity (Technical Impact):** How badly does this bug break the software? (e.g., Crash = Critical, Typo = Low). **QA sets this.**
- **Priority (Business Urgency):** How fast do we need to fix it? (e.g., Fix today = P1, Fix next sprint = P3). **Product Owner/Manager sets this.**

### The Classic Examples:
1. **High Severity, Low Priority:** The app crashes (High Severity) when you click a hidden admin button that no user ever sees, on an obsolete OS version (Low Priority).
2. **Low Severity, High Priority:** The company logo on the main landing page is the wrong color or misspelled (Low Severity, it doesn't break functionality), but the marketing campaign launches tomorrow (High Priority).

---

## Bug Lifecycle Details

I now understand the flow better. It's not just Open -> Closed.

- **Reopened:** This happens more often than I thought. If I retest a "Fixed" bug and it still occurs, it goes back to Reopened. QA is the final gatekeeper.
- **Deferred:** Not every bug gets fixed. Sometimes a valid bug is Deferred because it's too risky to fix right now, or it's a known issue that will be addressed in a future redesign.
- **Rejected:** When devs say "working as intended." This is where acceptance criteria (from Day 3) become my best friend. If I have the AC, I can prove it's a bug.

---

## Flaky Bugs

Flaky bugs (intermittent bugs) are a developer's nightmare. As QA, my job isn't just to report "it failed once," but to try to figure out *why* it's intermittent. Does it only happen on slow networks? Does it happen when I click too fast? Adding the **Reproducibility rate** (e.g., "happens 2 out of 10 times") helps developers understand they might need to run the test multiple times to see the failure.

---

## Things to Remember for Interviews

**When asked "What makes a good bug report?":**
> "A good bug report is objective, reproducible, and atomic. It has a clear title, exact environment details, numbered steps to reproduce, clear expected vs. actual results, and includes attachments like screenshots or network logs to provide immediate context to the developer."

**When asked "What do you do if a developer rejects your bug as 'by design'?":**
> "I would cross-reference the behavior with the user story's acceptance criteria or product specifications. If the spec supports my report, I discuss it with the developer. If there is no spec, or it's ambiguous, I escalate to the Product Owner for a business decision. If the PO decides it's a feature, I ask that the spec be updated so future tests are aligned."
