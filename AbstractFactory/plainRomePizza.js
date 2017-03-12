const AbstractPlainPizza = require('./abstractPlainPizza');

class PlainRomePizza extends AbstractPlainPizza {
  constructor() {
    super();
    console.log('this is PlainRomePizza.');
  }
  dough() {
    console.log('dough : rome.');
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

module.exports = PlainRomePizza;
