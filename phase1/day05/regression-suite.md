# Day 5 — Regression Suite (Completed)
# Categorized test cases from Day 1 + new additions
# Session date: 2026-08-03

> **Instructions:** Categorize the Day 1 login test cases into Smoke / Sanity / Full Regression.
> Then add 5 new test cases to the regression suite.

---

## Part 1 — Categorization of Day 1 Test Cases

For each test case, decide which bucket it belongs in and justify your decision.

| Test Case ID | Title | Category | Justification |
|---|---|---|---|
| TC_LOGIN_001 | Successful login with valid credentials | Smoke | Tests the most critical path (happy path). If this fails, the app is unusable. |
| TC_LOGIN_002 | Login with invalid username | Sanity / Regression | Narrow focus. Useful in sanity if auth service changed. Included in Full Regression. |
| TC_LOGIN_003 | Login with invalid password | Regression | Not critical for smoke. Edge case covered in full regression suite. |
| TC_LOGIN_004 | Login with empty username | Regression | Edge case handling, not critical for base build stability. |
| TC_LOGIN_005 | Login with empty password | Regression | Same as above. |
| TC_LOGIN_006 | Login with both fields empty | Regression | Validating specific error logic, belongs in full regression. |
| TC_LOGIN_007 | Password field masks input | Sanity / Regression | UI validation; run during sanity if login UI changed, otherwise full regression. |
| TC_LOGIN_008 | SQL injection attempt | Regression | Security edge case. Important but not a daily smoke blocker. |
| TC_LOGIN_009 | Case sensitivity of username | Regression | Specific boundary/edge condition test. |
| TC_LOGIN_010 | Logout after successful login | Smoke | Core critical functionality; users must be able to securely exit. |

---

## Part 2 — New Regression Test Cases

Add 5 new test cases to the regression suite covering different pages of the-internet.herokuapp.com.

### TC_REG_001 — Dropdown Option Selection

| Field | Value |
|-------|-------|
| **Page** | `/dropdown` |
| **Category** | Regression |
| **Priority** | Medium |

**Steps:**
```
1. Navigate to /dropdown
2. Click on the dropdown element.
3. Select 'Option 1'.
4. Verify 'Option 1' is selected.
```

**Expected Result:** Dropdown displays 'Option 1' as the selected value.

---

### TC_REG_002 — File Upload with Valid File

| Field | Value |
|-------|-------|
| **Page** | `/upload` |
| **Category** | Sanity / Regression |
| **Priority** | High |

**Steps:**
```
1. Navigate to /upload
2. Click 'Choose File' and select a valid small image (e.g., test.jpg).
3. Click 'Upload'.
```

**Expected Result:** A success message "File Uploaded!" is displayed with the file name.

---

### TC_REG_003 — Dynamic Loading Example 1

| Field | Value |
|-------|-------|
| **Page** | `/dynamic_loading/1` |
| **Category** | Regression |
| **Priority** | Medium |

**Steps:**
```
1. Navigate to /dynamic_loading/1
2. Click the 'Start' button.
3. Wait for the loading bar to disappear.
```

**Expected Result:** "Hello World!" text is displayed after loading completes.

---

### TC_REG_004 — Checkboxes Toggle State

| Field | Value |
|-------|-------|
| **Page** | `/checkboxes` |
| **Category** | Regression |
| **Priority** | Low |

**Steps:**
```
1. Navigate to /checkboxes
2. Verify Checkbox 1 is unchecked and Checkbox 2 is checked by default.
3. Click Checkbox 1 to check it.
4. Click Checkbox 2 to uncheck it.
```

**Expected Result:** The visual state of the checkboxes successfully toggles in response to clicks.

---

### TC_REG_005 — Context Menu Alert

| Field | Value |
|-------|-------|
| **Page** | `/context_menu` |
| **Category** | Regression |
| **Priority** | Medium |

**Steps:**
```
1. Navigate to /context_menu
2. Right-click within the dashed box.
```

**Expected Result:** A JavaScript alert appears saying "You selected a context menu".

---

## Regression Suite Summary

| Category | Test Count | Estimated Execution Time |
|----------|-----------|--------------------------|
| Smoke | 2 | 2 min |
| Sanity | 3 (approx) | 3-5 min |
| Full Regression | 15 (10 old + 5 new) | 15-20 min |

## Reflection

```
To decide between Smoke and Regression, I asked: "If this feature is broken, do we need to stop all testing?" Happy path login and logout are Smoke. Everything else is Regression (or Sanity if specifically targeted after a bug fix). 

If we ran the full regression suite manually on every build, we would bottleneck the release process immensely. Manual testers would burn out executing the exact same 15+ tests daily, which perfectly highlights why we need to automate Regression testing down the line.
```
