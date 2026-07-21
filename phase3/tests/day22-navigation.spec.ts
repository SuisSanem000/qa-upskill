// Day 22 — Navigation, Locators & Assertions (TypeScript)
// Target: https://the-internet.herokuapp.com
// Run: npx playwright test tests/day22-navigation.spec.ts

import { test, expect, Dialog } from '@playwright/test';

test.describe('Navigation & Locators — Day 22', () => {

  // ============================================================
  // TEST 1: Homepage Navigation
  // ============================================================
  test('NAV-001 — Homepage loads with expected title', async ({ page }) => {
    await page.goto('/');

    // TODO: Assert the page title
    // Hint: Use await expect(page).toHaveTitle(...)
    // Look at the actual title in the browser first

    // TODO: Assert that at least one link is visible on the page
    // Hint: const links = page.getByRole('link')
    //       await expect(links).toHaveCount(GreaterThan0)
  });

  // ============================================================
  // TEST 2: Dropdown Page
  // ============================================================
  test('NAV-002 — Dropdown: select Option 2', async ({ page }) => {
    await page.goto('/dropdown');

    // TODO: Locate the dropdown element
    const dropdown = page.locator('#dropdown');

    // TODO: Assert the dropdown is visible
    // await expect(dropdown).TODO

    // TODO: Select 'Option 2' from the dropdown
    // Hint: await dropdown.selectOption('2');

    // TODO: Assert the selected value is 'Option 2'
    // Hint: await expect(dropdown).toHaveValue('2');
  });

  // ============================================================
  // TEST 3: Checkboxes Page
  // ============================================================
  test('NAV-003 — Checkboxes: check and uncheck', async ({ page }) => {
    await page.goto('/checkboxes');

    // TODO: Get both checkboxes
    const checkboxes = page.locator('input[type="checkbox"]');

    // TODO: Assert there are exactly 2 checkboxes
    await expect(checkboxes).toHaveCount(/* TODO */ 0);

    // TODO: Check the first checkbox (index 0) if unchecked
    const firstCheckbox = checkboxes.nth(0);
    // if (!(await firstCheckbox.isChecked())) { ... }

    // TODO: Assert first checkbox is now checked

    // TODO: Uncheck the second checkbox
    const secondCheckbox = checkboxes.nth(1);
    // TODO: Verify it becomes unchecked

    // Suppress "declared but not used" TypeScript warning until TODOs are filled in
    void firstCheckbox;
    void secondCheckbox;
  });

  // ============================================================
  // TEST 4: Dynamic Loading
  // ============================================================
  test('NAV-004 — Dynamic loading: element appears after load', async ({ page }) => {
    await page.goto('/dynamic_loading/1');

    // TODO: Click the Start button
    await page.getByRole('button', { name: 'Start' }).click();

    // TODO: Wait for the loading indicator to disappear
    // Hint: await page.locator('#loading').waitFor({ state: 'hidden' });

    // TODO: Assert that 'Hello World!' text is visible
    // Hint: await expect(page.locator('#finish')).toContainText('Hello World!');
  });

  // ============================================================
  // TEST 5: Hover Actions
  // ============================================================
  test('NAV-005 — Hover: reveal hidden element', async ({ page }) => {
    await page.goto('/hovers');

    // TODO: Hover over the first figure/user image
    // Hint: await page.locator('.figure').first().hover();

    // TODO: Assert that the caption/link appears
    // TODO: What text or element appears when you hover?
  });

  // ============================================================
  // TEST 6: Alert Handling
  // ============================================================
  test('NAV-006 — JavaScript alert: accept and verify message', async ({ page }) => {
    await page.goto('/javascript_alerts');

    // TODO: Set up dialog handler BEFORE clicking (important!)
    page.on('dialog', async (dialog: Dialog) => {
      // TODO: Verify the dialog message
      // console.log(dialog.message());
      await dialog.accept();
    });

    // TODO: Click 'Click for JS Alert' button
    // await page.getByRole('button', { name: 'Click for JS Alert' }).click();

    // TODO: Assert the result text shows 'You successfully clicked an alert'
  });

  // ============================================================
  // TEST 7: Screenshot on Assertion
  // ============================================================
  test('NAV-007 — Take screenshot of the homepage', async ({ page }) => {
    await page.goto('/');

    // Take a full-page screenshot — saved automatically on failure
    // To take manually:
    await page.screenshot({ path: 'test-results/homepage.png', fullPage: true });

    // TODO: Add at least one assertion about the page
  });
});
