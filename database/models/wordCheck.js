//to set words table;
const { db } = require('../../database/index');
const Sequelize = require('sequelize');

const englishWords = db.define('engishWords', {
  wordsArr: Sequelize.ARRAY(Sequelize.TEXT),
});

englishWords
  .sync()
  .then(() => console.log(`synced with englishWords`))
  .catch(err => console.error(err));

module.exports = { engishWords };
