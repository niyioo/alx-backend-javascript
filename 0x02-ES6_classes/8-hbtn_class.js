class HolbertonClass {
  constructor(size, location) {
    this._size = this.validateNumber(size, 'Size');
    this._location = this.validateString(location, 'Location');
  }

  // Getter for size
  get size() {
    return this._size;
  }

  // Getter for location
  get location() {
    return this._location;
  }

  // Cast to Number
  valueOf() {
    return this._size;
  }

  // Cast to String
  toString() {
    return this._location;
  }

  // Validation function for numbers
  validateNumber(value, attribute) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attribute} must be a number`);
    }
    return value;
  }

  // Validation function for strings
  validateString(value, attribute) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attribute} must be a string`);
    }
    return value;
  }
}

export default HolbertonClass;
