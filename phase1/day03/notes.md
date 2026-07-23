# Day 3 — Personal Notes & Learnings
# Session date: 2026-07-23

---

## The Core Shift: QA as Quality Advocate, Not Gatekeeper

Before today, I thought of QA as the final checkpoint — "the testers will catch it." Today made it clear that in modern Agile teams, this model is actively harmful. By the time a bug is found post-development, the cost to fix it is 5–10x higher than finding it in planning.

The mental model that clicked:

```
Old (Waterfall QA):   Dev → hand off → QA → find bugs → fix → repeat
New (Agile QA):       QA questions the story → Dev builds the right thing → QA verifies → done
```

QA's most valuable contribution is in **preventing defects**, not just finding them.

---

## Key Concepts Solidified

### Shift-Left Testing in Practice
"Shift left" isn't just a buzzword — it's a specific set of activities:
- Writing test cases **before** the developer starts coding (helps both QA plan coverage and dev understand edge cases)
- Attending design reviews to flag untestable decisions (e.g., "this event-driven architecture makes it impossible to test state without mocking the event bus")
- Including QA in the PR review to check for missing error handling

### The Three Amigos — Most Underrated Practice
The 7 questions I wrote for the login story (see agile-qa-map.md Part 4) are the kind of questions that prevent bugs from being written at all. The concurrent session question alone could prevent a serious security vulnerability. Neither the PO nor the dev would have raised it naturally.

**Key insight:** As a developer, I had domain knowledge about how things are built. As QA, I use that knowledge differently — not to build, but to ask "what's the failure mode of this design decision?"

### Definition of Done — Not a QA-Only Concern
The DoD is a **team contract**, not a QA checklist. Every member of the team (dev, QA, PO) is responsible for ensuring each criterion is met. QA's job is to verify the contract was honoured, not to be the only person who cares about it.

---

## Connecting to Previous Days

| Day | Concept | How Day 3 Extends It |
|-----|---------|---------------------|
| Day 1 | Test cases (TC_LOGIN_001–010) | These map directly to the DoD criterion: "QA test cases executed and passed" |
| Day 2 | EP, BVA, Decision Tables | These feed into Three Amigos — the EP partitions and BVA boundaries are the "edge cases I identified" |
| Day 3 | Agile ceremonies | Acceptance criteria written today (Given/When/Then) become Day 7's Gherkin feature files |

---

## Things to Remember for Interviews

**When asked "how do you work in an Agile team?":**
Don't say "I execute test cases at the end of the sprint." Say:
> "I'm involved from the start — I review stories in backlog refinement, write acceptance criteria in planning, participate in Three Amigos sessions before development begins, execute tests during the sprint, and present quality metrics in the Sprint Review."

**When asked "what is your Definition of Done?":**
Name specific, measurable items — not vague ones. "No open critical bugs" is better than "the feature works." "80% unit test coverage on authentication logic" is better than "unit tests written."
