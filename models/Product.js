const products = require("../Products");

module.exports = {
  getAllProducts() {
    return products;
  },
  getProductById(id) {
    return products.find((product) => product.id === id);
  },
  createNewProduct(product) {
    products.push(product);
  },
  updateProductById(id, updatedProduct) {
    const index = products.findIndex((product) => product.id === id);
    if (index !== -1) {
      products[index] = updatedProduct;
    }
  },
  deleteProductById(id) {
    const index = products.findIndex((product) => product.id === id);
    if (index !== -1) {
      products.splice(index, 1);
    }
  },
};
