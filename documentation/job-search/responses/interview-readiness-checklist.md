# Interview & Skill Readiness Checklist
*(Topics found in your JDs that are missing from your current study progress)*

This checklist isolates the exact gaps between your target jobs and the items marked `🔲 Not Started` in your `project_state.md`.

## 1. Advanced API Testing (Phase 2 Focus)
- [ ] **Postman Collections & Environments:** Can you structure a full suite of API tests using variables and environments?
- [ ] **Postman Scripting:** Writing basic JavaScript in the "Tests" tab to assert status codes (`pm.response.to.have.status(200)`) and JSON schema validation.
- [ ] **Network Analysis:** Using Charles Proxy or Chrome DevTools (Network tab) to intercept, inspect, and modify API requests/responses.

## 2. Advanced Database Verification
- [ ] **SQL for QA:** Beyond `SELECT *`. Can you use `JOIN`, `GROUP BY`, and `HAVING` to validate complex data relationships?
- [ ] **Data State Verification:** Testing how the database state changes before, during, and after an API POST/PUT request.

## 3. Light Automation Concepts (Phase 3 Focus)
- [ ] **Playwright Basics:** Setup, navigation, locators (finding elements), and basic assertions (`expect(page).toHaveTitle()`). Playwright is highly requested!
- [ ] **BDD / Cucumber:** Can you write and interpret basic Gherkin syntax (`Given`, `When`, `Then`) and explain how it ties into automated testing?
- [ ] **Cypress vs. Playwright:** Understanding the architectural differences (e.g., Cypress runs inside the browser, Playwright uses CDP) so you can speak intelligently about them in interviews.
- [ ] **Page Object Model (POM):** The standard design pattern for structuring automated tests so they are maintainable and reusable.

## 4. Web & Mobile Specifics
- [ ] **Cross-Browser Testing:** Strategies for testing across Chrome, Firefox, and Safari effectively.
- [ ] **Mobile Simulation:** Using browser DevTools to simulate mobile viewports, network throttling (3G/Offline), and user agents.
- [ ] **Web Performance:** Basic understanding of Lighthouse and Core Web Vitals (LCP, FID, CLS) from a QA perspective.

## 5. CI/CD & DevOps Basics
- [ ] **Git Workflows:** Branching, merging, and resolving conflicts (you just did this!).
- [ ] **Continuous Integration (CI):** Understanding how GitHub Actions or Jenkins triggers automated tests when a developer opens a Pull Request. You don't need to build complex pipelines, but you must know how to trigger and read the results.
