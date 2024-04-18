const Product = require("../models/Product");
const uuid = require("uuid");

module.exports = {
  getAllProducts(req, res) {
    const allProducts = Product.getAllProducts();
    res.json(allProducts);
  },
  getProductById(req, res) {
    const productId = req.params.id;
    const product = Product.getProductById(productId);
    if (!product) {
      res.status(404).json({ message: "Product not found" });
    } else {
      res.json(product);
    }
  },
  createNewProduct(req, res) {
    const newProduct = {
      id: uuid.v4(),
      name: req.body.name,
      price: req.body.price,
    };
    Product.createNewProduct(newProduct);

    if (!newProduct.name || !newProduct.price) {
      return res.status(400).json({ msg: "Please include a name and prce" });
    } else {
      res.status(201).json(newProduct);
    }
  },
  updateProductById(req, res) {
    const productId = req.params.id;
    const updatedProduct = req.body;
    Product.updateProductById(productId, updatedProduct);
    res.json(updatedProduct);
  },
  deleteProductById(req, res) {
    const productId = req.params.id;
    Product.deleteProductById(productId);
    res.status(204).send();
  },
};
