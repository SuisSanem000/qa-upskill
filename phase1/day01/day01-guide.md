# Day 1 — QA Foundations & Test Case Writing

> **Phase:** 1 — Manual QA  
> **Duration:** 1 hour  
> **Target App:** https://the-internet.herokuapp.com/login  
> **Deliverable:** 10 formal test cases for a login form

---

## 🎯 Learning Objectives

By the end of this session you will be able to:
- Define what QA is vs. QC vs. Testing
- Explain the Software Testing Life Cycle (STLC)
- Write structured test cases using standard templates
- Distinguish between positive, negative, and edge-case tests

---

## 📖 Concepts (15 min)

### What is QA?
Quality Assurance is a **process-oriented** activity focused on preventing defects by improving the development process itself. It is not just "finding bugs" — it is building quality in from the start.

| Term | Focus | Who Does It |
|------|-------|-------------|
| **QA** (Quality Assurance) | Process improvement | QA Engineers |
| **QC** (Quality Control) | Product inspection | Testers/QA Analysts |
| **Testing** | Executing tests | QA Analysts / Devs |

### The Software Testing Life Cycle (STLC)
```
Requirement Analysis
       ↓
Test Planning
       ↓
Test Case Development  ← YOU ARE HERE (Day 1)
       ↓
Test Environment Setup
       ↓
Test Execution
       ↓
Test Cycle Closure
```

### Test Case Anatomy
Every well-written test case has these fields:

| Field | Description |
|-------|-------------|
| **Test Case ID** | Unique identifier (e.g., TC_LOGIN_001) |
| **Title** | Short description of what is being tested |
| **Preconditions** | What must be true before the test runs |
| **Test Steps** | Numbered, atomic actions |
| **Test Data** | Specific inputs used |
| **Expected Result** | What *should* happen |
| **Actual Result** | What *did* happen (filled during execution) |
| **Status** | Pass / Fail / Blocked / Skipped |
| **Priority** | High / Medium / Low |

### Test Case Types
- **Positive Tests** — Happy path; valid data, expected flow
- **Negative Tests** — Invalid data, error handling
- **Edge Cases** — Boundary values, empty inputs, max-length strings
- **UI/UX Tests** — Labels, placeholders, focus states, error messages

---

## 🛠️ Task (40 min) — Write 10 Test Cases

**Target:** https://the-internet.herokuapp.com/login

Open the URL in your browser. Inspect the login form. Then fill in the test case template below for each scenario.

**Credentials (for reference):**
- Valid: `tomsmith` / `SuperSecretPassword!`
- Invalid: anything else

### Test Case Template

```markdown
### TC_LOGIN_XXX — [Title]

| Field | Value |
|-------|-------|
| **Precondition** | User is on the login page |
| **Priority** | High / Medium / Low |

**Steps:**
1. 
2. 
3. 

**Test Data:** 

**Expected Result:** 

**Actual Result:** _(fill during execution)_

**Status:** Pass / Fail / Blocked
```

---

## ✅ Your 10 Test Cases

Copy this file to `phase1/day01/test-cases.md` and complete each one.

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

**Expected Result:** User is redirected to `/secure`. A green success flash message reads "You logged into a secure area!" The page title shows "Secure Area".

**Actual Result:** _(fill during execution)_

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

**Expected Result:** User remains on `/login`. A red flash error message appears: "Your username is invalid!"

**Actual Result:** _(fill during execution)_

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

**Expected Result:** User remains on `/login`. A red flash error message appears: "Your password is invalid!"

**Actual Result:** _(fill during execution)_

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

**Expected Result:** Form submission is blocked OR an error is displayed. User does not log in.

**Actual Result:** _(fill during execution)_

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

**Expected Result:** Form submission is blocked OR an error is displayed. User does not log in.

**Actual Result:** _(fill during execution)_

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

**Expected Result:** Error message is displayed. User does not log in.

**Actual Result:** _(fill during execution)_

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

**Expected Result:** Characters typed in the password field appear as bullet points (•••) or asterisks, not as plain text.

**Actual Result:** _(fill during execution)_

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

**Expected Result:** Login fails. No SQL error is exposed in the UI. Application handles the input gracefully.

**Actual Result:** _(fill during execution)_

**Status:** 

---

### TC_LOGIN_009 — Case Sensitivity of Username

| Field | Value |
|-------|-------|
| **Precondition** | User is on the login page |
| **Priority** | Medium |

**Steps:**
1. Navigate to the login page
2. Enter username: `TomSmith` (different case)
3. Enter password: `SuperSecretPassword!`
4. Click the "Login" button

**Test Data:** Username: `TomSmith`, Password: `SuperSecretPassword!`

**Expected Result:** Login fails. Error message is displayed indicating invalid credentials.

**Actual Result:** _(fill during execution)_

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

**Expected Result:** User is redirected back to `/login`. A flash message appears: "You logged out of the secure area!"

**Actual Result:** _(fill during execution)_

**Status:** 

---

## 🎤 Interview Prep Questions (5 min)

Study these. You should be able to answer them confidently out loud.

### Q1: What is the difference between a test case and a test scenario?
**A:** A **test scenario** is a high-level description of what to test (e.g., "Test the login functionality"). A **test case** is a detailed, step-by-step procedure with specific inputs and expected results. One scenario can generate multiple test cases.

### Q2: What is the difference between Verification and Validation?
**A:**
- **Verification** = "Are we building the product *right*?" (checking against specs — reviews, walkthroughs)
- **Validation** = "Are we building the *right* product?" (checking against user needs — actual testing)

### Q3: What are the different types of testing?
**A:** Functional (unit, integration, system, acceptance), Non-functional (performance, security, usability, reliability), structural (white-box), and change-related (regression, smoke, sanity).

### Q4: What is a test plan vs. a test strategy?
**A:**
- **Test Strategy** = High-level, organization-wide document describing the *overall approach* to testing (tools, methodologies, responsibilities).
- **Test Plan** = Project-specific document covering scope, objectives, schedule, resources, and risks for a *specific project*.

### Q5: What makes a good test case?
**A:** A good test case is: **Atomic** (tests one thing), **Repeatable** (same steps = same result), **Clear** (unambiguous steps), **Traceable** (linked to a requirement), and **Independent** (doesn't depend on other tests).

---

## 📁 Files to Create Today

```
qa-upskill/
└── phase1/
    └── day01/
        ├── test-cases.md   ← Copy and complete the 10 test cases above
        └── notes.md        ← Your personal learnings and observations
```

---

## 🔗 Resources

- [ISTQB Glossary](https://glossary.istqb.org/)
- [The Internet Herokuapp](https://the-internet.herokuapp.com)
- [How to Write Good Test Cases — Guru99](https://www.guru99.com/test-case.html)
