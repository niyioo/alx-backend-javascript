const { describe, it } = require('mocha');
const getPaymentTokenFromAPI = require('./6-payment_token');

// Import describe and it from Mocha

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with correct data when success is true', (done) => {
    // Call getPaymentTokenFromAPI with success=true
    getPaymentTokenFromAPI(true)
      .then((response) => {
        // Verify that the response data is correct
        if (response.data === 'Successful response from the API') {
          // If the response is as expected, call done to indicate the test is finished
          done();
        } else {
          // If the response is not as expected, call done with an error message
          done(new Error('Unexpected response data'));
        }
      })
      .catch((error) => {
        // If there is an error, call done with the error to indicate test failure
        done(error);
      });
  });
});
