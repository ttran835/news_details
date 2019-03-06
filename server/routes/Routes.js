const Routes = require('express').Router();
const { NewsController } = require('../controller/NewsController');
const { ClientNewsController } = require('../controller/clientNewsController');

Routes.route('/api/back-end')
  .get(NewsController.get)
  .post(NewsController.post);

Routes.route('/home').get(ClientNewsController.get);

module.exports = Routes;
