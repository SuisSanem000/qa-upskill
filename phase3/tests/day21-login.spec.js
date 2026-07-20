// Day 21 — First Playwright Test
// Automates the Day 1 login test cases
// Target: https://the-internet.herokuapp.com/login

const { test, expect } = require('@playwright/test');

// ============================================================
// PAGE OBJECT (simple inline — we'll extract to a class on Day 23)
// ============================================================
const LOGIN_URL = '/login';  // Relative to baseURL in playwright.config.js
const SECURE_URL = '/secure';

const VALID_USERNAME = 'tomsmith';
const VALID_PASSWORD = 'SuperSecretPassword!';

// ============================================================
// TEST SUITE
// ============================================================

test.describe('Login Page — Day 21 First Tests', () => {

    // Runs before each test — navigate to login page
    test.beforeEach(async ({ page }) => {
        await page.goto(LOGIN_URL);
    });

    // ----------------------------------------------------------
    // TC_LOGIN_001 — Successful login
    // ----------------------------------------------------------
    test('TC_LOGIN_001 — Successful login with valid credentials', async ({ page }) => {
        // TODO Step 1: Fill in the username field
        await page.fill('#username', VALID_USERNAME);

        // TODO Step 2: Fill in the password field
        await page.fill('#password', VALID_PASSWORD);

        // TODO Step 3: Click the login button
        await page.click('button[type="submit"]');

        // TODO Assertion 1: Verify URL changed to /secure
        await expect(page).toHaveURL(SECURE_URL);

        // TODO Assertion 2: Verify success flash message is visible
        // Hint: look for the element with class 'flash success'
        // TODO: Complete this assertion
        // await expect(page.locator('TODO')).toContainText('TODO');
    });

    // ----------------------------------------------------------
    // TC_LOGIN_002 — Invalid username
    // ----------------------------------------------------------
    test('TC_LOGIN_002 — Login with invalid username', async ({ page }) => {
        // TODO: Fill username with invalid value
        await page.fill('#username', 'wronguser');

        // TODO: Fill password with valid value
        await page.fill('#password', /* TODO */ '');

        // TODO: Submit form
        // TODO: Assertion — URL should NOT change to /secure
        // TODO: Assertion — Error flash message should be visible
        // TODO: Assertion — Error message text should contain 'Your username is invalid!'
    });

    // ----------------------------------------------------------
    // TC_LOGIN_003 — Invalid password
    // ----------------------------------------------------------
    test('TC_LOGIN_003 — Login with invalid password', async ({ page }) => {
        // TODO: Complete this test
        // Fill username (valid), fill password (invalid), submit
        // Assert error message contains 'Your password is invalid!'
    });

    // ----------------------------------------------------------
    // TC_LOGIN_004 — Empty username
    // ----------------------------------------------------------
    test('TC_LOGIN_004 — Login with empty username', async ({ page }) => {
        // TODO: Leave username empty, fill password, submit
        // Assert: User does not navigate to /secure
    });

    // ----------------------------------------------------------
    // TC_LOGIN_010 — Logout after login
    // ----------------------------------------------------------
    test('TC_LOGIN_010 — Logout after successful login', async ({ page }) => {
        // Step 1: Login first
        await page.fill('#username', VALID_USERNAME);
        await page.fill('#password', VALID_PASSWORD);
        await page.click('button[type="submit"]');
        await expect(page).toHaveURL(SECURE_URL);

        // TODO Step 2: Find and click the logout button
        // await page.click('TODO: logout button selector');

        // TODO Assertion: Verify redirected back to /login
        // TODO Assertion: Verify logout message is visible
    });

    // ----------------------------------------------------------
    // BONUS — Your own test (write one more)
    // ----------------------------------------------------------
    test('BONUS — TODO: Write your own test', async ({ page }) => {
        // TODO: Add a test case you think is important that's not covered above
    });
});
