//to set words table;
const { db } = require('../../database/index');
const Sequelize = require('sequelize');

const wordCheck = db.define('wordcheck', {
  _id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  word: Sequelize.STRING,
});

wordCheck
  .sync()
  .then(() => console.log(`synced with wordCheck`))
  .catch(err => console.error(err));

module.exports = { wordCheck };
