import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = this.validateString(range, 'Range');
  }

  // Getter for range
  get range() {
    return this._range;
  }

  // Override cloneCar to return an instance of Car
  cloneCar() {
    const clone = new Car(); // Creating a new instance of Car
    clone._brand = this._brand;
    clone._motor = this._motor;
    clone._color = this._color;
    return clone;
  }
}

export default EVCar;
