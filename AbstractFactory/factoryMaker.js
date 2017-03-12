const ConcreteMilanPizzaFactory = require('./concreteMilanPizzaFactory');
const ConcreteRomePizzaFactory = require('./concreteRomePizzaFactory');

class FactoryMaker {
  constructor() {
    this.pizzaFactory = null;
  }

  static getFactory(choice) {
    if (choice === 'Milan') {
      this.pizzaFactory = new ConcreteMilanPizzaFactory();
    } else if (choice === 'Rome') {
      this.pizzaFactory = new ConcreteRomePizzaFactory();
    }
    return this.pizzaFactory;
  }
}

module.exports = FactoryMaker;
