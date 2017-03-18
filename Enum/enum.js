const EnumSymbol = require('./enumSymbol');

class Enum {
  constructor(enumLiterals, factory) {
    Object.keys(enumLiterals).forEach((key) => {
      if (!enumLiterals[key]) throw new TypeError('each enum should have been initialized with atleast empty {} value');
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
