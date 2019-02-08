const Routes = require('express').Router();
const { NewsController } = require('../controller/NewsController');
const { TvController } = require('../controller/TvController');

Routes.route('/all')
  .get(NewsController.get)
  .post(NewsController.post);

module.exports = Routes;
