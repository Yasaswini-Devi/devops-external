const request = require('supertest');
const app = require('./server');

describe('GET /', () => {
  it('should return "DevOps Docker Application" with status 200', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('DevOps Docker Application');
  });
});
describe('POST /', () => {
  it('should return the posted data with status 200', async () => {
    const postData = { name: 'Priya', age: 21, department: 'CSE' };
    const response = await request(app).post('/').send(postData);
    expect(response.status).toBe(201);
  });
});
describe('PUT /:id', () => {
  it('should return the updated data with status 200', async () => {
    const putData = { name: 'Priya', age: 21, department: 'CSE' };
    const response = await request(app).put('/2').send(putData);
    expect(response.status).toBe(200);
  });
});
describe('DELETE /:id', () => {
  it('should return a success message with status 200', async () => {
    const response = await request(app).delete('/2');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Data deleted successfully' });
  });
});