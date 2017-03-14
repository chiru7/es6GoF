const IfBuilder = require('./ifBuilder');
const Fighter = require('./fighter');

class FighterBuilder extends IfBuilder {
  constructor() {
    super();
    this.fighter = new Fighter();
  }
  name(name) {
    this.fighter.name = name;
  }
  age(age) {
    this.fighter.age = age;
  }
  getPlayer() {
    return this.fighter;
  }
}

module.exports = FighterBuilder;
