const IfPizza = require('./ifPizza');
const UnsupportedOperationError = require('../Error/unsupportedOperationError');

class AbstractSeaFoodPizza extends IfPizza {
  constructor() {
    super();
    console.log('this is AbstractSeaFoodPizza.');
  }
  operationSeaFood() {
    throw new UnsupportedOperationError('function:operationSeaFood need overriding by every class !!!');
  }
}

module.exports = AbstractSeaFoodPizza;
