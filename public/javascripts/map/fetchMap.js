'use strict';

var fetchPlaces = require('fetchPlaces');
var map;
var infoWindow;
var markers = [];

var initialize = (function() {
	return {
		newMap: function() {
			var mapCenter = {
			  lat: 51.5073509,
			  lng: -0.12775829999998223
			};
			map = new google.maps.Map(document.getElementById('map'), {
			  center: mapCenter,
			  zoom: 15
			});
			fetchPlaces.findPlaces(mapCenter, "bar");
		}
	}
})();

//module.exports =  { initMap: initMap, map: map, infoWindow: infoWindow };
