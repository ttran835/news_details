const request = require('supertest');
const server = require('../../server/index');

describe('GET request to /home should work properly without throwing errors', () => {
  it('should send 200 status when hitting /home', async () => {
    const response = await request(server).get('/home');
    expect(response.status).toBe(200);
  });

  it('should provide data when GET request hits /home', async () => {
    const response = await request(server).get('/home');
    expect(response.body).toBeDefined();
  });

  it('should get all data from database', async () => {
    const response = await request(server).get('/home');
    expect(response.body).toHaveLength(300);
  });

  // it('should send 201 status when hitting /home', async () => {
  //   const response = await request(server).post('/home');
  //   expect(response.status).toBe(201);
  // });
});

describe('GET request to /api/back-end should work properly without throwing errors', () => {
  it('should send 200 status when hitting /api/back-end', async () => {
    const response = await request(server).get('/api/back-end');
    expect(response.status).toBe(200);
  });

  // it('should send 201 status when hitting /api/back-end', async () => {
  //   const response = await request(server).post('/api/back-end');
  //   expect(response.status).toBe(201);
  // });
});
