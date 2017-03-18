const OneProduct = require('./oneProduct');
const AnotherProduct = require('./anotherProduct');

class ProductFactory {
  createProduct(productId) {
    if (productId === 'One') {
      return new OneProduct();
    } else if (productId === 'Another') {
      return new AnotherProduct();
    }
    return null;
  }
}

module.exports = ProductFactory;
