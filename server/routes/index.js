
const placeController = require('../controllers').place;

module.exports = (app) => {
  app.get('/', function(req, res) {
      res.render('index.ejs', { title: 'Ra' });
  });

  app.get('/places', function(req, res) {
    res.render('spaces/index.ejs');
  });

  app.post('/places/new', function(req, res) {
    placeController.create;
  });

};
