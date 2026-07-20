# Day 2 — Test Design Techniques

> **Phase:** 1 — Manual QA
> **Duration:** 1 hour
> **Target App:** https://the-internet.herokuapp.com/login & registration flows
> **Deliverables:** Completed `test-design-worksheet.md` with EP, BVA, and Decision Table analysis

---

## 🎯 Learning Objectives

- Apply **Equivalence Partitioning (EP)** to reduce test cases without losing coverage
- Apply **Boundary Value Analysis (BVA)** to find off-by-one errors
- Build a **Decision Table** to test combinations of conditions
- Understand why these techniques matter in interviews

---

## 📖 Concepts (15 min)

### 1. Equivalence Partitioning (EP)

Instead of testing every possible input, we divide the input space into **partitions** (classes) where the software behaves the same way for any value in that class. We pick one representative from each class.

**Example — Age field (valid: 18–65):**

| Partition | Range | Representative Value | Expected |
|-----------|-------|---------------------|----------|
| Below valid | < 18 | `15` | Error |
| Valid | 18–65 | `30` | Accepted |
| Above valid | > 65 | `70` | Error |

> 💡 **Key Insight:** Instead of testing 1 to 100 (100 tests), you test 3. Same coverage.

---

### 2. Boundary Value Analysis (BVA)

Bugs love boundaries. BVA tests the **edges** of each partition — the minimum, maximum, just below, and just above.

For a field accepting values 1–100:

| Point | Value | Expected |
|-------|-------|----------|
| Just below min | 0 | Invalid |
| Min | 1 | Valid |
| Just above min | 2 | Valid |
| Just below max | 99 | Valid |
| Max | 100 | Valid |
| Just above max | 101 | Invalid |

> 💡 **Rule of thumb:** Always test `min-1, min, min+1` and `max-1, max, max+1`.

---

### 3. Decision Tables

When a feature has **multiple conditions** that each affect an **outcome**, a decision table captures every combination systematically.

**Example — Login access rules:**

| Condition / Action | Rule 1 | Rule 2 | Rule 3 | Rule 4 |
|---|---|---|---|---|
| **Username valid?** | Y | Y | N | N |
| **Password valid?** | Y | N | Y | N |
| → **Login succeeds?** | ✅ | ❌ | ❌ | ❌ |
| → **Error shown?** | No | "Invalid password" | "Invalid username" | "Invalid username" |

> Each column = one test case. The table makes sure no combination is missed.

---

### 4. State Transition Testing

Used when a system moves through **states**. Draw the states, transitions, and events.

**Login State Machine:**
```
[Logged Out] --valid credentials--> [Logged In]
[Logged Out] --invalid credentials--> [Error State] --dismiss--> [Logged Out]
[Logged In] --logout--> [Logged Out]
[Logged In] --session timeout--> [Timed Out] --re-login--> [Logged In]
```

---

## 🛠️ Task (40 min)

Open `test-design-worksheet.md` and complete all four sections:

1. **Section A:** Apply EP to the password field
2. **Section B:** Apply BVA to a username length field (min 3, max 20 chars)
3. **Section C:** Build a Decision Table for login with "Remember Me" checkbox
4. **Section D:** Draw the state transition diagram for the login flow

---

## 🎤 Interview Prep (5 min)

### Q1: What is Equivalence Partitioning and why do we use it?
**A:** EP divides input data into groups (partitions) where the software behaves identically for any value within a group. We use it to reduce the number of test cases while maintaining coverage — instead of testing every possible input, we test one representative from each partition.

### Q2: What is the difference between EP and BVA?
**A:** EP identifies *which* partitions to test; BVA identifies *which specific values* within and at the edges of those partitions. EP reduces test count; BVA ensures boundary errors are caught. BVA is an extension of EP — you always use them together.

### Q3: When would you use a Decision Table?
**A:** When a feature has multiple independent conditions that can combine in various ways to produce different outcomes. Examples: loan eligibility (income + credit score), login access (username + password + account status), discount calculation (member + purchase amount + coupon).

### Q4: What is State Transition Testing?
**A:** A technique that models a system as a finite state machine. You create test cases that cover: every valid state, every valid transition, every invalid transition, and every event. Useful for testing things like shopping carts, login sessions, and workflow systems.

### Q5: What is the 'test oracle problem'?
**A:** The test oracle is the mechanism by which you determine whether a test passed or failed. The oracle problem is when it's difficult or impossible to determine the correct expected result automatically — common in AI systems, image recognition, or complex calculations.

---

## 📁 Files in This Folder

```
phase1/day02/
├── day02-guide.md           ← This file (concepts + interview prep)
└── test-design-worksheet.md ← Your task: complete all 4 sections
```
