const Product = require('../../models/products.model');

module.exports.index = async (req, res) => {
  var products = await Product.find();
  res.json(products);
};

module.exports.create = async (req, res) => {
  var products = await Product.create(req.body);
  res.json(products);
};
