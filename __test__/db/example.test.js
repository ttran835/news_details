const request = require('supertest');
const server = require('../../server/index');

describe('GET should access DB', () => {
  it('should send response back as 200', async () => {
    const response = await request(server).get('/all');
    expect(response.status).toBe(200);
  });

  it('should return information from DB', async () => {
    const response = await request(server).get('/all');
    expect(response.body.length).toBe(response.body.length);
  });
});
