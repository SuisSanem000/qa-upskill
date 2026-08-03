# Day 5 — Regression Suite (Completed)
# Categorized test cases from Day 1 + new additions
# Session date: 2026-08-03

> **Purpose:** Demonstrate how to categorize existing test cases into Smoke / Sanity / Full Regression
> and extend the suite with new tests covering other pages.

---

## Part 1 — Categorization of Day 1 Test Cases

**Decision criteria used:**
- **Smoke** → Must-pass gate. The single most critical scenario. If this fails, the whole build is rejected.
- **Sanity** → Run after a bug fix or targeted change to verify a specific area. Narrow focus.
- **Full Regression** → The complete safety net. Run before any release to ensure nothing is broken.

| Test Case ID | Title | Category | Justification |
|---|---|---|---|
| TC_LOGIN_001 | Successful login with valid credentials | **Smoke** | The single most critical check for authentication. If users cannot log in at all, the build is worthless — no further testing makes sense. This is the minimum viability gate for the login feature. |
| TC_LOGIN_002 | Login with invalid username | **Full Regression** | Important security and UX validation, but not a "is the build alive?" check. Run it as part of the full regression suite to ensure error handling hasn't regressed after code changes. |
| TC_LOGIN_003 | Login with invalid password | **Full Regression** | Same reasoning as TC_LOGIN_002. It validates a specific error message and path. Not a smoke-level concern, but must be caught by regression before release. |
| TC_LOGIN_004 | Login with empty username | **Full Regression** | Edge-case empty-field behaviour. Important for correctness, but not a build-viability question. Belongs in full regression — it would typically be run when the login form is modified. |
| TC_LOGIN_005 | Login with empty password | **Full Regression** | Same reasoning as TC_LOGIN_004. Part of the thorough empty-input battery. Run in full regression. |
| TC_LOGIN_006 | Login with both fields empty | **Full Regression** | A combination edge case. Important for completeness but lowest business risk in the empty-input group. Belongs in full regression. |
| TC_LOGIN_007 | Password field masks input | **Sanity** | A security/UI property check. Run this as a sanity test specifically after any front-end change to the login form (e.g., a UI redesign or an input component library upgrade) to verify `type="password"` wasn't accidentally removed. Not a daily smoke check. |
| TC_LOGIN_008 | SQL injection attempt | **Full Regression** | A security regression check. Critically important before any release — if backend validation changes, this test catches a major vulnerability. However, it's not a "is the build alive?" check, so it doesn't belong in smoke. |
| TC_LOGIN_009 | Case sensitivity of username | **Full Regression** | A correctness edge case for authentication rules. Important for regression (especially if an auth library is upgraded or username-handling logic changes) but too narrow for smoke. |
| TC_LOGIN_010 | Logout after successful login | **Smoke** | Session termination is as critical as login itself. If a user cannot log out, it's a security and UX blocker. Logout belongs in the smoke suite as the second must-pass gate for the authentication journey. |

---

## Part 2 — New Regression Test Cases

These 5 test cases extend coverage to other pages of the-internet.herokuapp.com and sit at the **Full Regression** level — they are important correctness checks but not build-gate checks.

---

### TC_REG_001 — Dropdown: Default State Has No Option Pre-Selected

| Field | Value |
|-------|-------|
| **Page** | https://the-internet.herokuapp.com/dropdown |
| **Category** | Full Regression |
| **Priority** | Medium |

**Steps:**
```
1. Navigate to https://the-internet.herokuapp.com/dropdown
2. Observe the dropdown without interacting with it.
3. Inspect the currently displayed value in the dropdown control.
```

**Expected Result:**
The dropdown shows the placeholder text "Select Option" as the default. Neither "Option 1" nor "Option 2" is pre-selected. The default option has no real value (its `value` attribute is an empty string ""), confirming it is a placeholder, not a valid selection.

**Why this matters:** A pre-selected value could cause users to unknowingly submit an unintended choice (especially in forms tied to business logic like pricing tiers or role assignment). This test protects against a developer accidentally adding a `selected` attribute to a non-placeholder option after a UI change.

---

### TC_REG_002 — Checkboxes: Initial State Matches Specification

| Field | Value |
|-------|-------|
| **Page** | https://the-internet.herokuapp.com/checkboxes |
| **Category** | Full Regression |
| **Priority** | Medium |

**Steps:**
```
1. Navigate to https://the-internet.herokuapp.com/checkboxes
2. Observe the initial checked/unchecked state of Checkbox 1 and Checkbox 2 before any interaction.
3. Compare observed state to the specification.
```

**Expected Result:**
Checkbox 1 is **unchecked** by default. Checkbox 2 is **checked** by default. This initial state persists on page refresh (it is not driven by session state, just the HTML default attributes).

