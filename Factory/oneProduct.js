const Product = require('./product');

class OneProduct extends Product {
  call() {
    console.log('OneProduct !!');
  }
}

module.exports = OneProduct;
