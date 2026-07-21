# Day 22 — Playwright: Navigation, Locators & Assertions

> **Phase:** 3 — Automation
> **Duration:** 1 hour
> **Deliverable:** Completed `tests/day22-navigation.spec.ts`

---

## 🎯 Learning Objectives

- Master Playwright locator strategies (recommended order)
- Write `expect()` assertions with auto-retry
- Navigate between pages
- Use `beforeEach` / `afterEach` hooks

---

## 📖 Concepts (15 min)

### Playwright Locator Priority (Best to Worst)

```javascript
// 1. Role-based (most resilient — semantic)
page.getByRole('button', { name: 'Login' })
page.getByRole('textbox', { name: 'Username' })
page.getByRole('heading', { name: 'Secure Area' })

// 2. Test ID (add data-testid to HTML — developer + QA agree on this)
page.getByTestId('submit-button')

// 3. Text content
page.getByText('You logged into a secure area!')
page.getByLabel('Username')
page.getByPlaceholder('Username')

// 4. CSS selector (avoid for dynamic classes)
page.locator('#username')         // by ID — OK
page.locator('.flash.success')    // by class — use carefully

// 5. XPath (avoid unless necessary)
page.locator('xpath=//input[@id="username"]')
```

### Playwright Assertions (all auto-retry with timeout)

```javascript
// Page assertions
await expect(page).toHaveURL('/secure');
await expect(page).toHaveTitle('Secure Area');

// Element assertions
await expect(locator).toBeVisible();
await expect(locator).toBeHidden();
await expect(locator).toBeEnabled();
await expect(locator).toBeDisabled();
await expect(locator).toBeChecked();
await expect(locator).toContainText('success');
await expect(locator).toHaveText('Exact text');
await expect(locator).toHaveValue('input value');
await expect(locator).toHaveCount(5);
await expect(locator).toHaveAttribute('href', '/login');
```

### Page Navigation

```javascript
await page.goto('/login');             // Navigate to URL
await page.goto('https://full.url/'); // Absolute URL
await page.goBack();                   // Browser back
await page.goForward();                // Browser forward
await page.reload();                   // Refresh page
```

---

## 🛠️ Task (40 min)

Complete `tests/day22-navigation.spec.ts` — it covers navigation across multiple pages of the-internet.herokuapp.com.

---

## 📁 Files in This Folder

```
phase3/day22/
└── day22-guide.md  ← This file

Automation code:
phase3/tests/day22-navigation.spec.ts
```
