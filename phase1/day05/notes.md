# Day 5 — Personal Notes & Learnings
# Session date: 2026-08-03

---

## Smoke vs Sanity vs Regression

This trio of terms finally clicked today:

- **Smoke Testing:** The bare minimum. "Is the app on fire?" If login fails, there's no point testing the user profile page. Smoke tests save time by instantly rejecting broken builds. They are wide but shallow.
- **Sanity Testing:** Highly targeted. The developer fixed a bug in the dropdown? I only test the dropdown and related components. It's a localized sanity check. It's narrow and deep for a specific feature.
- **Regression Testing:** The safety net. It runs the full suite (or a large subset) to ensure that the dropdown fix didn't accidentally break the checkbox page. It's wide and deep.

## The Test Pyramid

I learned that E2E (End-to-End) UI regression tests—which is what I'm writing manually right now—are the slowest and most expensive tests in the pyramid. In a healthy Agile team, developers handle the bulk of regression via fast Unit and Integration tests. QA's manual regression should focus on high-risk, high-impact user flows.

## Why We Automate

After organizing 15 test cases in the regression suite, I immediately see the problem: doing this by hand every time a new build drops is completely unsustainable. It takes 15-20 minutes for a tiny demo app. For a real enterprise app, it would take days or weeks. This is the exact motivation for why I will transition into Playwright in Phase 3. 

Automation is meant for Regression. Manual testing is meant for Exploratory testing (which we cover tomorrow!).
