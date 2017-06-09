const Place = require('../models').Place;

module.exports = {
  create(req, res) {
    return Space
      .create({
        name: req.body.place.name,
        place_id: req.body.place.place_id,
        sun_start: req.body.startTime
        sun_end: req.body.endTime
      })
      .then(space => res.status(201).send(space))
      .catch(error => res.status(400).send(error));
  },
};
