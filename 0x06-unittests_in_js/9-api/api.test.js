const request = require("request");
const {describe, it} = require("mocha");
const expect = require("chai").expect;

describe('Cart page', () => {
  it('should return correct status code when :id is a number', (done) => {
    request.get('http://localhost:7865/cart/123', (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct result when :id is a number', (done) => {
    request.get('http://localhost:7865/cart/123', (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 123');
      done();
    });
  });

  it('should return 404 when :id is NOT a number', (done) => {
    request.get('http://localhost:7865/cart/hello', (error, response) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
