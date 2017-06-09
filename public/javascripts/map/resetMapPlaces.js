'use strict';

var fetchPlaces = require('fetchPlaces');
var markers = [];
var fetchUserLocation = require('fetchUserLocation');

function setVenueType() {
  var placeTypeValue = document.getElementById("placeType").value;
  fetchUserLocation.getPosition(function(position) {
    refreshMap();
    fetchPlaces.findPlaces(fetchUserLocation.findLocation(position), placeTypeValue); });
}

function refreshMap() {
  for (var i = 0; i < markers.length; i++ ) {
    markers[i].setMap(null);
  }
  markers.length = 0;
}

// export to window
