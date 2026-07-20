# Day 23 — Page Object Model & Form Interactions

> **Phase:** 3 — Automation
> **Duration:** 1 hour
> **Deliverable:** Completed `tests/day23-forms.spec.js`

---

## 🎯 Learning Objectives

- Implement the Page Object Model (POM) pattern
- Handle file uploads, keyboard events, drag-and-drop
- Work with iFrames and multiple browser tabs
- Understand why POM is essential for maintainable tests

---

## 📖 Concepts (15 min)

### Page Object Model (POM)

POM is a design pattern where each page of the app has a corresponding class that:
- Encapsulates all locators for that page
- Provides methods for user actions (login, fill form, click button)
- Keeps tests clean and DRY (Don't Repeat Yourself)

**Without POM** (tests break when UI changes):
```javascript
// Every test repeats these selectors
await page.fill('#username', 'user');
await page.fill('#password', 'pass');
await page.click('button[type="submit"]');
```

**With POM** (change selector in one place):
```javascript
class LoginPage {
    constructor(page) {
        this.username = page.locator('#username');
        this.password = page.locator('#password');
        this.submitBtn = page.locator('button[type="submit"]');
    }
    async login(user, pass) {
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.submitBtn.click();
    }
}
// In test:
const loginPage = new LoginPage(page);
await loginPage.login('user', 'pass');
```

### File Upload

```javascript
// Upload a real file
await page.locator('#file-upload').setInputFiles('path/to/file.txt');

// Upload from memory (no real file needed)
await page.locator('#file-upload').setInputFiles({
    name: 'test.txt',
    mimeType: 'text/plain',
    buffer: Buffer.from('file content here'),
});
```

### Multiple Windows / Tabs

```javascript
const [newPage] = await Promise.all([
    context.waitForEvent('page'),   // Wait for new tab to open
    page.click('a[target="_blank"]'), // Action that opens it
]);
await newPage.waitForLoadState();
await expect(newPage).toHaveTitle('...');
```

---

## 🛠️ Task (45 min)

Complete `tests/day23-forms.spec.js` — 6 tests covering POM, file upload, keyboard, drag-drop, windows, and iFrames.

---

## 📁 Files in This Folder

```
phase3/day23/
└── day23-guide.md  ← This file

Automation code:
phase3/tests/day23-forms.spec.js
```
