const sinon = require('sinon');
const { describe, it } = require('mocha');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

// Import describe and it from Mocha

// Remove unused assert import
// const assert = require('assert');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments and log correct message', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleSpy = sinon.spy(console, 'log');
    const totalAmount = 100;
    const totalShipping = 20;

    sendPaymentRequestToApi(totalAmount, totalShipping);

    sinon.assert.calledWithExactly(calculateNumberStub, 'SUM', totalAmount, totalShipping);
    sinon.assert.calledWithExactly(consoleSpy, 'The total is: 10');

    calculateNumberStub.restore();
    consoleSpy.restore();
  });
});
