const request = require('supertest');
const server = require('../../server/index');
const { db } = require('../../database/index');
const { news } = require('../../database/models/news');

// client Route
describe('GET request to /home should work properly without throwing errors', () => {
  it('should send 200 status when hitting /home', async done => {
    const response = await request(server).get('/home');
    expect(response.status).toBe(200);
    done();
  });

  it('should provide data when GET request hits /home', async done => {
    const response = await request(server).get('/home');
    expect(response.body).toBeDefined();
    done();
  });

  it('should get all data from database', async done => {
    const response = await request(server).get('/home');
    expect(response.body.length).toBeGreaterThanOrEqual(20);
    done();
  });
});

describe('Client able to get certain articles based on search term', () => {
  const exampleSearch1 = { testQuery: 'Stock' };
  const exampleSearch2 = { testQuery: 'trump in u.s.' };
  const exampleSearch3 = { testQuery: 'jksgjkldjg fadsf' };

  it('should return articles for Stock market', async done => {
    const response = await request(server)
      .get('/home')
      .send(exampleSearch1);
    expect(response.body.length).toBeGreaterThanOrEqual(1);
    done();
  });

  it('should be able to query search terms with more than one word', async done => {
    const response = await request(server)
      .get('/home')
      .send(exampleSearch2);
    expect(response.body.length).toBeGreaterThanOrEqual(1);
    done();
  });

  it('should return a message if articles do not exist within the API and DB', async done => {
    const response = await request(server)
      .get('/home')
      .send(exampleSearch3);
    expect(response.text).toBe(
      'Cannot find any articles. Have you try typing in something that is not random?'
    );
    done();
  });
});
