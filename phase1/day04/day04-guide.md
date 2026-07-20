# Day 4 — Bug Lifecycle & Writing Effective Bug Reports

> **Phase:** 1 — Manual QA
> **Duration:** 1 hour
> **Target App:** https://the-internet.herokuapp.com
> **Deliverable:** 3 formal bug reports filed in `bug-reports.md`

---

## 🎯 Learning Objectives

- Understand the complete bug lifecycle from discovery to closure
- Write professional, reproducible bug reports
- Know bug severity vs. priority and when they differ
- Understand bug management tools (Jira, Azure DevOps, etc.)

---

## 📖 Concepts (15 min)

### Bug Lifecycle / Defect Life Cycle

```
New → Assigned → Open → Fixed → Retest → Closed
           ↕               ↕         ↕
        Rejected        Deferred   Reopened
```

| Status | Description |
|--------|-------------|
| **New** | Bug just reported, not yet reviewed |
| **Assigned** | Assigned to a developer |
| **Open** | Developer is actively fixing it |
| **Fixed** | Developer believes it is fixed |
| **Retest** | QA is verifying the fix |
| **Closed** | Fix verified and confirmed by QA |
| **Reopened** | Fix was insufficient; bug still present |
| **Rejected** | Not a bug — by design or invalid report |
| **Deferred** | Valid bug but postponed to a future sprint |

### Anatomy of a Good Bug Report

| Field | Purpose | Tips |
|-------|---------|------|
| **Bug ID** | Unique reference | Auto-generated in tools |
| **Title** | One-line summary | Be specific: "Login fails with correct credentials on iOS 16 Safari" |
| **Environment** | Where it occurred | Browser, OS, version, device |
| **Severity** | How bad is the impact? | Critical / High / Medium / Low |
| **Priority** | How urgently must it be fixed? | P1 / P2 / P3 / P4 |
| **Steps to Reproduce** | Exact steps | Numbered, atomic, reproducible |
| **Expected Result** | What should happen | Based on spec or common sense |
| **Actual Result** | What actually happened | Objective, no opinions |
| **Attachments** | Screenshot, video, logs | Always include if visual |
| **Reproducibility** | Always / Sometimes / Once | % rate if known |

### Severity vs. Priority

These are **NOT** the same thing.

| | Severity | Priority |
|--|--|--|
| **Definition** | Impact of the bug on functionality | Urgency of the fix |
| **Set by** | QA Engineer | Product Owner / Manager |
| **Example** | High severity, low priority: critical crash on an admin-only page rarely used |
| **Example** | Low severity, high priority: CEO's name is misspelled on the homepage |

### Severity Levels

| Level | Definition | Example |
|-------|-----------|---------|
| **Critical (S1)** | System crash, data loss, security breach | App crashes on login |
| **High (S2)** | Major feature broken, no workaround | Cannot submit a form |
| **Medium (S3)** | Feature partially broken, workaround exists | Date picker shows wrong month |
| **Low (S4)** | Minor UI issue, typo | Button text slightly misaligned |

### Tips for Great Bug Reports

1. **Be atomic** — one bug per report
2. **Be objective** — "Field turns red" not "field looks broken"
3. **Be reproducible** — if you can't reproduce it, neither can they
4. **Include all environments** — don't assume everyone uses Chrome
5. **Attach evidence** — a screenshot is worth 1000 words

---

## 🛠️ Task (40 min)

Visit https://the-internet.herokuapp.com and explore these pages for real bugs:
- `/login` — Try odd inputs and observe error message UX
- `/dynamic_loading/1` — Check loading behavior
- `/upload` — Try uploading unusual file types
- `/checkboxes` — Verify checkbox behavior
- `/dropdown` — Verify dropdown behavior

File **3 bug reports** in `bug-reports.md`. They can be real bugs you find, or you can describe the bugs as if the expected behavior was different (practice writing format).

---

## 🎤 Interview Prep (5 min)

### Q1: What is the difference between Severity and Priority?
**A:** Severity measures the *technical impact* of a bug on the system — how badly does it break functionality? Priority measures the *business urgency* — how soon must it be fixed? A typo on the homepage may be Low Severity but High Priority because it's customer-facing. A crash in a rarely-used admin screen may be High Severity but Low Priority.

### Q2: What do you do when a developer says "it's not a bug, it's a feature"?
**A:** Refer back to the requirements document, acceptance criteria, or specification. If no documented spec exists, escalate to the Product Owner to get a decision. Document everything. If it IS by design, ask for the design to be documented so future tests can be written to the correct expected behavior.

### Q3: What information is essential in a bug report?
**A:** Title, environment (browser/OS/device), steps to reproduce (numbered and atomic), expected vs. actual result, severity/priority, and attachments (screenshot/video/logs). Without these, the developer cannot reproduce or fix the bug.

### Q4: When do you reopen a bug?
**A:** When QA retests a "Fixed" bug and finds it is still occurring, or when a fix introduces a new regression in the same area. Always include a comment explaining why you reopened with your new test evidence.

### Q5: What is a "flaky" bug?
**A:** A bug that occurs inconsistently — sometimes it reproduces, sometimes it doesn't. Flaky bugs are often caused by timing issues, race conditions, or environment dependencies. They're hard to fix because they're hard to reproduce reliably. Document the reproducibility rate (e.g., "5 out of 10 attempts") and include as much context as possible.

---

## 📁 Files in This Folder

```
phase1/day04/
├── day04-guide.md   ← This file
└── bug-reports.md   ← Your task: write 3 formal bug reports
```
