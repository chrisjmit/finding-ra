'use strict';
import { displayDetailsOnClick } from 'renderPlaces';
import { markers } from 'fetchMap';

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
	displayDetailsOnClick(place, marker);
}

function getPlaceDetails(place, callback) {
	var placeId = { placeId: place.place_id }
	service = new google.maps.places.PlacesService(map);
	service.getDetails(placeId, callback);
}

export { findPlaces, getPlaceDetails }