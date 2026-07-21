// Cucumber configuration — registers ts-node so step definitions run as TypeScript
// without a separate compile step.
// Reference: https://github.com/cucumber/cucumber-js/blob/main/docs/configuration.md

module.exports = {
  default: {
    require: ['step-definitions/**/*.ts'],
    requireModule: ['ts-node/register'],
    format: [
      'html:cucumber-report.html',
      'summary',
    ],
    // Uncomment to set a timeout (ms) for each step
    // timeout: 30000,
  },
};
