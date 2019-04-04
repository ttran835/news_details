const request = require('supertest');
const server = require('../../server/index');
const { db } = require('../../database/index');
const { news } = require('../../database/models/news');

// api Route
describe('GET request to /api/back-end should work properly without throwing errors', () => {
  beforeAll(function() {
    console.log('starting test');
  });

  afterAll(function() {
    sequelize.close();
    db.close();
    news.close();
  });

  it('should send 200 status when hitting /api/back-end', async done => {
    const response = await request(server).get('/api/back-end');
    expect(response.status).toBe(200);
    done();
  });

  it('should return a JSON stringified object', async done => {
    const response = await request(server).get('/api/back-end');
    expect(response.text).toBe('Converted Data and saved. Return: string');
    done();
  });

  it('should send 201 status when hitting /api/back-end', async done => {
    const response = await request(server).post('/api/back-end');
    expect(response.status).toBe(201);
    done();
  });

  it('should successfully save data from API into the database', async done => {
    const response = (await request(server))
      .post('/api/back-end')
      .then((err, res) => {
        expect(err).toBeFalsy();
        expect(res).toBeTruthy();
      })
      .catch(err => console.error(err));
    done();
  });
});
