var Space = require('../../app/models/Space');

describe('Space', function() {
  var space;
});

  beforeEach(function() {
    space = new Space();
  });

    it("finds a message", function(){
      expect(space.hello).toEqual("hello world");
    });

    it("finds the controller with attributes", function() {
    });
