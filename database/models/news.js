const { db } = require('../index');
const Sequelize = require('sequelize');

const news = db.define(
  'news',
  {
    _id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    source: { type: Sequelize.ARRAY(Sequelize.TEXT) },
    author: { type: Sequelize.STRING },
    title: { type: Sequelize.STRING },
    description: { type: Sequelize.STRING },
    url: { type: Sequelize.STRING },
    urlToImage: { type: Sequelize.STRING },
    publishedAt: { type: Sequelize.STRING },
    content: { type: Sequelize.STRING },
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

/*
{
  "source": {
      "id": "usa-today",
      "name": "USA Today"
  },
  "author": "Dan Wolken",
  "title": "Ohio State quarterback Justin Fields ruled immediately eligible by NCAA - USA TODAY",
  "description": "Justin Fields won't have to wait long to make an immediate impact at Ohio State. The NCAA ruled the Georgia transfer quarterback can play in 2019.",
  "url": "https://www.usatoday.com/story/sports/ncaaf/bigten/2019/02/08/justin-fields-immediately-eligible-ohio-state-after-ncaa-appeal/2797303002/",
  "urlToImage": "https://www.gannett-cdn.com/-mm-/751d47bc53d653a01baa54c15732f6c4bc444ec2/c=0-307-2678-1820/local/-/media/2018/12/02/USATODAY/usatsports/aa-football_-sec-championship-alabama-vs-geo-1.jpg?width=3200&height=1680&fit=crop",
  "publishedAt": "2019-02-08T21:21:00Z",
  "content": "SportsPulse: Miss college football action already? Well, Trysta Krick and Paul Myerberg tell us what to look forward to next season. USA TODAY Justin Fields, the former five-star quarterback recruit who left Georgia after his freshman season, has been ruled i… [+2971 chars]"
},
*/
