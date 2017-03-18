const AbstractEnumSymbolFactory = require('./abstractEnumSymbolFactory');
const RankEnumSymbol = require('./rankEnumSymbol');

class RankEnumSymbolFactory extends AbstractEnumSymbolFactory {
  createEnumSymbol(name, value) {
    return new RankEnumSymbol(name, value);
  }
}

module.exports = RankEnumSymbolFactory;
