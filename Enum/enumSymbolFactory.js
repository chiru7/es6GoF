const AbstractEnumSymbolFactory = require('./abstractEnumSymbolFactory');
const EnumSymbol = require('./enumSymbol');

class EnumSymbolFactory extends AbstractEnumSymbolFactory {
  createEnumSymbol(name, value) {
    return new EnumSymbol(name, value);
  }
}

module.exports = EnumSymbolFactory;
