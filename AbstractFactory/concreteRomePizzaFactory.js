const AbstractPizzaFactory = require('./abstractPizzaFactory');
const PlainRomePizza = require('./plainRomePizza');
const SeaFoodRomePizza = require('./seaFoodRomePizza');

class ConcreteRomePizzaFactory extends AbstractPizzaFactory {
  createPlainPizza() {
    return new PlainRomePizza();
  }
  createSeaFoodPizza() {
    return new SeaFoodRomePizza();
  }
}

module.exports = ConcreteRomePizzaFactory;
