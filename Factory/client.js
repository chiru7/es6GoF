const ProductFactory = require('./productFactory');

const productFactory = new ProductFactory();
let product = productFactory.createProduct('One');
product.call();
product = productFactory.createProduct('Another');
product.call();
