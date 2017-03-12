const ConcreteCreator = require('./concreteCreator');
const Creator = require('./creator');

let creator = new ConcreteCreator();
creator.creatorMethod();

creator = new Creator();
try {
  creator.creatorMethod();
} catch (e) {
  console.log('e:', e);
}
