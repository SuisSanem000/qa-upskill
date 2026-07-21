# Day 1 — Test Cases: Login Form
# Target: https://the-internet.herokuapp.com/login
# Credentials: tomsmith / SuperSecretPassword!
# Executed: 2026-07-21

---

### TC_LOGIN_001 — Successful Login with Valid Credentials

| Field | Value |
|-------|-------|
| **Precondition** | User is on https://the-internet.herokuapp.com/login |
| **Priority** | High |

**Steps:**
1. Navigate to https://the-internet.herokuapp.com/login
2. Enter username: `tomsmith`
3. Enter password: `SuperSecretPassword!`
4. Click the "Login" button

**Test Data:** Username: `tomsmith`, Password: `SuperSecretPassword!`

**Expected Result:** User is redirected to `/secure`. A green flash message reads "You logged into a secure area!" The page title shows "Secure Area".

**Actual Result:** Redirected to `/secure`. Green flash banner appears with the text "You logged into a secure area!" Page heading reads "Secure Area". ✅

**Status:** ✅ Pass

---

### TC_LOGIN_002 — Login with Invalid Username

| Field | Value |
|-------|-------|
| **Precondition** | User is on the login page |
| **Priority** | High |

**Steps:**
1. Navigate to the login page
2. Enter username: `wronguser`
3. Enter password: `SuperSecretPassword!`
4. Click the "Login" button

**Test Data:** Username: `wronguser`, Password: `SuperSecretPassword!`

**Expected Result:** User remains on `/login`. A red flash error message appears: "Your username is invalid!"

**Actual Result:** User stays on `/login`. Red flash message appears: "Your username is invalid!" No navigation occurs. ✅

**Status:** ✅ Pass

---

### TC_LOGIN_003 — Login with Invalid Password

| Field | Value |
|-------|-------|
| **Precondition** | User is on the login page |
| **Priority** | High |

**Steps:**
1. Navigate to the login page
2. Enter username: `tomsmith`
3. Enter password: `wrongpassword`
4. Click the "Login" button

**Test Data:** Username: `tomsmith`, Password: `wrongpassword`

**Expected Result:** User remains on `/login`. Red flash error: "Your password is invalid!"

**Actual Result:** User stays on `/login`. Red flash message: "Your password is invalid!" ✅

**Status:** ✅ Pass

---

### TC_LOGIN_004 — Login with Empty Username Field

| Field | Value |
|-------|-------|
| **Precondition** | User is on the login page |
| **Priority** | High |

**Steps:**
1. Navigate to the login page
2. Leave username field blank
3. Enter password: `SuperSecretPassword!`
4. Click the "Login" button

**Test Data:** Username: _(empty)_, Password: `SuperSecretPassword!`

**Expected Result:** Form submission is blocked OR an error message is displayed. User does not log in.

**Actual Result:** Form submits. Red flash message: "Your username is invalid!" — the app treats a blank username as an invalid username (not a client-side HTML5 validation). User stays on `/login`. ✅

**Status:** ✅ Pass

**Note for interview:** This is an interesting finding — the app has no `required` attribute on the username field, so the browser does NOT block submission. Validation happens server-side. Worth flagging in a UX review: adding `required` would give faster feedback to the user.

---

### TC_LOGIN_005 — Login with Empty Password Field

| Field | Value |
|-------|-------|
| **Precondition** | User is on the login page |
| **Priority** | High |

**Steps:**
1. Navigate to the login page
2. Enter username: `tomsmith`
3. Leave password field blank
4. Click the "Login" button

**Test Data:** Username: `tomsmith`, Password: _(empty)_

**Expected Result:** Error message displayed. User does not log in.

**Actual Result:** Red flash message: "Your password is invalid!" User stays on `/login`. No browser-native validation triggered. ✅

**Status:** ✅ Pass

---

### TC_LOGIN_006 — Login with Both Fields Empty

| Field | Value |
|-------|-------|
| **Precondition** | User is on the login page |
| **Priority** | Medium |

**Steps:**
1. Navigate to the login page
2. Leave both username and password fields blank
3. Click the "Login" button

**Test Data:** Username: _(empty)_, Password: _(empty)_

**Expected Result:** Error message is displayed. User does not log in.

