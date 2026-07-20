# Day 1 — Test Cases: Login Form
# Target: https://the-internet.herokuapp.com/login

> **Instructions:** Fill in `Actual Result` and `Status` as you execute each test.

---

### TC_LOGIN_001 — Successful Login with Valid Credentials

| Field | Value |
|-------|-------|
| **Precondition** | User is on https://the-internet.herokuapp.com/login |
| **Priority** | High |

**Steps:**
1. Navigate to the login page
2. Enter username: `tomsmith`
3. Enter password: `SuperSecretPassword!`
4. Click the "Login" button

**Test Data:** Username: `tomsmith`, Password: `SuperSecretPassword!`

**Expected Result:** Redirected to `/secure`. Green flash message: "You logged into a secure area!"

**Actual Result:** 

**Status:** 

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

**Expected Result:** Remains on `/login`. Red error: "Your username is invalid!"

**Actual Result:** 

**Status:** 

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

**Expected Result:** Remains on `/login`. Red error: "Your password is invalid!"

**Actual Result:** 

**Status:** 

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

**Expected Result:** Error displayed. User does not log in.

**Actual Result:** 

**Status:** 

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

**Expected Result:** Error displayed. User does not log in.

**Actual Result:** 

**Status:** 

---

### TC_LOGIN_006 — Login with Both Fields Empty

| Field | Value |
|-------|-------|
| **Precondition** | User is on the login page |
| **Priority** | Medium |

**Steps:**
1. Navigate to the login page
2. Leave both fields blank
3. Click the "Login" button

**Test Data:** Username: _(empty)_, Password: _(empty)_

**Expected Result:** Error message displayed. User does not log in.

**Actual Result:** 

**Status:** 

---

### TC_LOGIN_007 — Password Field Masks Input

| Field | Value |
|-------|-------|
| **Precondition** | User is on the login page |
| **Priority** | Medium |

**Steps:**
1. Navigate to the login page
2. Click on the password field
3. Type any characters

**Test Data:** Password: `TestPassword123`

**Expected Result:** Characters appear masked (•••), not as plain text.

**Actual Result:** 

**Status:** 

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

**Expected Result:** Login fails. No SQL error exposed in the UI.

**Actual Result:** 

**Status:** 

---

### TC_LOGIN_009 — Case Sensitivity of Username

| Field | Value |
|-------|-------|
| **Precondition** | User is on the login page |
| **Priority** | Medium |

**Steps:**
1. Navigate to the login page
2. Enter username: `TomSmith`
3. Enter password: `SuperSecretPassword!`
4. Click the "Login" button

**Test Data:** Username: `TomSmith`, Password: `SuperSecretPassword!`

**Expected Result:** Login fails. Invalid credentials error displayed.

**Actual Result:** 

**Status:** 

---

### TC_LOGIN_010 — Logout Functionality After Successful Login

| Field | Value |
|-------|-------|
| **Precondition** | User is already logged in (TC_LOGIN_001 passed) |
| **Priority** | High |

**Steps:**
1. Verify user is on the `/secure` page
2. Click the "Logout" button

**Test Data:** N/A

**Expected Result:** Redirected to `/login`. Flash message: "You logged out of the secure area!"

**Actual Result:** 

**Status:** 
