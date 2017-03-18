class EnumSymbol {
  constructor(name, value) {
    this.sym = Symbol.for(name);
    if (!Object.is(value, undefined)) {
      this.value = value;
    }
    Object.freeze(this);
  }

  get display() {
    return Symbol.keyFor(this.sym);
  }

  toString() {
    return this.sym;
  }

  valueOf() {
    return this.value;
  }
}

module.exports = EnumSymbol;
