const request = require('supertest');
const server = require('../../server/index');

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
    expect(response.body.length).toBeDefined();
    done();
  });
});

describe('Client able to get certain articles based on search term', () => {
  const exampleSearch1 = { searchTerm: 'Stock' };
  const exampleSearch2 = { searchTerm: 'fsdfsa' };

  it('should return articles for Stock market', async done => {
    const response = await request(server)
      .get('/home')
      .send(exampleSearch1);
    expect(response.body.data.articles.length).toBeDefined();
    done();
  });

  it('should be able to query search terms with more than one word', async done => {
    const response = await request(server)
      .get('/home')
      .send(exampleSearch2);
    expect(response.body.data.articles.length).toBeDefined();
    done();
  });

  it('should send ');
});
describe('GET request to /api/back-end should work properly without throwing errors', () => {
  it('should send 200 status when hitting /api/back-end', async done => {
    const response = await request(server).get('/api/back-end');
    expect(response.status).toBe(200);
    done();
  });

  // it('should send 201 status when hitting /api/back-end', async () => {
  //   const response = await request(server).post('/api/back-end');
  //   expect(response.status).toBe(201);
  // });
});
