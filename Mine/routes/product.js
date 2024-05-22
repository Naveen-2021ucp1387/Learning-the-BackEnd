const express = require('express');
const publicController = require('../controller/public');
const router = express.Router();

router
  .post('/', publicController.createProduct)
  .get('/', publicController.getAllProducts)
  .get('/:id', publicController.getProduct)
  .put('/:id', publicController.replaceProduct)
  .patch('/:id', publicController.updateProduct)
  .delete('/:id', publicController.deleteProduct);


exports.router = router;