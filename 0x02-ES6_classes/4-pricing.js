import Currency from './3-currency.js';

class Pricing {
  constructor(amount, currency) {
    this._amount = this.validateNumber(amount, 'Amount');
    this._currency = this.validateCurrency(currency, 'Currency');
  }

  // Getter and setter for amount
  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = this.validateNumber(newAmount, 'Amount');
  }

  // Getter and setter for currency
  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    this._currency = this.validateCurrency(newCurrency, 'Currency');
  }

  // Method to display full price
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert price
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }

  // Validation function for numbers
  validateNumber(value, attribute) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attribute} must be a number`);
    }
    return value;
  }

  // Validation function for Currency objects
  validateCurrency(value, attribute) {
    if (!(value instanceof Currency)) {
      throw new TypeError(`${attribute} must be an instance of Currency`);
    }
    return value;
  }
}

export default Pricing;
