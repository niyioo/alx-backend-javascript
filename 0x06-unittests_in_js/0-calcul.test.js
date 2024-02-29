// 0-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('should return the sum of two rounded numbers', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
        assert.strictEqual(calculateNumber(1, 3.7), 5);
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });

    it('should return the correct sum when one number is negative', () => {
        assert.strictEqual(calculateNumber(-1.5, 3), 2);
        assert.strictEqual(calculateNumber(-1.5, -3.7), -5);
    });

    it('should return 0 if both numbers are 0', () => {
        assert.strictEqual(calculateNumber(0, 0), 0);
    });

    it('should return NaN if one or both inputs are not numbers', () => {
        assert(isNaN(calculateNumber('a', 3)));
        assert(isNaN(calculateNumber(1, 'b')));
        assert(isNaN(calculateNumber('c', 'd')));
    });
});
