var Browser = require('zombie');
var url = "http://localhost:3000/";
var browser = new Browser();

describe('User visits index page', function() {

  it('should see welcome page', function(next) {
    browser.visit(url, function(err) {
      expect(browser.success).toBe(true);
      next();
    });
  });

  it('should see welcome page', function(next) {
    browser.visit(url, function(err) {
      expect(browser.html("body")).toContain("Welcome to");
      next();
    });
  });

});
