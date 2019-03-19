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
    expect(response.body).toHaveLength(20);
    done();
  });
});

describe('Client able to get certain articles based on search term', () => {
  const exampleSearch1 = { searchTerm: 'Stock market' };
  const exampleSearch2 = { searchTerm: 'stock' };

  it('should return articles for Stock market', async done => {
    const response = await request(server)
      .get('/home')
      .send(exampleSearch1);
    expect(response.text).toBe('Stock market');
    done();
  });
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
