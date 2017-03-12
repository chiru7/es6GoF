const Creator = require('./creator');
const ConcreteDocument = require('./concreteDocument');

class ConcreteCreator extends Creator {
  factoryMethod() {
    return new ConcreteDocument();
  }
}

module.exports = ConcreteCreator;
