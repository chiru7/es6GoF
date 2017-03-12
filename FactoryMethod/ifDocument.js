const UnsupportedOperationError = require('../Error/unsupportedOperationError');

class IfDocument {
  call() {
    throw new UnsupportedOperationError('function:call need overriding by every class !!!');
  }
}

module.exports = IfDocument;
