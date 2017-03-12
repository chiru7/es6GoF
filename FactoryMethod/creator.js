const UnsupportedOperationError = require('../Error/unsupportedOperationError');

class Creator {
  creatorMethod() {
    console.log('this is creatorMethod.');
    const doc = this.factoryMethod();
    doc.call();
  }
  factoryMethod() {
    throw new UnsupportedOperationError('function:factoryMethod need overriding by every class !!!');
  }
}

module.exports = Creator;
