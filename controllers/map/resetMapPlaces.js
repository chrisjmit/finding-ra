'use strict';

import { findPlaces } from 'fetchPlaces';
import { markers } from 'fetchMap';
import { findLocation, getPosition } from 'fetchUserLocation';

function setVenueType() {
  var placeTypeValue = document.getElementById("placeType").value;
  getPosition(function(position) { 
    refreshMap(); 
    findPlaces(findLocation(position), placeTypeValue); });
}

function refreshMap() {
  for (var i = 0; i < markers.length; i++ ) {
    markers[i].setMap(null);
  }
  markers.length = 0;
}

// export to window