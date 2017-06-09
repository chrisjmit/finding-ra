'use strict';

function getPosition(callback) {
	navigator.geolocation.getCurrentPosition( function(position) { 
		callback(position); 
	});
}


function findLocation(position) {
	return {
	  lat: position.coords.latitude,
	  lng: position.coords.longitude
	};
}

export { getPosition, findLocation };
