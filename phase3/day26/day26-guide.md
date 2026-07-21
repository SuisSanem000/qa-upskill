# Day 26 — Cypress Overview & Comparison with Playwright

> **Phase:** 3 — Automation
> **Duration:** 1 hour
> **Deliverable:** `cypress/e2e/login.cy.ts` completed + `comparison.md`

---

## 🎯 Learning Objectives

- Install and set up Cypress
- Write the same login tests in Cypress syntax
- Compare Cypress and Playwright architectures
- Know which to choose for different situations

---

## 📖 Concepts (15 min)

### Cypress Architecture

Cypress runs **inside the browser** (not via WebDriver like Selenium). This gives it:
- Direct access to the DOM, network requests, and app state
- Automatic waiting (similar to Playwright)
- Built-in time travel debugging
- Automatic screenshots on failure

```bash
# Install Cypress
npm install --save-dev cypress

# Open interactive GUI
npx cypress open

# Run headless (CI)
npx cypress run
```

### Cypress Syntax Cheatsheet

```javascript
// Navigation
cy.visit('/page')
cy.go('back')
cy.reload()

// Finding elements
cy.get('#id')
cy.get('.class')
cy.contains('text')
cy.get('[data-cy="test-id"]')  // Recommended pattern

// Actions
cy.get('#input').type('value')
cy.get('button').click()
cy.get('select').select('Option 2')
cy.get('#checkbox').check()

// Assertions
cy.url().should('include', '/login')
cy.get('#flash').should('be.visible')
cy.get('#flash').should('contain', 'success')
cy.get('#list').should('have.length', 5)

// Waiting (automatic, but you can be explicit)
cy.wait(1000)  // Only when necessary
```

### Playwright vs. Cypress: The Full Comparison

| Feature | Playwright | Cypress |
|---------|-----------|---------|
| Browser support | Chrome, FF, Safari | Chrome, FF, Edge (no Safari) |
| Language | JS, TS, Python, Java, C# | JS, TS only |
| Architecture | External (WebDriver-style) | In-browser |
| Same-origin policy | No restriction | Cannot test multiple origins |
| API testing | First-class built-in | Limited |
| Parallel execution | Free (out of box) | Requires Cypress Cloud (paid) |
| Network mocking | `route.fulfill()` | `cy.intercept()` |
| Mobile testing | Full emulation | Limited |
| Community | Growing fast | Very large, established |
| Dashboard/Reports | HTML, JUnit, etc. | Cypress Cloud (commercial) |

### When to Choose Each

**Choose Playwright when:**
- You need Safari/WebKit testing
- You need API + UI tests in one framework
- You're testing multi-origin scenarios
- You need free parallel execution
- Python/Java/C# is preferred

**Choose Cypress when:**
- Team loves the interactive GUI/DevTools
- Debugging time-travel is important
- Large existing Cypress codebase
- JS/TS only is fine

---

## 🛠️ Task (40 min)

**Step 1:** Install Cypress
```bash
npm install --save-dev cypress
npx cypress open  # Opens GUI, auto-generates example tests
```

**Step 2:** Complete `cypress/e2e/login.cy.ts`

**Step 3:** Complete `comparison.md` — your personal take after using both

---

## 📁 Files in This Folder

```
phase3/day26/
├── day26-guide.md   ← This file
└── comparison.md    ← Your comparison writeup

Cypress code:
phase3/cypress/e2e/login.cy.ts
phase3/cypress.config.js
```
