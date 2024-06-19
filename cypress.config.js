const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // baseUrl: "http://dev-segurospiramide.com/login",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
