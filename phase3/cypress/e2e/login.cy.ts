// Day 26 — Cypress: Same Tests, Different Framework (TypeScript)
// Install: npm install --save-dev cypress
// Run: npx cypress open (interactive) OR npx cypress run (headless)
//
// This file tests the same login flow as day21-login.spec.ts in Playwright
// so you can compare the two frameworks side-by-side.

/// <reference types="cypress" />

describe('Login Page — Cypress vs. Playwright Comparison', () => {

  beforeEach(() => {
    // TODO: Navigate to the login page
    // Cypress uses cy.visit() not page.goto()
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  // ============================================================
  // TEST 1: Successful Login
  // ============================================================
  it('TC_LOGIN_001 — Successful login with valid credentials', () => {
    // TODO: Type in username field
    // Hint: cy.get('#username').type('tomsmith')
    cy.get('#username').type(/* TODO */ '');

    // TODO: Type in password field
    cy.get('#password').type(/* TODO */ '');

    // TODO: Click login button
    cy.get('button[type="submit"]').click();

    // TODO: Assert URL contains /secure
    // Hint: cy.url().should('include', '/secure')

    // TODO: Assert success message
    // Hint: cy.get('#flash').should('contain', 'You logged into a secure area')
  });

  // ============================================================
  // TEST 2: Invalid credentials
  // ============================================================
  it('TC_LOGIN_002 — Login with invalid username', () => {
    cy.get('#username').type('wronguser');
    cy.get('#password').type('anypassword');
    cy.get('button[type="submit"]').click();

    // TODO: Assert URL has NOT changed to /secure
    // Hint: cy.url().should('not.include', '/secure')

    // TODO: Assert error flash message
    // TODO: Assert it contains 'Your username is invalid!'
  });

  // ============================================================
  // TEST 3: Empty fields
  // ============================================================
  it('TC_LOGIN_003 — Login with empty credentials', () => {
    // TODO: Click login without filling any fields
    cy.get('button[type="submit"]').click();

    // TODO: Assert error is shown
  });

  // ============================================================
  // TEST 4: Logout
  // ============================================================
  it('TC_LOGIN_004 — Logout after successful login', () => {
    // Step 1: Login first
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/secure');

    // TODO: Find and click the logout button
    // TODO: Assert redirected back to /login
    // TODO: Assert logout message is shown
  });
});
