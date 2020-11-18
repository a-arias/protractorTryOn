exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['todo-spec.js'],
    mochaOpts: {
      reporter: "spec",
      slow: 3000
    },
    onPrepare: function() {
      var width = 1600;
      var height = 1200;
      browser.driver.manage().window().setSize(width, height);

      var chai = require('chai'); // chai
      var chaiAsPromised = require("chai-as-promised"); // deal with promises from protractor

      chai.use(chaiAsPromised); // add promise candy to the candy of chai
      global.chai = chai; // expose chai globally
    }
  };