const FactoryMaker = require('./factoryMaker');

let maker = FactoryMaker.getFactory('Milan');
let pizza = maker.createPlainPizza();
pizza.operationPlain();
maker = FactoryMaker.getFactory('Rome');
pizza = maker.createPlainPizza();
pizza.operationPlain();
maker = FactoryMaker.getFactory('Milan');
pizza = maker.createSeaFoodPizza();
pizza.operationSeaFood();
maker = FactoryMaker.getFactory('Rome');
pizza = maker.createSeaFoodPizza();
pizza.operationSeaFood();

try {
  maker = FactoryMaker.getFactory('Milan');
  pizza = maker.createPlainPizza();
  pizza.operationSeaFood();
} catch (e) {
  console.log('Error:', e);
}
