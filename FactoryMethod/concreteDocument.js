const IfDocument = require('./ifDocument');

class ConcreteDocument extends IfDocument {
  call() {
    console.log('ConcreteDocument');
  }
}

module.exports = ConcreteDocument;
