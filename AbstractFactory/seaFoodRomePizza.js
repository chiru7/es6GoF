const AbstractSeaFoodPizza = require('./abstractSeaFoodPizza');

class SeaFoodRomePizza extends AbstractSeaFoodPizza {
  constructor() {
    super();
    console.log('this is SeaFoodRomePizza.');
  }
  dough() {
    console.log('dough : rome.');
  }
  topping() {
    console.log('topping : cheese, shrimp, squid.');
  }
  sauce() {
    console.log('sauce : white-sauce.');
  }
  operationSeaFood() {
    this.dough();
    this.topping();
    this.sauce();
    console.log('--- finish!!! ---');
  }
}

module.exports = SeaFoodRomePizza;
