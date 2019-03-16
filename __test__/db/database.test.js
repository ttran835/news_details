const request = require('supertest');
const server = require('../../server/index');
const sequelize = require('sequelize');
const { db } = require('../../database/index');

describe('Should connect to DB and search for database information', () => {
  beforeAll(function() {
    db.authenticate()
      .then(() => {
        console.log('Connected to DB');
      })
      .catch(err => {
        console.error(err);
      });
  });

  afterAll(function() {
    sequelize.close();
  });

  it('should pull articles from database when hitting /home', async () => {
    const response = await request(server).get('/home');
    expect(response.status).toBe(200);
  });

  it('should send 201 status when hitting /home', async () => {
    const response = await request(server).post('/home');
    expect(response.status(201));
  });

  it('should send 200 status when hitting /api/back-end', async () => {
    const response = await request(server).get('/api/back-end');
    expect(response.status).toBe(200);
  });

  it('should send 201 status when hitting /api/back-end', async () => {
    const response = await request(server).post('/api/back-end');
    expect(response.status).toBe(201);
  });
});
