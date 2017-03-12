const UnsupportedOperationError = require('../Error/unsupportedOperationError');

class IfPizza {
  dough() {
    throw new UnsupportedOperationError('function:dough need overriding by every class !!!');
  }
  topping() {
    throw new UnsupportedOperationError('function:topping need overriding by every class !!!');
  }
}

module.exports = IfPizza;
