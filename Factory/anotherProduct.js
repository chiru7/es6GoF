const Product = require('./product');

class AnotherProduct extends Product {
  call() {
    console.log('AnotherProduct !!');
  }
}

module.exports = AnotherProduct;
