// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Playwright Configuration — QA Upskill Project
 * See: https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
    // Directory where tests are located
    testDir: './tests',

    // Run tests in files in parallel
    fullyParallel: true,

    // Fail the build on CI if you accidentally left test.only in source code
    forbidOnly: !!process.env.CI,

    // Retry failed tests — 2 times on CI, 0 locally
    retries: process.env.CI ? 2 : 0,

    // Number of workers for parallel execution
    workers: process.env.CI ? 1 : undefined,

    // Reporter to use
    reporter: [
        ['html', { open: 'never' }],  // HTML report saved to playwright-report/
        ['list'],                      // Console output
    ],

    // Global timeout per test
    timeout: 30 * 1000,  // 30 seconds

    // Shared settings for all projects below
    use: {
        // Base URL for relative navigation (page.goto('/login') → full URL)
        baseURL: 'https://the-internet.herokuapp.com',

        // Capture screenshot only on failure
        screenshot: 'only-on-failure',

        // Record video only on failure
        video: 'retain-on-failure',

        // Collect trace on failure for debugging in Playwright UI
        trace: 'on-first-retry',

        // TODO: Uncomment to slow down execution for debugging
        // launchOptions: { slowMo: 500 },
    },

    // Configure multiple browsers / projects
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },
        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
        },

        // Mobile emulation
        {
            name: 'Mobile Chrome',
            use: { ...devices['Pixel 5'] },
        },
        {
            name: 'Mobile Safari',
            use: { ...devices['iPhone 14'] },
        },
    ],
});
