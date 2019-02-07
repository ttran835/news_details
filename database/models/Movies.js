const { db } = require('../index');
const Sequelize = require('sequelize');

const AgentSample = db.define(
  'Movies',
  {
    _id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    firstName: { type: Sequelize.STRING },
    lastName: { type: Sequelize.STRING },
    img: { type: Sequelize.STRING },
    job: { type: Sequelize.STRING },
  },
  {
    timeStamp: true,
  }
);

AgentSample.sync()
  .then(() => console.log('Synced with DB'))
  .catch(err => console.error(err));

module.exports = { AgentSample };
