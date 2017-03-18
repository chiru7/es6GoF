const EnumSymbol = require('./enumSymbol');

class RankEnumSymbol extends EnumSymbol {
  valueOfValue() {
    return this.valueOf().value;
  }
  valueOfOrder() {
    return this.valueOf().order;
  }
}

module.exports = RankEnumSymbol;
