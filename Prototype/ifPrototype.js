const UnsupportedOperationError = require('../Error/unsupportedOperationError');

class IfPrototype {
  clone() {
    throw new UnsupportedOperationError('function:clone need overriding by every class !!!');
  }
}

module.exports = IfPrototype;
