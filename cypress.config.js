const { defineConfig } = require("cypress");
const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      //  baseUrl: 'https://practice.expandtesting.com/notes/api'
      on("task", { downloadFile });
    },
  },
});
