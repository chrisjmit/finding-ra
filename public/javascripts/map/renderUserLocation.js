'use strict';
var fetchUserLocation = require('fetchUserLocation');
var fetchPlaces = require('fetchPlaces');


function renderUserLocationMarker() {
	fetchUserLocation.getPosition(function(position) {
	    infoWindow.setPosition(fetchUserLocation.findLocation(position));
	    infoWindow.setContent('You are here');
	    infoWindow.open(map);
	  });
}

function centerUserPosition(){
	var mapCenter;
	if (navigator.geolocation) {
	  fetchUserLocation.getPosition(function(position) {
	    mapCenter = fetchUserLocation.findLocation(position);
	    map.setCenter(mapCenter);
	    renderUserLocationMarker();
	    fetchPlaces.findPlaces(mapCenter, 'bar');
	  });
	} else {
	  alert("We can't find where you are so you'll have to find yourself!");
	}
}
