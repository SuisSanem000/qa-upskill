# Day 24 — Playwright API Testing

> **Phase:** 3 — Automation
> **Duration:** 1 hour
> **Deliverable:** Completed `tests/day24-api.spec.js`

---

## 🎯 Learning Objectives

- Use Playwright's `request` API to test REST APIs
- Write API assertions using Playwright's `expect()`
- Combine API setup with UI tests (e.g., seed data via API, then verify in browser)
- Understand the advantages of Playwright API testing vs. Postman

---

## 📖 Concepts (15 min)

### Playwright API Testing

Playwright's `request` object lets you make HTTP calls directly in your test files — no browser needed. This is powerful for:

- **API-only tests** (faster than browser tests)
- **Test setup/teardown** (create data via API before UI test)
- **Hybrid tests** (create via API, verify in UI — or vice versa)

```javascript
const { test, expect, request } = require('@playwright/test');

test('API test', async ({ request }) => {
    const response = await request.get('https://api.example.com/users');
    expect(response.ok()).toBeTruthy();           // 2xx status
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.users).toHaveLength(10);
});
```

### Playwright vs. Postman for API Testing

| Feature | Playwright API | Postman |
|---------|---------------|---------|
| Runs in CI | Yes (built-in) | Needs Newman CLI |
| JavaScript assertions | Full Jest-like | Limited |
| Integrated with UI tests | Yes | No |
| Request chaining | JavaScript | Environment variables |
| Learning curve | Lower (same framework) | New tool |

### When to Use Each

- **Postman:** Exploratory testing, sharing with non-coders, quick spot checks
- **Playwright API:** Automated regression, CI/CD, integrated with UI test suite

---

## 🛠️ Task (45 min)

Complete `tests/day24-api.spec.js` — 7 API tests covering the full CRUD flow on Restful-Booker.

Run with:
```bash
npx playwright test tests/day24-api.spec.js --reporter=list
```

---

## 📁 Files in This Folder

```
phase3/day24/
└── day24-guide.md  ← This file

Automation code:
phase3/tests/day24-api.spec.js
```
