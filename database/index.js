require('dotenv').config();
const Sequelize = require('sequelize');

const db = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    // host: 'personalSiteDB',
    host: process.env.HOST,
    dialect: 'postgres',
  }
);

db.authenticate()
  .then(() => console.log('connected to the DB'))
  .catch(err => console.error(err));

module.exports = { db };
