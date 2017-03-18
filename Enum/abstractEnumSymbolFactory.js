const UnsupportedOperationError = require('../Error/unsupportedOperationError');

class AbstractEnumSymbolFactory {
  createEnumSymbol(name, value) {
    throw new UnsupportedOperationError('function:createEnumSymbol need overriding by every class !!!');
  }
}

module.exports = AbstractEnumSymbolFactory;
