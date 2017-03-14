const UnsupportedOperationError = require('../Error/unsupportedOperationError');

class IfBuilder {
  name() {
    throw new UnsupportedOperationError('function:name need overriding by every class !!!');
  }
  age() {
    throw new UnsupportedOperationError('function:age need overriding by every class !!!');
  }
  getPlayer() {
    throw new UnsupportedOperationError('function:getPlayer need overriding by every class !!!');
  }
}

module.exports = IfBuilder;
