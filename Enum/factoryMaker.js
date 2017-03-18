const EnumSymbolFactory = require('./enumSymbolFactory');
const RankEnumSymbolFactory = require('./rankEnumSymbolFactory');

class FactoryMaker {
  constructor() {
    this.enumFactory;
  }

  static getFactory(choice) {
    if (choice === 'Rank') {
      this.enumFactory = new RankEnumSymbolFactory();
    } else {
      this.enumFactory = new EnumSymbolFactory();
    }
    return this.enumFactory;
  }
}

module.exports = FactoryMaker;