**Why this matters:** Default state regression is a common subtle bug — a developer may accidentally swap the `checked` attribute during a refactor. This test catches the regression immediately.

---

### TC_REG_003 — Checkboxes: Clicking Each Checkbox Toggles Its State

| Field | Value |
|-------|-------|
| **Page** | https://the-internet.herokuapp.com/checkboxes |
| **Category** | Full Regression |
| **Priority** | Medium |

**Steps:**
```
1. Navigate to https://the-internet.herokuapp.com/checkboxes
2. Click Checkbox 1 (initially unchecked).
3. Verify Checkbox 1 is now checked.
4. Click Checkbox 1 again.
5. Verify Checkbox 1 is now unchecked again.
6. Click Checkbox 2 (initially checked).
7. Verify Checkbox 2 is now unchecked.
```

**Expected Result:**
Each checkbox toggles independently. Clicking an unchecked checkbox makes it checked. Clicking a checked checkbox makes it unchecked. Interacting with one checkbox does not affect the other.

**Why this matters:** Validates the independence of checkbox controls — a common JS event-listener bug can cause one checkbox's click handler to accidentally affect sibling elements.

---

### TC_REG_004 — Dynamic Content: Page Refreshes With New Content

| Field | Value |
|-------|-------|
| **Page** | https://the-internet.herokuapp.com/dynamic_content |
| **Category** | Full Regression |
| **Priority** | Low |

**Steps:**
```
1. Navigate to https://the-internet.herokuapp.com/dynamic_content
2. Note the text content and avatar images in all three rows.
3. Press F5 / CMD+R to refresh the page.
4. Compare the new content against the content noted in step 2.
```

**Expected Result:**
After refresh, at least some content (text descriptions and/or avatar images) changes in the three content rows. The page structure (3 rows, an image column, and a text column per row) remains consistent. No JavaScript errors are thrown. No broken image icons appear.

**Why this matters:** This test validates that the dynamic content mechanism works correctly. A regression here might manifest as all rows showing the same content, content never changing, or images 404-ing after a CDN/asset path change.

---

### TC_REG_005 — File Upload: Uploading a Valid File Displays the Filename

| Field | Value |
|-------|-------|
| **Page** | https://the-internet.herokuapp.com/upload |
| **Category** | Full Regression |
| **Priority** | High |

**Steps:**
```
1. Navigate to https://the-internet.herokuapp.com/upload
2. Click the "Choose File" button.
3. In the file picker dialog, select a small valid file (e.g., a .txt or .png file ≤ 1KB).
4. Click the "Upload" button.
5. Observe the result page.
```

**Test Data:** Any small local file, e.g. `test-upload.txt` (contents: "QA upload test")

**Expected Result:**
The page transitions to a confirmation page with the heading "File Uploaded!" The filename (e.g., `test-upload.txt`) is displayed below the heading under a "File Uploaded!" label. No server error occurs.

**Why this matters:** File upload is a high-risk feature that frequently breaks across browser versions, OS file system permission changes, or server-side multipart form handling updates. This is a High-priority regression test that should be run before every release.

---

## Regression Suite Summary

| Category | Test Count | Test IDs | Estimated Execution Time |
|----------|-----------|----------|--------------------------|
| Smoke | 2 | TC_LOGIN_001, TC_LOGIN_010 | ~3 min |
| Sanity | 1 | TC_LOGIN_007 | ~1 min |
| Full Regression | 12 | TC_LOGIN_002–006, TC_LOGIN_008–009, TC_REG_001–005 | ~20 min |
| **TOTAL** | **15** | | **~24 min** |

---

## Reflection

**What criteria did I use to decide Smoke vs Regression?**

The key question for Smoke is: *"If this fails, is the entire build worthless?"* Only two login tests meet that bar — TC_LOGIN_001 (can users log in?) and TC_LOGIN_010 (can users log out?). Everything else is correctness validation that belongs in the full regression suite, because even if an error message is wrong, users can still get their core job done.

Sanity sits between the two. TC_LOGIN_007 (password masking) is not a daily smoke check, but it IS something you'd specifically sanity-check after any CSS or input-component change — because it's easy to accidentally break `type="password"` during UI refactoring and it's a direct security regression.

**What would happen if you ran the full regression suite on every build?**

In a manual testing context, running all 15 tests on every build would add ~24 minutes of testing time to every deployment cycle. If you deploy multiple times a day, that's 1–2+ hours of manual testing overhead daily. Teams would either slow down their deployment cadence or QA would become a bottleneck. This is exactly why **smoke tests exist as a fast gate** — they answer "is it worth testing at all?" in 3 minutes, and the full suite is reserved for pre-release validation. In an automated pipeline, this cost collapses to seconds, which is why automation is so valuable.
