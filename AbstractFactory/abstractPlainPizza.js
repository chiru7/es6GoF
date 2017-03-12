const IfPizza = require('./ifPizza');
const UnsupportedOperationError = require('../Error/unsupportedOperationError');

class AbstractPlainPizza extends IfPizza {
  constructor() {
    super();
    console.log('this is AbstractPlainPizza.');
  }
  operationPlain() {
    throw new UnsupportedOperationError('function:operationPlain need overriding by every class !!!');
  }
}

module.exports = AbstractPlainPizza;
