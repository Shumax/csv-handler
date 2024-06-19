import request from 'supertest';
import app from '../src/infra/router';

describe('Not implemented routes', () => {
  it('Should return 501 to routes not implemented', async () => {
    const response = await request(app).get('/api');
    expect(response.status).toBe(501);
  });
});