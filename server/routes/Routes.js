const Routes = require('express').Router();
const { MoviesController } = require('../controller/MoviesController');
const { TvController } = require('../controller/TvController');

Routes.route('/movies')
  .get(MoviesController.get)
  .post(MoviesController.post);

Routes.route('/tv')
  .get(TvController.get)
  .post(TvController.post);

module.exports = Routes;
