// Day 25 — Step Definitions for Login Feature (TypeScript)
// Framework: @cucumber/cucumber + Playwright
// Connects each Gherkin step to executable Playwright code
// Run: npx cucumber-js features/**/*.feature

import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from '@playwright/test';

// ============================================================
// BROWSER & PAGE LIFECYCLE
// ============================================================
let browser: Browser;
let context: BrowserContext;
let page: Page;

const BASE_URL = 'https://the-internet.herokuapp.com';

Before(async function () {
  browser = await chromium.launch({ headless: true });
  context = await browser.newContext();
  page = await context.newPage();
});

After(async function () {
  await context.close();
  await browser.close();
});

// ============================================================
// STEP DEFINITIONS
// ============================================================

// Given I navigate to the login page
Given('I navigate to the login page', async function () {
  // TODO: Navigate to the login page using Playwright
  await page.goto(`${BASE_URL}/login`);
});

// When I enter username "..." and password "..."
When('I enter username {string} and password {string}', async function (username: string, password: string) {
  // TODO: Fill in the username field
  await page.fill('#username', username);

  // TODO: Fill in the password field
  await page.fill('#password', password);
});

// When I click the login button
When('I click the login button', async function () {
  // TODO: Click the login submit button
  await page.click('button[type="submit"]');
});

// Then I should be redirected to the secure area
Then('I should be redirected to the secure area', async function () {
  // TODO: Assert the URL contains '/secure'
  // await expect(page).toHaveURL(`${BASE_URL}/secure`);
});

// Then I should see a success message containing "..."
Then('I should see a success message containing {string}', async function (expectedText: string) {
  // TODO: Find the flash message element and assert it contains expectedText
  const flashMessage = page.locator('#flash');
  // TODO: Complete this assertion
  void flashMessage;
  void expectedText;
});

// Then I should remain on the login page
Then('I should remain on the login page', async function () {
  // TODO: Assert the URL still points to the login page
});

// Then I should see an error message containing "..."
Then('I should see an error message containing {string}', async function (expectedText: string) {
  // TODO: Assert the flash error message contains expectedText
  void expectedText;
});

// Then I should see an error message (no specific text)
Then('I should see an error message', async function () {
  // TODO: Assert that some error message is visible (any text)
  const flashMessage = page.locator('#flash');
  // TODO: Complete this assertion
  void flashMessage;
});

// Then I should see "..." (generic — for Scenario Outline)
Then('I should see {string}', async function (expectedText: string) {
  // TODO: Assert the page contains expectedText somewhere
  // This is used by the Scenario Outline — check both success and error states
  void expectedText;
});
