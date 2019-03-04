const Routes = require('express').Router();
const { NewsController } = require('../controller/NewsController');

Routes.route('/all')
  .get(NewsController.get)
  .post(NewsController.post);

module.exports = Routes;
