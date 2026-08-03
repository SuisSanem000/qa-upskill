# Day 5 — Smoke Test Checklist (Completed)
# Target: https://the-internet.herokuapp.com
# Session date: 2026-08-03

> **Purpose:** Verify the build is stable enough for deeper testing.
> **Time limit:** Should complete in < 20 minutes.
> **Instructions:** Execute each check, mark Pass/Fail, add notes.

---

## Smoke Test Execution Log

| Run Date | Build / Version | Environment | Executed By | Result |
|---|---|---|---|---|
| 2026-08-03 | v1.0.0 | Chrome / Windows 11 | QA Learner | PASS |

---

## Critical Checks

| # | Check | URL / Location | Expected | Actual | Status |
|---|-------|----------------|----------|--------|--------|
| S01 | Application loads without server errors | https://the-internet.herokuapp.com | Status 200 OK, Homepage renders | Renders properly | PASS |
| S02 | Homepage renders all navigation links | `/` | A list of links is visible | Links are visible | PASS |
| S03 | Login page is accessible | `/login` | Form renders with username/password inputs | Inputs render | PASS |
| S04 | Valid login succeeds | `/login` | Redirect to `/secure` with success message | Redirected, message shown | PASS |
| S05 | Secure area is accessible after login | `/secure` | Page heading "Secure Area" is visible | Heading is visible | PASS |
| S06 | Logout works correctly | `/secure` → Logout | Redirect to `/login` with success message | Redirected, message shown | PASS |
| S07 | File Upload page is accessible | `/upload` | File upload form and submit button visible | Form renders | PASS |
| S08 | Dropdown page is accessible and usable | `/dropdown` | Dropdown renders, options selectable | Dropdown works | PASS |
| S09 | Checkboxes page is accessible | `/checkboxes` | Checkboxes render and can be toggled | Checkboxes toggle | PASS |
| S10 | Dynamic loading page is accessible | `/dynamic_loading/1` | Start button appears and triggers loading | Loading triggers | PASS |

---

## Smoke Test Result

| Total Checks | Passed | Failed | Blocked |
|---|---|---|---|
| 10 | 10 | 0 | 0 |

**Overall Verdict:** PASS — proceed with full testing

**Reason (if FAIL):**
```
N/A
```
