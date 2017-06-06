var Browser = require('zombie');
var url = "http://localhost:3000/";
var browser = new Browser();

describe('User visits index page', function() {

  it('should see welcome page', function() {
    browser.visit(url, function(err){
      expect(browser.success).toBe(true);
    });
  });
});
