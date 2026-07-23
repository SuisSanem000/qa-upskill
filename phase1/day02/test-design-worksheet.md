# Day 2 — Test Design Worksheet (Completed)
# Techniques: Equivalence Partitioning, BVA, Decision Tables, State Transitions
# Session date: 2026-07-21

---

## Section A — Equivalence Partitioning: Password Field

**Rules:** Password must be between 8 and 50 characters.

### Step 1: Partitions

| Partition ID | Description | Value Range | Representative Value | Expected Result |
|---|---|---|---|---|
| EP-P-01 | Below minimum length | < 8 chars | `pass` (4 chars) | ❌ Error — "Password too short" |
| EP-P-02 | Valid length | 8–50 chars | `Secure99!` (9 chars) | ✅ Accepted |
| EP-P-03 | Above maximum length | > 50 chars | 51-char string (see below) | ❌ Error — "Password too long" |
| EP-P-04 | Empty string | 0 chars | `` (empty) | ❌ Error — "Password required" |
| EP-P-05 | Special characters only | e.g. `!@#$%^&*` | `!@#$%^&*` (8 chars) | ✅ Accepted (valid length, no char restriction) |

**Representative values for EP-P-03:**
```
aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVw  ← 51 characters
```

### Step 2: Reasoning

EP tells us we have **5 distinct partitions** for the password field. Within each partition, the app behaves identically for any value — `pass` (4 chars) and `p` (1 char) both hit the same error path. Instead of testing 50 different short passwords, we test one representative. This reduces the theoretical test space from infinite inputs to **5 test cases** — one per partition — while still covering all behavioural paths.

The key distinction is **valid vs invalid** partitions:
- **Valid:** EP-P-02 and EP-P-05 (both produce successful validation)
- **Invalid:** EP-P-01, EP-P-03, EP-P-04 (all produce errors, but each for a different reason)

Note: EP-P-05 is interesting — special characters are valid because the only constraint is *length*, not *character type*. If the app rejects `!@#$%^&*`, that would be a defect (undocumented constraint).

---

## Section B — Boundary Value Analysis: Username Length Field

**Rules:** Username must be between 3 and 20 characters long.

### BVA Table

