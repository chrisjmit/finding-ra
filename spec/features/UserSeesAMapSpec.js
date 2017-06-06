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
      expect(browser.html("body")).toContain("Looking for a sunny spot to eat and drink?");
      next();
    });
  });

});


center: {lat: 50.822, lng: -0.137},
zoom: 14
