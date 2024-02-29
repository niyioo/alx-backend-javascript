const Utils = {
  calculateNumber(type, a, b) {
    // Ensure a and b are numbers
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Both arguments must be numbers');
    }

    // Round the numbers
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);

    // Perform the operation based on the type
    switch (type) {
      case 'SUM':
        return roundedA + roundedB;
      case 'SUBTRACT':
        return roundedA - roundedB;
      case 'DIVIDE':
        if (roundedB === 0) {
          throw new Error('Cannot divide by zero');
        }
        return roundedA / roundedB;
      default:
        throw new Error('Invalid type');
    }
  },
};

module.exports = Utils;