| BVA Point | Value (# of chars) | Actual String Example | Expected Result | Actual Result |
|---|---|---|---|---|
| Below minimum | 2 | `ab` | ❌ Invalid — too short | The Herokuapp login has no length validation UI — it submits and returns "invalid username". The field itself has no `minlength` attribute. |
| Minimum (min) | 3 | `abc` | ✅ Valid length | Submits. Backend checks username against known users, not length. |
| Just above min | 4 | `abcd` | ✅ Valid length | Submits normally. |
| Just below max | 19 | `abcdefghijklmnopqrs` | ✅ Valid length | Submits normally. |
| Maximum (max) | 20 | `abcdefghijklmnopqrst` | ✅ Valid length | Submits normally. |
| Above maximum | 21 | `abcdefghijklmnopqrstu` | ❌ Invalid — too long | Browser allows typing past 20 chars. No `maxlength` attribute on the field. Over-length input submits and gets a generic "Your username is invalid!" — the app doesn't distinguish between "too long" and "wrong user". |

### Observations

The Herokuapp login is a **practice demo** — it has intentionally minimal validation to allow testers to explore. Real-world findings from this exercise:

- **No `minlength` or `maxlength` HTML attributes** — a gap in client-side validation. BVA on a real production app would expect these.
- **Server-side error message is generic** — "Your username is invalid!" covers all failure modes (wrong name, too short, too long). This is actually **good security practice** (prevents enumeration attacks) but bad UX.
- **The most critical BVA boundaries to test in a real app:** `min-1`, `min`, `max`, `max+1` — these four catch the most off-by-one bugs in validation logic.

---

## Section C — Decision Table: Login with "Remember Me" Checkbox

> The Herokuapp login doesn't have "Remember Me" — this is a designed hypothetical feature.

**Conditions:**
- C1: Username is valid (Y/N)
- C2: Password is valid (Y/N)
- C3: "Remember Me" is checked (Y/N)

**Actions:**
- A1: Login succeeds
- A2: Session cookie is persistent (expires in 30 days)
- A3: Session cookie is session-only (expires on browser close)
- A4: Error message shown

### Decision Table (Full — 8 Rules)

| Condition / Action | Rule 1 | Rule 2 | Rule 3 | Rule 4 | Rule 5 | Rule 6 | Rule 7 | Rule 8 |
|---|---|---|---|---|---|---|---|---|
| **C1: Username valid?** | Y | Y | Y | Y | N | N | N | N |
| **C2: Password valid?** | Y | Y | N | N | Y | Y | N | N |
| **C3: Remember Me?** | Y | N | Y | N | Y | N | Y | N |
| **A1: Login succeeds?** | ✅ Yes | ✅ Yes | ❌ No | ❌ No | ❌ No | ❌ No | ❌ No | ❌ No |
| **A2: Persistent cookie?** | ✅ Yes | ❌ No | ❌ No | ❌ No | ❌ No | ❌ No | ❌ No | ❌ No |
| **A3: Session cookie?** | ❌ No | ✅ Yes | ❌ No | ❌ No | ❌ No | ❌ No | ❌ No | ❌ No |
| **A4: Error shown?** | ❌ No | ❌ No | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |

**Error messages by rule:**
- Rule 3 & 4: "Your password is invalid!" (valid username, bad password)
- Rule 5 & 6: "Your username is invalid!" (bad username, any password)
- Rule 7 & 8: "Your username is invalid!" (both invalid — username checked first)

### Collapsed Table

Rules 3–8 all produce the same top-level outcome (login fails, error shown). The only variation is the *error message text*, and Rules 3&4, 5&6&7&8 group naturally. Collapsed:

| Condition / Action | Rule A (R1) | Rule B (R2) | Rule C (R3+R4) | Rule D (R5+R6+R7+R8) |
|---|---|---|---|---|
| **Username valid?** | Y | Y | Y | N (any) |
| **Password valid?** | Y | Y | N | — |
| **Remember Me?** | Y | N | — | — |
| **Login succeeds?** | ✅ | ✅ | ❌ | ❌ |
| **Persistent cookie?** | ✅ | ❌ | ❌ | ❌ |
| **Session cookie?** | ❌ | ✅ | ❌ | ❌ |
| **Error shown?** | ❌ | ❌ | "Invalid password" | "Invalid username" |

**Result: 8 rules → 4 effective test cases.** C3 (Remember Me) only matters when login succeeds — it's irrelevant for failure rules, halving the table.

---

## Section D — State Transition Diagram: Login Flow

### States

| State ID | State Name | Description |
|---|---|---|
| S1 | **Logged Out** | User is not logged in; login form is available |
| S2 | **Error State** | Login form has been submitted with invalid credentials |
| S3 | **Logged In** | User is authenticated; on `/secure` |
| S4 | **Timed Out** | Session has expired; user must re-authenticate |

### Transition Table

| From State | Event / Trigger | To State | Action / Output |
|---|---|---|---|
| S1 | Submit valid username + password | S3 | Redirect to `/secure`; green flash "You logged into a secure area!" |
| S1 | Submit invalid username or password | S2 | Stay on `/login`; red flash error message |
| S2 | Dismiss error / modify fields and resubmit valid creds | S3 | Redirect to `/secure` |
| S2 | Resubmit with still-invalid creds | S2 | Stay in S2; flash updates with new error |
| S3 | Click "Logout" button | S1 | Redirect to `/login`; green flash "You logged out of the secure area!" |
| S3 | Session timeout (e.g. 30 min idle) | S4 | Session cookie invalidated; server rejects subsequent requests |
| S4 | User submits valid credentials again | S3 | Re-authenticated; back to `/secure` |
| S4 | User navigates away or closes browser | S1 | Session cleared; fresh state |

### ASCII State Diagram

```
                    ┌──────────────────────┐
                    │                      │
             ┌──────▼──────┐         ┌─────▼──────┐
  START ───► │  S1: Logged │         │  S2: Error │
             │     Out     │◄────────│   State    │
             └──────┬──────┘ dismiss  └─────▲──────┘
                    │                       │
          valid     │              invalid  │
          creds     │              creds    │
                    │                       │
             ┌──────▼──────┐               │
             │  S3: Logged │ ──bad creds──►(S2)
             │     In      │
             └──────┬──────┘
                    │
            timeout │              logout
                    │         ┌─────────────┘
             ┌──────▼──────┐  │
             │  S4: Timed  │──┘ (back to S1)
             │     Out     │
             └──────┬──────┘
                    │
          valid re-auth
                    │
             ┌──────▼──────┐
             │  S3: Logged │
             │     In      │
             └─────────────┘
```

### Test Cases Derived from State Diagram

Each transition = one test case:

| TC ID | Transition | Input | Expected |
|---|---|---|---|
| ST-001 | S1 → S3 | Valid credentials | Logged in, on `/secure` |
| ST-002 | S1 → S2 | Invalid credentials | Error shown, on `/login` |
| ST-003 | S2 → S3 | Correct creds after error | Login succeeds |
| ST-004 | S2 → S2 | Wrong creds again | Error updates, stays S2 |
| ST-005 | S3 → S1 | Click Logout | Redirected to `/login` |
| ST-006 | S3 → S4 | Simulate session timeout | Request rejected, must re-login |
| ST-007 | S4 → S3 | Re-submit valid creds | Re-authenticated |

---

## Reflection

- **EP is the fastest win**: Cutting from infinite inputs to one-per-partition is the most practical daily-use skill. Every time I design tests for a form field from now on, I think in partitions first.
- **BVA exposed a real gap**: The Herokuapp has no `minlength`/`maxlength` on its fields. In a real project, documenting this missing client-side validation is a legitimate finding.
- **Decision tables are underused**: Most QAs write ad-hoc cases for multi-condition features. A decision table proves you haven't missed a combination — especially valuable for features like pricing rules, access control, and discount logic.
- **State transitions clarified my mental model**: Drawing states forced me to think about what happens on session timeout — a path I wouldn't have thought to test from a feature spec alone.
- **Hardest technique:** Decision table collapsing — knowing which rules to merge requires understanding which conditions are truly irrelevant to an outcome.
- **Most useful on the job:** EP and BVA, every single day. Decision tables for complex business rules. State transitions for any workflow.
