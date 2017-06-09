'use strict';
import { getPosition, findLocation } from 'fetchUserLocation';
import { findPlaces } from 'fetchPlaces';


function renderUserLocationMarker() {
	getPosition(function(position) {
	    infoWindow.setPosition(findLocation(position));
	    infoWindow.setContent('You are here');
	    infoWindow.open(map);
	  });
}

function centerUserPosition(){
	var mapCenter;
	if (navigator.geolocation) {
	  getPosition(function(position) {
	    mapCenter = findLocation(position);
	    map.setCenter(mapCenter);
	    renderUserLocationMarker();
	    findPlaces(mapCenter, 'bar');
	  });
	} else {
	  alert("We can't find where you are so you'll have to find yourself!");
	}
}
