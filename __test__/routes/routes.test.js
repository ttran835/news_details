const request = require('supertest');
const server = require('../../server/index');

describe('GET seperate Routes and return correct information', () => {
  // it('should send response back as 200 when hitting /home', async () => {
  //   const response = await request(server).get('/home');
  //   expect(response.status).toBe(200);
  // });

  it('should send a response back 200 when hitting /api/back-end', async () => {
    const response = await request(server).get('/api/back-end');
    expect(response.status).toBe(200);
  });
});
