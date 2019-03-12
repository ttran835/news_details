const { db } = require('../index');
const Sequelize = require('sequelize');

const news = db.define(
  'news',
  {
    _id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    source: { type: Sequelize.ARRAY(Sequelize.TEXT) },
    author: { type: Sequelize.STRING },
    title: { type: Sequelize.STRING },
    description: { type: Sequelize.STRING(1234) },
    url: { type: Sequelize.STRING },
    urlToImage: { type: Sequelize.STRING },
    publishedAt: { type: Sequelize.STRING },
    content: { type: Sequelize.STRING(1234) },
  },
  {
    timeStamp: true,
  }
);

news
  .sync()
  .then(() => console.log('Synced with DB'))
  .catch(err => console.error(err));

module.exports = { news };
