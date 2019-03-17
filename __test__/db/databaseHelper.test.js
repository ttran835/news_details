const request = require('supertest');
const server = require('../../server/index');
const sequelize = require('sequelize');
const { db } = require('../../database/index');
const { news } = require('../../database/models/news');

describe('Should connect to DB and search for database information', async () => {
  beforeAll(function() {
    db.authenticate()
      .then(() => {})
      .catch(err => {
        console.error(err);
      });
  });

  afterAll(function() {
    db.close();
    sequelize.close();
  });

  it('should pull articles from database when hitting /home', async () => {
    const tempData = [];
    news
      .findAll({})
      .then(articles => {
        tempData.push(articles);
      })
      .catch(err => {
        throw err;
      });
    expect(tempData).toBeDefined();
  });
});
