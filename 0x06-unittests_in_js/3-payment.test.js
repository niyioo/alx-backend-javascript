const sinon = require('sinon');
const { describe, it } = require('mocha');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

// Import describe and it from Mocha

// Import assert if you are using it
// const assert = require('assert');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    const totalAmount = 100;
    const totalShipping = 20;

    sendPaymentRequestToApi(totalAmount, totalShipping);

    sinon.assert.calledWithExactly(calculateNumberSpy, 'SUM', totalAmount, totalShipping);

    calculateNumberSpy.restore();
  });
});
