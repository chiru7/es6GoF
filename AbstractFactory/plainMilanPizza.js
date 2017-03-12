const AbstractPlainPizza = require('./abstractPlainPizza');

class PlainMilanPizza extends AbstractPlainPizza {
  constructor() {
    super();
    console.log('this is PlainMilanPizza.');
  }
  dough() {
    console.log('dough : milan.');
  }
  topping() {
    console.log('topping : cheese, pepperoni.');
  }
  operationPlain() {
    this.dough();
    this.topping();
    console.log('--- finish!!! ---');
  }
}

module.exports = PlainMilanPizza;
