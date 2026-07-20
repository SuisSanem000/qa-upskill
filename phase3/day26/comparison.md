# Day 26 — Playwright vs. Cypress: My Personal Comparison

> **Instructions:** Fill this in after using both frameworks.

---

## Side-by-Side Syntax Comparison

| Task | Playwright | Cypress |
|------|-----------|---------|
| Navigate | `await page.goto('/login')` | `cy.visit('/login')` |
| Fill input | `await page.fill('#id', 'val')` | `cy.get('#id').type('val')` |
| Click | `await page.click('button')` | `cy.get('button').click()` |
| Assert URL | `await expect(page).toHaveURL(...)` | `cy.url().should('include', ...)` |
| Assert text | `await expect(el).toContainText(...)` | `cy.get(el).should('contain', ...)` |
| API call | `await request.get('/api')` | `cy.request('/api')` |
| Wait | Auto-waiting | Auto-waiting |
| Screenshot | Built-in on failure | Built-in on failure |

---

## My Experience

### What I liked about Playwright:
```
[ TODO: List 3-5 things ]
```

### What I liked about Cypress:
```
[ TODO: List 3-5 things ]
```

### What frustrated me about Playwright:
```
[ TODO ]
```

### What frustrated me about Cypress:
```
[ TODO ]
```

---

## Which would I recommend for my next project?

```
[ TODO: Make a recommendation and justify it based on your project context.
Consider: team skills, browser coverage, CI/CD needs, budget, 
API testing needs, multi-origin testing. ]
```
