const EnumSymbol = require('./enumSymbol');

class RankEnumSymbol extends EnumSymbol {
  valueOfValue() {
    return Number(this.valueOf().value);
  }
  valueOfOrder() {
    return Number(this.valueOf().order);
  }
  largerThan(rank) {
    return this.valueOfValue() > rank.valueOfValue();
  }
  eqOrLargerThan(rank) {
    return this.valueOfValue() >= rank.valueOfValue();
  }
  lessThan(rank) {
    return this.valueOfValue() < rank.valueOfValue();
  }
  eqOrLessThan(rank) {
    return this.valueOfValue() <= rank.valueOfValue();
  }
}

module.exports = RankEnumSymbol;
