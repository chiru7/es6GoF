const AbstractSeaFoodPizza = require('./abstractSeaFoodPizza');

class SeaFoodMilanPizza extends AbstractSeaFoodPizza {
  constructor() {
    super();
    console.log('this is SeaFoodMilanPizza.');
  }
  dough() {
    console.log('dough : milan.');
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

module.exports = SeaFoodMilanPizza;
