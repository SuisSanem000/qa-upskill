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
| 2026-08-01 | v1.0 (demo app) | Chrome 126 / Windows 11 | QA Trainee | PASS |

---

## Critical Checks

| # | Check | URL / Location | Expected | Actual | Status |
|---|-------|----------------|----------|--------|--------|
| S01 | Application loads without server errors | https://the-internet.herokuapp.com | HTTP 200 OK. Page renders with no 500/502/503 error message. The heading "Welcome to the-internet" appears. | Page loads correctly. No server error. Heading is visible. | ✅ Pass |
| S02 | Homepage renders all navigation links | `/` | A scrollable list of example links is visible (e.g. "Form Authentication", "Dropdown", "File Upload"). Each link is clickable. | All navigation links render and are clickable. | ✅ Pass |
| S03 | Login page is accessible | `/login` | Navigating to `/login` loads a page with a username field, a password field, and a Login button. HTTP 200. | Page loads correctly with both input fields and the Login button present. | ✅ Pass |
| S04 | Valid login succeeds | `/login` | After entering `tomsmith` / `SuperSecretPassword!` and clicking Login, the user is redirected to `/secure` and a green flash message reads "You logged into a secure area!" | Redirected to `/secure`. Green flash visible. | ✅ Pass |
| S05 | Secure area is accessible after login | `/secure` | The page heading "Secure Area" is displayed. A Logout button is present. No redirect back to login. | Heading "Secure Area" visible. Logout button present. | ✅ Pass |
| S06 | Logout works correctly | `/secure` → Logout | Clicking the Logout button redirects to `/login`. A green flash message reads "You logged out of the secure area!" | Redirected to `/login`. Green flash message displayed. | ✅ Pass |
| S07 | Dropdown list renders and is selectable | `/dropdown` | Page loads. A `<select>` element is present with at least two selectable options (Option 1, Option 2). Selecting an option changes the dropdown value. | Dropdown loads. Options 1 and 2 selectable. Value updates on change. | ✅ Pass |
| S08 | Checkboxes page loads and checkboxes toggle | `/checkboxes` | Page loads with two checkboxes. Clicking each checkbox toggles its checked/unchecked state. | Both checkboxes render and toggle correctly on click. | ✅ Pass |
| S09 | File Upload page loads and upload control is present | `/upload` | Page loads. A file chooser input and an "Upload" button are present. No JavaScript errors in console. | File chooser and Upload button visible. Console clean. | ✅ Pass |
| S10 | Dynamic content page loads without errors | `/dynamic_content` | Page loads with three rows of content. No JS errors. Images load (not broken). | Three content rows render. No broken images. Console clean. | ✅ Pass |

---

## Smoke Test Result

| Total Checks | Passed | Failed | Blocked |
|---|---|---|---|
| 10 | 10 | 0 | 0 |

**Overall Verdict:** PASS — proceed with full testing

**Reason (if FAIL):**
```
N/A — all 10 smoke checks passed. The build is stable and ready for deeper exploratory
and regression testing.
```

---

## Notes & Observations

- **S04 / S06:** Login and logout both produce green flash messages. This is consistent with the app's design.
- **S07:** The dropdown has a default placeholder option ("Select Option") and two selectable options. The placeholder cannot be reselected — this is expected.
- **S09:** File upload control is an HTML `<input type="file">`. No drag-and-drop is present on this page. Uploading is not tested at smoke level — only that the control renders.
- **Smoke test philosophy:** These 10 checks were selected because they cover the broadest spread of the app's core mechanics (navigation, authentication, form controls, dynamic content) in the shortest possible time. If any one of them fails, the entire build should be rejected and returned to development — there is no value in continuing to test a broken build.