**Actual Result:** Red flash message: "Your username is invalid!" — the app checks username first, so the password field is never evaluated. User stays on `/login`. ✅

**Status:** ✅ Pass

**Note:** The error message sequence reveals validation order — username is checked before password. This is common but worth documenting.

---

### TC_LOGIN_007 — Password Field Masks Input

| Field | Value |
|-------|-------|
| **Precondition** | User is on the login page |
| **Priority** | Medium |

**Steps:**
1. Navigate to the login page
2. Click the password field
3. Type any characters (e.g., `TestPassword123`)
4. Observe the field display

**Test Data:** `TestPassword123`

**Expected Result:** Characters appear as dots (•••) or asterisks, not as readable text. Field `type` attribute should be `password`.

**Actual Result:** Input is masked with dots. Inspecting the HTML confirms `<input type="password">`. Characters are not visible in plain text. ✅

**Status:** ✅ Pass

---

### TC_LOGIN_008 — SQL Injection Attempt in Username Field

| Field | Value |
|-------|-------|
| **Precondition** | User is on the login page |
| **Priority** | High |

**Steps:**
1. Navigate to the login page
2. Enter username: `' OR '1'='1`
3. Enter password: `anything`
4. Click the "Login" button

**Test Data:** Username: `' OR '1'='1`, Password: `anything`

**Expected Result:** Login fails. No SQL error message is exposed. Application handles the input gracefully.

**Actual Result:** Red flash: "Your username is invalid!" No database error details are shown. The app correctly rejects the input without exposing any backend information. ✅

**Status:** ✅ Pass

**Security Note:** This is a basic sanity check — the site is a demo app designed to be tested, so the backend is already hardened. In a real project, you would also check for: XSS (script injection), CSRF tokens, rate limiting, and account lockout after failed attempts.

---

### TC_LOGIN_009 — Case Sensitivity of Username

| Field | Value |
|-------|-------|
| **Precondition** | User is on the login page |
| **Priority** | Medium |

**Steps:**
1. Navigate to the login page
2. Enter username: `TomSmith` (capitalised first letters)
3. Enter password: `SuperSecretPassword!`
4. Click the "Login" button

**Test Data:** Username: `TomSmith`, Password: `SuperSecretPassword!`

**Expected Result:** Login fails — usernames are case-sensitive.

**Actual Result:** Red flash: "Your username is invalid!" — confirms usernames are case-sensitive. `tomsmith` works; `TomSmith` does not. ✅

**Status:** ✅ Pass

**Note:** Also test `TOMSMITH` (all caps) and `toMsMiTh` (mixed) to be thorough. All should fail.

---

### TC_LOGIN_010 — Logout After Successful Login

| Field | Value |
|-------|-------|
| **Precondition** | User has successfully logged in (TC_LOGIN_001 passed). Currently on `/secure`. |
| **Priority** | High |

**Steps:**
1. Verify the current URL is `/secure`
2. Locate the "Logout" button on the page
3. Click the "Logout" button

**Test Data:** N/A

**Expected Result:** User is redirected to `/login`. A flash message reads "You logged out of the secure area!"

**Actual Result:** Clicking "Logout" redirects to `/login`. Green flash appears: "You logged out of the secure area!" ✅

**Status:** ✅ Pass

---

## Test Execution Summary

| TC ID | Title | Priority | Status |
|-------|-------|----------|--------|
| TC_LOGIN_001 | Valid login | High | ✅ Pass |
| TC_LOGIN_002 | Invalid username | High | ✅ Pass |
| TC_LOGIN_003 | Invalid password | High | ✅ Pass |
| TC_LOGIN_004 | Empty username | High | ✅ Pass |
| TC_LOGIN_005 | Empty password | High | ✅ Pass |
| TC_LOGIN_006 | Both fields empty | Medium | ✅ Pass |
| TC_LOGIN_007 | Password masking | Medium | ✅ Pass |
| TC_LOGIN_008 | SQL injection | High | ✅ Pass |
| TC_LOGIN_009 | Case sensitivity | Medium | ✅ Pass |
| TC_LOGIN_010 | Logout | High | ✅ Pass |

**Pass Rate:** 10/10 (100%)  
**Defects Found:** 0 functional defects. 1 UX observation (no HTML5 `required` attribute on fields — TC_LOGIN_004 note).
