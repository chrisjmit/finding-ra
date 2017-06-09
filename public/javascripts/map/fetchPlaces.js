'use strict';
var renderPlaces = require('renderPlaces');
var markers = [];

function findPlaces(location, type) {
    infoWindow = new google.maps.InfoWindow;
    var placesLookup = new google.maps.places.PlacesService(map);
    placesLookup.nearbySearch( {
      location: location,
      radius: 1000,
      openNow: true,
      type: [type]
    }, processSearchResults );
}

function processSearchResults(placesArray, status) {
	if (status === google.maps.places.PlacesServiceStatus.OK) {
	  for (var i = 0; i < placesArray.length; i++) {
	    createMarker(placesArray[i]);
	  }
	}
}

function createMarker(place) {
	var marker = new google.maps.Marker({
	  map: map,
	  position: place.geometry.location
	});
	markers.push(marker);
	renderPlaces.displayDetailsOnClick(place, marker);
}

function getPlaceDetails(place, callback) {
	var placeId = { placeId: place.place_id }
	service = new google.maps.places.PlacesService(map);
	service.getDetails(placeId, callback);
}

module.exports =  { findPlaces: findPlaces, getPlaceDetails: getPlaceDetails };
