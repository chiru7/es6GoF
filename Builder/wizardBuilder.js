const IfBuilder = require('./ifBuilder');
const Wizard = require('./wizard');

class WizardBuilder extends IfBuilder {
  constructor() {
    super();
    this.wizard = new Wizard();
  }
  name(name) {
    this.wizard.name = name;
  }
  age(age) {
    this.wizard.age = age;
  }
  getPlayer() {
    return this.wizard;
  }
}

module.exports = WizardBuilder;
