const sinon = require('sinon');
const {
  describe, it, beforeEach, afterEach,
} = require('mocha');
const sendPaymentRequestToApi = require('./5-payment');

// Import describe and it from Mocha

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    // Create a spy for console.log before each test
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the console.log spy after each test
    consoleSpy.restore();
  });

  it('should log the correct total for totalAmount=100 and totalShipping=20', () => {
    sendPaymentRequestToApi(100, 20);

    // Verify that console.log is called with the correct message
    sinon.assert.calledWithExactly(consoleSpy, 'The total is: 120');

    // Verify that console.log is called only once
    sinon.assert.calledOnce(consoleSpy);
  });

  it('should log the correct total for totalAmount=10 and totalShipping=10', () => {
    sendPaymentRequestToApi(10, 10);

    // Verify that console.log is called with the correct message
    sinon.assert.calledWithExactly(consoleSpy, 'The total is: 20');

    // Verify that console.log is called only once
    sinon.assert.calledOnce(consoleSpy);
  });
});
