# Day 2 — Personal Notes & Learnings
# Session date: 2026-07-21

---

## The Core Mental Shift Today

Day 1 taught me *what* to test (the test case format).  
Day 2 taught me *how to decide* what to test (the techniques).

Without techniques, test selection is guesswork — you rely on intuition and miss boundary bugs. With techniques, test selection is systematic and defensible: you can explain *why* each case exists.

---

## Equivalence Partitioning — Key Takeaways

**The rule:** Any value inside a partition is equivalent — testing one tests them all.

**How I use it on a new form field:**
1. Ask: what are the rules for this field? (min, max, type, format)
2. Draw the partition boundaries
3. Identify: which partitions are valid, which are invalid?
4. Pick one representative from each partition
5. Write one test case per representative

**Example from today:** A password field with 8–50 char rule → 5 partitions → 5 test cases. Without EP, a junior tester might write 20+ tests and still miss the empty string case.

---

## Boundary Value Analysis — Key Takeaways

**The rule:** Bugs cluster at boundaries. Always test min-1, min, min+1 and max-1, max, max+1.

**Why boundaries?** Developers write code like `if (length >= 8)` — an off-by-one becomes `if (length > 8)`. This bug is invisible to EP (both pick a value from the valid partition) but is caught instantly by BVA testing `length = 8`.

**Real observation from today:** The Herokuapp has no `minlength`/`maxlength` on its input fields. This is a real-world gap I could write up as a UX finding — missing client-side validation means:
- Every keystroke validation happens server-side (extra network requests)
- Users get no immediate feedback while typing
- Automated scrapers/bots can submit arbitrary-length payloads

---

## Decision Tables — Key Takeaways

**When to reach for a decision table:**
- Feature has 2+ independent boolean conditions
- Each combination could produce a different outcome
- You need to prove to yourself (and stakeholders) that no combination is missed

**The collapse step is critical:** After filling in the full 8-rule table, I realised Rules 3–8 (all login failures) only differ in error message wording. The "Remember Me" checkbox is completely irrelevant when login fails. Collapsing the table from 8 to 4 rules makes this explicit and removes redundant test cases.

**Interview tip:** When asked "how do you design tests for complex business logic?", say "I start with a decision table" — it signals structured thinking.

---

## State Transition — Key Takeaways

**The insight:** The state diagram forced me to think about a path (S3 → S4 session timeout) that doesn't appear in any happy-path feature spec. Feature specs describe the happy path. State diagrams expose all paths including:
- What happens when a session expires mid-flow?
- What happens after a failed re-authentication attempt?
- Can a user get stuck in an error state with no way out?

**Test cases from state diagrams always include invalid transitions** — e.g., what if someone tries to directly access `/secure` without going through S1? (Answer: should redirect to S1. That's TC ST-008 — not in the guide, but derived from the diagram.)

---

## Connecting Today to Yesterday

| Day 1 | Day 2 |
|-------|-------|
| Wrote TC_LOGIN_004 (empty username) intuitively | EP-P-04 (empty string) derives this case systematically |
| Wrote TC_LOGIN_002 (invalid username) | EP produces this as the "invalid partition" representative |
| Wrote TC_LOGIN_009 (case sensitivity) | This is actually an EP partition: "correct username, wrong case" — a separate partition I missed in Day 1! |

**Day 1 gap found:** TC_LOGIN_009 (case-sensitive username) isn't really in the same partition as "wrong username" — it deserves its own EP partition: "valid username format, wrong case." Day 2 thinking retrospectively improves Day 1 work.
