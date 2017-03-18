const EnumSymbol = require('./enumSymbol');

class Enum {
  constructor(enumLiterals, factory) {
    Object.keys(enumLiterals).forEach((key) => {
      this[key] = factory.createEnumSymbol(key, enumLiterals[key]);
    });
    Object.freeze(this);
  }

  symbols() {
    const result = [];
    Object.keys(this).forEach((key) => {
      result.push(this[key]);
    });
    return result;
  }

  keys() {
    return Object.keys(this);
  }

  contains(sym) {
    if (!(sym instanceof EnumSymbol)) {
      return false;
    }
    return this[Symbol.keyFor(sym.sym)] === sym;
  }
}

module.exports = Enum;
