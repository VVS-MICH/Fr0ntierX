const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://dev-f0x-wallet.netlify.app/'

    
  },
});

