var Browser = require('zombie');
var url = "http://localhost:3000/";
var browser = new Browser();

// user visits page
// user clicks on marker
// marker captures info about place e.g. place_id, place.name
// marker checks if database record exists
  // if place_id exists, it publishes the sun times on the page, e.g. under the map, or on the popup
    // or
  // if place_id does not exist, it creates a new Space instance, and savaes that record on the database
  // it then publishes the record, and passes that info back to the marker/page.
  // if sun times do not exist for a record, there is a field available that can add times.
   // the times are then submitted to the database and saved in that instance of the place_id.



scenario('User clicks space on map', function() {


    it("shows space specific details", function {
      browser.visit(url, function(err) {
      //  user clicks on marker
      expect(browser.html("body")).toContain("Sunny hours: 9am to 6pm");
      })
    );

});
