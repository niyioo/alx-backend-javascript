class Building {
  constructor(sqft) {
    this._sqft = this.validateNumber(sqft, 'Square Feet');
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Abstract method, should be implemented by subclasses
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }

  // Validation function for numbers
  validateNumber(value, attribute) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attribute} must be a number`);
    }
    return value;
  }
}

export default Building;
