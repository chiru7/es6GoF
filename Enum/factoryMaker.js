const UnsupportedOperationError = require('../Error/unsupportedOperationError');
const EnumSymbolFactory = require('./enumSymbolFactory');
const RankEnumSymbolFactory = require('./rankEnumSymbolFactory');

class FactoryMaker {
  constructor() {
    throw new UnsupportedOperationError('Do not make instance !!!');
  }

  static getFactory(choice) {
    if (choice === 'Rank') {
      return new RankEnumSymbolFactory();
    }
    return new EnumSymbolFactory();
  }
}

module.exports = FactoryMaker;
