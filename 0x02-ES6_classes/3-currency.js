class Currency {
  constructor(code, name) {
    this._code = this.validateString(code, "Code");
    this._name = this.validateString(name, "Name");
  }

  // Getter and setter for code
  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = this.validateString(newCode, "Code");
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = this.validateString(newName, "Name");
  }

  // Method to display full currency
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  // Validation function for string values
  validateString(value, attribute) {
    if (typeof value !== "string") {
      throw new TypeError(`${attribute} must be a string`);
    }
    return value;
  }
}

export default Currency;
