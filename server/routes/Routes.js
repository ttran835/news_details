const Routes = require('express').Router();
const { MoviesController } = require('../controller/MoviesController');
const { TvController } = require('../controller/TvController');

Routes.route('/all')
  .get(MoviesController.get)
  .post(MoviesController.post);

module.exports = Routes;
