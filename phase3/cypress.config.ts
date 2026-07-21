import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    // Base URL — Cypress prepends this to cy.visit('/path') calls
    baseUrl: 'https://the-internet.herokuapp.com',

    // Spec file location
    specPattern: 'cypress/e2e/**/*.cy.ts',

    // Support file (empty for now — create if you add custom commands)
    supportFile: false,

    // Screenshots on failure
    screenshotOnRunFailure: true,

    // Video recording
    video: false,

    // Viewport
    viewportWidth: 1280,
    viewportHeight: 720,

    // Timeouts
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 30000,
  },
});
