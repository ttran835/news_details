const Routes = require('express').Router();
const { NewsController } = require('../controller/NewsController');
const { ClientNewsController } = require('../controller/clientNewsController');
const { spellingCheck } = require('../controller/spellingCheck');

Routes.route('/api/back-end')
  .get(NewsController.get)
  .post(NewsController.post);

Routes.route('/api/spelling-check')
  .get(spellingCheck.get)
  .post(spellingCheck.post);

Routes.route('/home').get(ClientNewsController.get);

module.exports = Routes;
