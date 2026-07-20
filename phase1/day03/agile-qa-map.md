# Day 3 — Agile QA Map
# Mapping QA activities to Scrum ceremonies and artifacts

> **Instructions:** Fill in all `[ TODO ]` sections with your own words and analysis.

---

## Part 1 — QA Activities per Scrum Ceremony

For each ceremony, describe what a QA engineer **does** and what **artifacts** they produce.

### Sprint Planning
| QA Activity | Input | Output |
|---|---|---|
| Review user stories for testability | Backlog items | Testability feedback |
| `[ TODO: Add 2 more QA activities ]` | | |
| | | |

**QA Questions to ask during Sprint Planning:**
```
[ TODO: Write 5 questions a QA should ask during sprint planning. Example:
- "What is the expected behavior when a user submits the form with missing required fields?"
- Add 4 more... ]
```

---

### Daily Standup — QA Focus

What does a QA engineer report in the daily standup?

```
[ TODO: Write a sample QA standup update for a hypothetical situation.
Format:
- Yesterday I...
- Today I will...
- Blockers: ...
]
```

---

### Backlog Refinement (Grooming)

**QA's role:** Identify ambiguities, estimate testing effort, flag missing acceptance criteria.

**Checklist for a "refinable" story:**
- [ ] `[ TODO: Add criterion 1 ]`
- [ ] `[ TODO: Add criterion 2 ]`
- [ ] `[ TODO: Add criterion 3 ]`
- [ ] `[ TODO: Add criterion 4 ]`
- [ ] `[ TODO: Add criterion 5 ]`

---

### Sprint Review

**QA's role:**

```
[ TODO: Describe what a QA engineer does in the Sprint Review. 
Do they demo? Do they report test results? What metrics do they share? ]
```

---

### Sprint Retrospective

**Common QA items raised in retros:**

```
[ TODO: List 4 real-world QA pain points that might be raised in a retro.
Example: "Test environments were unstable, causing flaky test results."
Add 3 more... ]
```

**Retro format (Start / Stop / Continue):**

| Category | QA Perspective |
|---|---|
| **Start doing** | `[ TODO ]` |
| **Stop doing** | `[ TODO ]` |
| **Continue doing** | `[ TODO ]` |

---

## Part 2 — Definition of Done (DoD)

Write a Definition of Done for the **Login Feature** story:

> *"As a registered user, I want to log in with my email and password so that I can access my account."*

### Definition of Done — Login Feature

- [ ] `[ TODO: Criterion 1 — code quality ]`
- [ ] `[ TODO: Criterion 2 — unit testing ]`
- [ ] `[ TODO: Criterion 3 — QA test cases ]`
- [ ] `[ TODO: Criterion 4 — bug status ]`
- [ ] `[ TODO: Criterion 5 — acceptance criteria ]`
- [ ] `[ TODO: Criterion 6 — environment deployment ]`
- [ ] `[ TODO: Criterion 7 — accessibility ]`
- [ ] `[ TODO: Criterion 8 — stakeholder sign-off ]`

---

## Part 3 — Acceptance Criteria

Write **Given / When / Then** acceptance criteria for each user story.

### Story 1: Login
> *"As a registered user, I want to log in so I can access my account."*

```gherkin
[ TODO: Write 3 acceptance criteria using Given/When/Then format.

Scenario 1: Successful login
  Given ...
  When ...
  Then ...

Scenario 2: Invalid credentials
  Given ...
  When ...
  Then ...

Scenario 3: Empty fields
  Given ...
  When ...
  Then ...
]
```

---

### Story 2: Logout
> *"As a logged-in user, I want to log out so my session is securely terminated."*

```gherkin
[ TODO: Write 2 acceptance criteria using Given/When/Then format. ]
```

---

### Story 3: Session Timeout
> *"As a user, I want to be automatically logged out after 30 minutes of inactivity to protect my account."*

```gherkin
[ TODO: Write 2 acceptance criteria using Given/When/Then format. ]
```

---

## Part 4 — Three Amigos Session Notes

Imagine you are the QA in a Three Amigos meeting for Story 1 (Login).

**QA Questions I would ask:**

```
[ TODO: Write at least 6 questions you would ask as QA in this meeting.
Examples cover: error messages, field validation, session handling, 
security, accessibility, mobile behavior, etc. ]

1. 
2. 
3. 
4. 
5. 
6. 
```

**Edge cases I identified:**

```
[ TODO: List at least 5 edge cases for the login feature that the 
developer or PO might not have thought of. ]

1. 
2. 
3. 
4. 
5. 
```

---

## Reflection

```
[ TODO: What was the most surprising thing you learned about QA's role 
in Agile today? How is it different from what you expected as a developer? ]
```
