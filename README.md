Finding Ra
==================

Sunny outside? Finding Ra is an app dedicated finding you a sunny spot outdoors at a bar, restaurant or cafe nearby.

Finding Ra uses the Google Maps Javascript API, Google Places API and Geolocator
API's to render a map of the currently open establishments within 1000 meters of the current location.

Compiled over a few fast days during 'practice project week' of week 9 at Makers Academy, k


## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them:

```
brew install git
brew install npm
```

### Installing

Clone the repo from your terminal of choice using:
```
git clone https://github.com/chrisjmit/ra.git
```
To update the node libaries used ahead of deployment, run:
```
npm install
```
To setup the test and development databases, run:
```
sequelize db:create
sequelize db:migrate
```
* Register with Google for an API key (https://developers.google.com/maps/documentation/javascript/get-api-key)
* Replace the API key used for call requests as below:
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE&libraries=places&callback=initMap"</script>

Run a server in Node, using Nodemon, via:
```
npm run start:dev
```
Visit the server at http://localhost:3000

## Running tests
Testing uses Jasmine-Node and Zombie.js headless browser for click test events.
With a server running, as per installation:
```
npm run test
```

## Contributing
Please read [CONTRIBUTING.md] for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

## Authors
* **Ana-Maria Suciu**
* **Chris Mitchell**
* **Robert Jones**
* **Samuel Blausten**

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
*
*
* Bodhi the Hedgehog




### MVP User stories

```
As a user,
So I can find a place in the sun,
I want to see places around me on a map

As a user,
So I can enjoy myself,
I want to find a place where I can eat/drink in the sun

As a space,
So I can attract customers,
I can list the time the sun is available and the facilities available

As a user,
So I know if it is going to be sunny,
I want to be able to see the forecast at a location
```

### Additional User stories
```
As a user,
So I can share my experience,
I want to share a photo of the place I am at

As a user,
So I can let other people know,
I would like to add a review of the location

As a user,
So I can share my experience,
I need to be logged in

As a user,
So I can see what a spot looks like in advance,
I want to be able to post pictures for each location

As a user,
So I know how to get there quickly,
I want to find details and directions to the place of choice
```
