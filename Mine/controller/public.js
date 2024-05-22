const fs = require('fs');
// const index = fs.readFileSync('./index.html', 'utf-8')
const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));
const products = data.products;

exports.createProduct = (req, res) => {
  products.push(req.body);
  res.sendStatus(201).json(req.body);
}
exports.getAllProducts = (req, res) => {
  res.sendStatus(201).send(products);
}
exports.getProduct = (req, res) => {
  const id = +req.params.id;
  const product = products.find(p => p.id === id);
  res.json(product);
}
exports.replaceProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex(p => p.id === id);
  products.splice(productIndex, 1, { id: id, ...req.body })
  res.sendStatus(201).json();
}
exports.updateProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex(p => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1, { ...product, ...req.body })
  res.sendStatus(201).json();
}
exports.deleteProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.find(p => p.id === id)
  products.splice(productIndex, 1);
  res.sendStatus(201).json();
}