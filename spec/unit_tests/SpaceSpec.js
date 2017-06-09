var Space = require('../../server/models/Space');

describe('Space', function(){
  var space;
});

beforeEach(function(){
  space = new Space();
});

it ('does smth', function(){
  expect(space.smth).toEqual(0);
});
