class Director {
  constructor(builder) {
    this.builder = builder;
  }
  construct() {
    this.builder.name('Apprentice');
    this.builder.age(7);
  }
}

module.exports = Director;
