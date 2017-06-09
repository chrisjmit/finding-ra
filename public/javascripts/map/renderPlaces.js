'use strict';
var fetchPlaces = require ('fetchPlaces');

function displayDetailsOnClick(place, marker) {
google.maps.event.addListener(marker, 'click', function() {
  fetchPlaces.getPlaceDetails(place, function(details, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      renderDetails(details, marker);
    }
  });
});
}

function renderDetails(place, marker) {
	infoWindow.setContent('<div><h3>' +
	  place.name + '</h3>Google rating: ' +
	  checkForAttribute(place.rating) + '<br>' +
	  checkPlaceIsOpen(place) + '<br>' +
	  checkForAttribute(place.formatted_address) + '<br><p><a target="_blank" href=' +
	  place.website + '>' +
	  checkForAttribute(place.website) + '</a></p></div>');
	infoWindow.open(map, marker);
}

function checkPlaceIsOpen(place) {
	if ("undefined" === typeof place.opening_hours) {
	  var openOrClosed = '';
	} else if (!place.opening_hours.open_now) {
	  var openOrClosed = "Closed";
	} else if (place.opening_hours.open_now) {
	  var openOrClosed = "Open";
	}
	return openOrClosed;
}

function checkForAttribute(attr) {
	if ("undefined" === typeof attr) {
	  var result = '';
	} else if (attr) {
	  var result = attr;
	}
	return result;
}

module.exports = displayDetailsOnClick;
