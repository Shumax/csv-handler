import request from "supertest";
import app from '../../infra/router';

describe('File Controller Integration Test', () => {
  it("Should return status 200 and an object with the key data successfully", async () => {
    const csvData = Buffer.from(
      "Content-Type: text/csv\n" +
        "Name,Age,City\n" +
        "John,25,New York\n" +
        "Jane,30,San Francisco\n"
    );

    const response = await request(app)
      .post("/api/files")
      .set("Content-Type", "text/csv")
      .send(csvData);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      "message": "The file was uploaded successfully!"
    });
  });

  it("Should return status 500 and an object with the key message to file request", async () => {
    const response = await request(app)
      .post("/api/files")
      .set("Content-Type", "multipart/form-data");
      
    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      "message": "Error: Empty request!"
    });
  });

  it("Should return status 500 and an object with the key message to file empty", async () => {
    const csvData = "";

    const response = await request(app)
      .post("/api/files")
      .set("Content-Type", "multipart/form-data")
      .send(csvData);

    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      "message": "Error: Empty request!"
    });
  });

  it("Should return status 500 and an object with the key message to file type wrong", async () => {
    const csvData = 'Name,Age,City\nJohn,25,New York\nJane,30,San Francisco\n';

    const response = await request(app)
      .post("/api/files")
      .set("Content-Type", "multipart/form-data")
      .send(csvData);

    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      "message": "Error: Type file!"
    });
  });

})
