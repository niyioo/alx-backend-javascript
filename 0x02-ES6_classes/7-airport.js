class Airport {
  constructor(name, code) {
    this._name = this.validateString(name, 'Name');
    this._code = this.validateString(code, 'Code');
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Default string description
  toString() {
    return `[object ${this._code}]`;
  }

  // Validation function for strings
  validateString(value, attribute) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attribute} must be a string`);
    }
    return value;
  }
}

export default Airport;
