// Day 23 — Form Interactions, File Upload & Page Objects
// Target: https://the-internet.herokuapp.com
// Run: npx playwright test tests/day23-forms.spec.js

const { test, expect } = require('@playwright/test');

// ============================================================
// PAGE OBJECT — LoginPage
// This is the Page Object Model (POM) pattern
// Group all page-specific locators and actions in one class
// ============================================================
class LoginPage {
    constructor(page) {
        this.page = page;
        // TODO: Define locators as class properties
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('button[type="submit"]');
        this.flashMessage = page.locator('#flash');
        // TODO: Add more locators as needed
    }

    async navigate() {
        await this.page.goto('/login');
    }

    async login(username, password) {
        // TODO: Implement the login action using this class's locators
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async getFlashMessage() {
        // TODO: Return the text of the flash message
        return this.flashMessage.textContent();
    }
}

// ============================================================
// TEST SUITE
// ============================================================
test.describe('Form Interactions & File Upload — Day 23', () => {

    // ============================================================
    // TEST 1: Using Page Object for Login
    // ============================================================
    test('POM-001 — Login using Page Object Model', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();

        // TODO: Call loginPage.login() with valid credentials
        // await loginPage.login(TODO, TODO);

        // TODO: Assert successful login
        await expect(page).toHaveURL('/secure');

        // TODO: Use loginPage.getFlashMessage() to assert the message content
    });

    // ============================================================
    // TEST 2: File Upload
    // ============================================================
    test('FORM-001 — Upload a text file', async ({ page }) => {
        await page.goto('/upload');

        // TODO: Create a test file to upload
        // Playwright can upload files using setInputFiles
        // await page.locator('#file-upload').setInputFiles({
        //     name: 'test-file.txt',
        //     mimeType: 'text/plain',
        //     buffer: Buffer.from('Hello, this is a test file content'),
        // });

        // TODO: Click the upload button
        // await page.locator('#file-submit').click();

        // TODO: Assert the upload was successful
        // Hint: Look for 'File Uploaded!' text or the filename in the response
    });

    // ============================================================
    // TEST 3: Keyboard Interactions
    // ============================================================
    test('FORM-002 — Keyboard: type and press Enter', async ({ page }) => {
        await page.goto('/key_presses');

        // TODO: Click the input field
        // await page.locator('#target').click();

        // TODO: Press the ENTER key and verify the result
        // Hint: await page.keyboard.press('Enter');
        // Then check what appears in the result element

        // TODO: Try 3 different keys and assert the result for each
        const keysToTest = ['Tab', 'Escape', 'a'];
        for (const key of keysToTest) {
            // TODO: Click the input, press the key, check result
        }
    });

    // ============================================================
    // TEST 4: Drag and Drop
    // ============================================================
    test('FORM-003 — Drag and Drop', async ({ page }) => {
        await page.goto('/drag_and_drop');

        // TODO: Get the two draggable boxes (A and B)
        const boxA = page.locator('#column-a');
        const boxB = page.locator('#column-b');

        // TODO: Verify initial state (A is on left, B is on right)
        await expect(boxA.locator('header')).toHaveText('A');

        // TODO: Perform drag and drop
        // Hint: await boxA.dragTo(boxB);

        // TODO: Verify the boxes swapped (now B is on left, A is on right)
    });

    // ============================================================
    // TEST 5: Multiple Windows
    // ============================================================
    test('FORM-004 — Handle new browser window/tab', async ({ page, context }) => {
        await page.goto('/windows');

        // TODO: Click 'Click Here' which opens a new window
        // Hint: Use context.waitForEvent('page') to capture the new page

        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            page.getByText('Click Here').click(),
        ]);

        // TODO: Wait for the new page to load

        // TODO: Assert something about the new page
        // (it should say "New Window")
        await expect(newPage).toHaveTitle(/* TODO */ '');

        // TODO: Close the new page and verify original page is still correct
    });

    // ============================================================
    // TEST 6: iFrame Handling
    // ============================================================
    test('FORM-005 — Interact with content inside an iFrame', async ({ page }) => {
        await page.goto('/iframe');

        // TODO: Get the iframe element
        // const frame = page.frameLocator('#mce_0_ifr');

        // TODO: Type text into the iframe editor
        // Note: This is a TinyMCE editor inside an iframe
        // Hint: await frame.locator('body').fill('Hello from automated test!');

        // TODO: Assert the text was entered
    });
});
