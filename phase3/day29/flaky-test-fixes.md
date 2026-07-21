# Day 29 — Flaky Test Fixes

> **Instructions:** Identify potentially flaky tests from your Playwright suite.
> Document the root cause and your fix.

---

## Flaky Test 1

**Test Name/File:** `[ TODO: e.g., NAV-004 — Dynamic loading in day22-navigation.spec.ts ]`

**Root Cause:**
```
[ TODO: Why could this test be flaky?
Example: "The test clicks 'Start' and immediately asserts the result 
text without waiting for the loading spinner to disappear. 
On slow network, the assertion runs before the content loads." ]
```

**Original Code:**
```javascript
[ TODO: Paste the flaky code snippet ]
```

**Fixed Code:**
```javascript
[ TODO: Paste your fix.
Example fix: Added await page.locator('#loading').waitFor({ state: 'hidden' });
before the assertion. ]
```

**Type of Flakiness:** `[ Timing / State / Network / Environment / Other ]`

---

## Flaky Test 2

**Test Name/File:** `[ TODO ]`

**Root Cause:**
```
[ TODO ]
```

**Original Code:**
```javascript
[ TODO ]
```

**Fixed Code:**
```javascript
[ TODO ]
```

**Type of Flakiness:** `[ Timing / State / Network / Environment / Other ]`

---

## Flaky Test 3 (Hypothetical)

Even if your tests are not flaky, design a scenario where they WOULD be:

**Hypothetical Scenario:** `[ TODO ]`

**How you would detect it:**
```
[ TODO: What metric or CI pattern reveals a flaky test?
Example: Test passes locally 10/10 but fails in CI 3/10. ]
```

**How you would fix it:**
```
[ TODO ]
```

---

## Flaky Test Prevention Checklist

For every new test I write, I will:

- [ ] `[ TODO: Criterion 1 ]`
- [ ] `[ TODO: Criterion 2 ]`
- [ ] `[ TODO: Criterion 3 ]`
- [ ] `[ TODO: Criterion 4 ]`
- [ ] `[ TODO: Criterion 5 ]`

---

## Reflection

```
[ TODO: How do flaky tests affect team velocity and trust?
Have you encountered flaky tests in your developer career? ]
```
