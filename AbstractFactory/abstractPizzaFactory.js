const UnsupportedOperationError = require('../Error/unsupportedOperationError');

class AbstractPizzaFactory {
  createPlainPizza() {
    throw new UnsupportedOperationError('function:createPlainPizza need overriding by every class !!!');
  }
  createSeaFoodPizza() {
    throw new UnsupportedOperationError('function:createSeaFoodPizza need overriding by every class !!!');
  }
}

module.exports = AbstractPizzaFactory;
