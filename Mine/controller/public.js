const fs = require('fs');
const model = require('../model/product');
const Product = model.Product;
// Create Crud
exports.createProduct = async (req, res) => {
  const product = new Product(req.body);
  try {
    const doc = await product.save();
    res.status(201).json(doc);
  } catch (err) {
    // console.error(err);
    res.status(500).json(err);
  }
}

//Read cRud
exports.getAllProducts = async (req, res) => {
  const products = await Product.find({ id: { $gt: 0 } });
  res.json(products);
}
exports.getProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  res.json(product);
}


exports.replaceProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndReplace({ _id: id }, req.body, { new: true })
    res.json(doc);
  } catch (err) {
    res.json(err);
  }
}
exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true })
    res.json(doc);
  } catch (err) {
    res.json(err);
  }
}
exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndDelete({ _id: id })
    res.json(doc);
  } catch (err) {
    res.json(err);
  }
}