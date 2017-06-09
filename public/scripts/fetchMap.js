'use strict';

import { findPlaces } from 'fetchPlaces';

var map;
var infoWindow;
var markers = [];

(function initMap() {
	var mapCenter = {
	  lat: 51.5073509,
	  lng: -0.12775829999998223
	};
	map = new google.maps.Map(document.getElementById('map'), {
	  center: mapCenter,
	  zoom: 15
	});
	findPlaces(mapCenter, "bar");
}());

export { initMap, map, infoWindow, markers };