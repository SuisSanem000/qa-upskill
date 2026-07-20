# Day 3 — Agile QA & Scrum Ceremonies

> **Phase:** 1 — Manual QA
> **Duration:** 1 hour
> **Deliverable:** Completed `agile-qa-map.md` — mapping QA activities to every Scrum event

---

## 🎯 Learning Objectives

- Understand the QA engineer's role within an Agile/Scrum team
- Map QA activities to each Scrum ceremony and artifact
- Understand shift-left testing and the Definition of Done
- Know how to write acceptance criteria in a QA context

---

## 📖 Concepts (15 min)

### The Agile Testing Mindset

In **Waterfall**, testing happens after development. In **Agile**, testing is continuous and collaborative. The QA engineer is not a gatekeeper at the end — they are a **quality advocate throughout the sprint**.

```
Waterfall:   Requirements → Design → Development → TESTING → Release
Agile:       [Plan+Test] → [Dev+Test] → [Dev+Test] → [Test+Release] → repeat
```

### The Scrum Framework

| Event | Duration | Purpose |
|-------|----------|---------|
| **Sprint Planning** | 2–4 hours | Select backlog items, define acceptance criteria |
| **Daily Standup** | 15 min | Sync on progress, blockers |
| **Sprint Review** | 1–2 hours | Demo working software to stakeholders |
| **Sprint Retrospective** | 1–2 hours | Improve team process |
| **Backlog Refinement** | Ongoing | Groom and estimate stories |

### QA in Scrum — The 3 Amigos

The **Three Amigos** is a meeting between:
- 🛠️ **Developer** — How will this be built?
- 📋 **Product Owner** — What do we want?
- 🔍 **QA Engineer** — How will we verify it? What could go wrong?

This meeting happens **before** a story is developed to catch ambiguities early.

### Shift-Left Testing

"Shift left" means moving testing activities **earlier** in the development lifecycle.

```
Traditional:  [Dev] -------- [TEST] --- [Release]
Shift-Left:   [TEST+Dev] --- [TEST+Dev] [Release]
```

Activities that shift left:
- Test case design during sprint planning
- Code reviews by QA
- Unit test coverage requirements
- Acceptance criteria defined before coding starts

### Definition of Done (DoD)

The DoD is a checklist that every user story must meet before it can be called "done." QA owns contributing to the DoD.

**Example DoD:**
- [ ] Code reviewed by at least one peer
- [ ] Unit tests written and passing (≥ 80% coverage)
- [ ] QA test cases executed and passed
- [ ] No critical or high bugs open
- [ ] Acceptance criteria verified
- [ ] Deployed to staging environment
- [ ] Product Owner sign-off

### Acceptance Criteria vs. Test Cases

| | Acceptance Criteria | Test Case |
|--|--|--|
| Written by | Product Owner + QA | QA |
| Format | "Given/When/Then" or bullet points | Step-by-step procedure |
| Level | Business/feature level | Implementation level |
| Example | "User can log in with valid credentials" | TC_LOGIN_001 steps |

---

## 🛠️ Task (40 min)

Open `agile-qa-map.md` and complete all sections:
1. Map QA activities to each Scrum ceremony
2. Write a Definition of Done for a login feature
3. Write acceptance criteria for 3 user stories

---

## 🎤 Interview Prep (5 min)

### Q1: What is the role of a QA engineer in an Agile team?
**A:** QA engineers in Agile are quality advocates integrated into the team. They participate in all Scrum ceremonies, write and review acceptance criteria during planning, collaborate in Three Amigos sessions before development, execute tests during the sprint (not after), and contribute to the Definition of Done.

### Q2: What is shift-left testing?
**A:** Shift-left testing means moving testing activities earlier in the SDLC. Instead of testing only after development is complete, QA is involved from requirements through design and development — writing test cases before code is written, reviewing designs, and contributing to code reviews.

### Q3: What is the Definition of Done?
**A:** The DoD is a shared team agreement on the criteria that must be met before any user story can be considered complete. It ensures consistency and prevents "done but not tested" scenarios. Examples include: tests passing, code reviewed, no open critical bugs, deployed to staging, acceptance criteria verified.

### Q4: What is a Three Amigos meeting?
**A:** A collaboration session involving Business (Product Owner), Development, and QA to discuss a user story before development begins. The goal is to surface ambiguities, clarify requirements, and identify edge cases early — preventing rework and misalignment.

### Q5: How do you handle a story where requirements change mid-sprint?
**A:** First, assess the impact on existing test cases and acceptance criteria. Communicate with the Product Owner and development team to understand the scope of the change. Update test cases accordingly, flag if the change is too large for the current sprint, and document the change for the retrospective.

---

## 📁 Files in This Folder

```
phase1/day03/
├── day03-guide.md    ← This file
└── agile-qa-map.md   ← Your task: map QA to Scrum + write AC
```
