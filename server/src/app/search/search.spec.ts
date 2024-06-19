import request from "supertest";
import app from '../../infra/router';

describe('Search Integration Test', () => {
  it('Should return 200 to search a user', async () => {
    const response = await request(app).get('/api/users?q=John');
    
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      "data": [
        {
          "Name": "John",
          "Age": "25",
          "City": "New York"
        }
      ]
    });
  });

  it("Should return status 500 and an object with the key message user not found", async () => {
    const response = await request(app).get("/api/users?q=Max")

    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      "message": "User not found!"
    });
  });

  it("Should return status 500 and an object with the key message empty query", async () => {
    const response = await request(app).get("/api/users?q=")

    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      "message": "Empty query!"
    });
  });

})
