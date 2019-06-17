module.exports = function(config) {
  config.set({

    frameworks: ["ui5"],

    ui5: {
		type: "application",
		mode: "html",
		testpage: "webapp/test/myTestPage.qunit.html",
		url: "http://localhost:8080"
    },
 
    browsers: ["Chrome"]
    
    });
  }