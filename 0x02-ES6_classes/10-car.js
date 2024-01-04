const cloneSymbol = Symbol('clone');

class Car {
  constructor(brand, motor, color) {
    this._brand = this.validateString(brand, 'Brand');
    this._motor = this.validateString(motor, 'Motor');
    this._color = this.validateString(color, 'Color');
  }

  // Getter for brand
  get brand() {
    return this._brand;
  }

  // Getter for motor
  get motor() {
    return this._motor;
  }

  // Getter for color
  get color() {
    return this._color;
  }

  // Method to clone the car
  cloneCar() {
    const clone = Object.create(this);
    clone[cloneSymbol]();
    return clone;
  }

  // Private method using Symbol
  [cloneSymbol]() {
    // No need to implement anything here for now
  }

  // Validation function for strings
  validateString(value, attribute) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attribute} must be a string`);
    }
    return value;
  }
}

export default Car;
