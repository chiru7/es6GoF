const AbstractPizzaFactory = require('./abstractPizzaFactory');
const PlainMilanPizza = require('./plainMilanPizza');
const SeaFoodMilanPizza = require('./seaFoodMilanPizza');

class ConcreteMilanPizzaFactory extends AbstractPizzaFactory {
  createPlainPizza() {
    return new PlainMilanPizza();
  }
  createSeaFoodPizza() {
    return new SeaFoodMilanPizza();
  }
}

module.exports = ConcreteMilanPizzaFactory;
