# Day 2 — Test Design Worksheet
# Techniques: Equivalence Partitioning, BVA, Decision Tables, State Transitions

> **Instructions:** Complete each section below. Replace all `[ TODO ]` markers with your analysis.
> Target app reference: https://the-internet.herokuapp.com/login

---

## Section A — Equivalence Partitioning: Password Field

**Rules:** Password must be between 8 and 50 characters.

### Step 1: Identify Partitions

| Partition ID | Description | Value Range | Representative Value | Expected Result |
|---|---|---|---|---|
| EP-P-01 | Below minimum length | < 8 chars | `[ TODO ]` | `[ TODO ]` |
| EP-P-02 | Valid length | 8–50 chars | `[ TODO ]` | `[ TODO ]` |
| EP-P-03 | Above maximum length | > 50 chars | `[ TODO ]` | `[ TODO ]` |
| EP-P-04 | Empty string | 0 chars | `[ TODO ]` | `[ TODO ]` |
| EP-P-05 | Special characters only | e.g. `!@#$%` | `[ TODO ]` | `[ TODO ]` |

### Step 2: Write your reasoning

```
[ TODO: Explain which partitions are "valid" vs "invalid" and why EP 
reduces the number of tests needed here. Write 3-4 sentences. ]
```

---

## Section B — Boundary Value Analysis: Username Length Field

**Rules:** Username must be between 3 and 20 characters long.

### BVA Table

| BVA Point | Value (# of chars) | Actual String Example | Expected Result | Actual Result |
|---|---|---|---|---|
| Below minimum | 2 | `ab` | `[ TODO ]` | |
| Minimum (min) | 3 | `abc` | `[ TODO ]` | |
| Just above min | 4 | `abcd` | `[ TODO ]` | |
| Just below max | 19 | `[ TODO - 19 char string ]` | `[ TODO ]` | |
| Maximum (max) | 20 | `[ TODO - 20 char string ]` | `[ TODO ]` | |
| Above maximum | 21 | `[ TODO - 21 char string ]` | `[ TODO ]` | |

### Your Observations

```
[ TODO: What did you notice when testing boundaries on the-internet.herokuapp.com? 
Does the app enforce username length? What happens when you exceed the limit? ]
```

---

## Section C — Decision Table: Login with "Remember Me" Checkbox

> Note: The Herokuapp login doesn't have "Remember Me", so we're designing for a hypothetical feature.

**Conditions:**
- C1: Username is valid (Y/N)
- C2: Password is valid (Y/N)
- C3: "Remember Me" is checked (Y/N)

**Actions:**
- A1: Login succeeds
- A2: Session cookie is persistent (expires in 30 days)
- A3: Session cookie is session-only
- A4: Error message shown

### Decision Table

| Condition / Action | Rule 1 | Rule 2 | Rule 3 | Rule 4 | Rule 5 | Rule 6 | Rule 7 | Rule 8 |
|---|---|---|---|---|---|---|---|---|
| **C1: Username valid?** | Y | Y | Y | Y | N | N | N | N |
| **C2: Password valid?** | Y | Y | N | N | Y | Y | N | N |
| **C3: Remember Me?** | Y | N | Y | N | Y | N | Y | N |
| **A1: Login succeeds?** | `[ TODO ]` | `[ TODO ]` | `[ TODO ]` | `[ TODO ]` | `[ TODO ]` | `[ TODO ]` | `[ TODO ]` | `[ TODO ]` |
| **A2: Persistent cookie?** | `[ TODO ]` | `[ TODO ]` | `[ TODO ]` | `[ TODO ]` | `[ TODO ]` | `[ TODO ]` | `[ TODO ]` | `[ TODO ]` |
| **A3: Session cookie?** | `[ TODO ]` | `[ TODO ]` | `[ TODO ]` | `[ TODO ]` | `[ TODO ]` | `[ TODO ]` | `[ TODO ]` | `[ TODO ]` |
| **A4: Error shown?** | `[ TODO ]` | `[ TODO ]` | `[ TODO ]` | `[ TODO ]` | `[ TODO ]` | `[ TODO ]` | `[ TODO ]` | `[ TODO ]` |

### Collapsed Table (Remove Redundant Rules)

```
[ TODO: After completing the full table above, identify which rules produce the 
same output and can be collapsed. Re-draw the simplified table here. ]
```

---

## Section D — State Transition Diagram: Login Flow

### States to Define

| State ID | State Name | Description |
|---|---|---|
| S1 | `[ TODO ]` | User is not logged in |
| S2 | `[ TODO ]` | Login form has validation error |
| S3 | `[ TODO ]` | User is authenticated and in secure area |
| S4 | `[ TODO ]` | Session has expired, user must re-authenticate |

### Transition Table

| From State | Event / Trigger | To State | Action / Output |
|---|---|---|---|
| S1 | `[ TODO ]` | S3 | Redirect to /secure |
| S1 | `[ TODO ]` | S2 | Show error message |
| S2 | `[ TODO ]` | S1 | Clear error, reset form |
| S3 | `[ TODO ]` | S1 | Redirect to /login, show logout flash |
| S3 | `[ TODO ]` | S4 | Show timeout message |
| S4 | `[ TODO ]` | S3 | Re-authenticate successfully |

### ASCII State Diagram

```
[ TODO: Draw the state diagram using ASCII art or describe it in text.
Example format:

[S1: Logged Out]
      |
      | valid creds
      ↓
[S3: Logged In]
      |
      | ...

Fill in all states and transitions. ]
```

---

## Reflection

```
[ TODO: Write 3-5 bullet points summarising what you learned today. 
Which technique was hardest? Which will you use most often on the job? ]
```
