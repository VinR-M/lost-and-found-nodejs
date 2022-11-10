/* eslint-disable strict */
/**
* App routes definitions.
*/

'use strict';

const express = require('express');
const { addProductController } = require('../../useCases/AddProduct');
const { deleteProductController } = require('../../useCases/DeleteProduct');
const { listProductsController } = require('../../useCases/ListProducts');
const { searchProductsController } = require('../../useCases/SearchProducts');

const router = express.Router();

router.get('/listProducts', async (req, res) => {
  const response = await listProductsController.handle();

  if (!response.ok) { return res.status(response.statusCode).send(response.message); }
  return res.status(response.statusCode).json(response.body);
});
router.post('/addProduct', async (req, res) => {
  const response = await addProductController.handle(req);

  if (!response.ok) { return res.status(response.statusCode).send(response.message); }
  return res.status(response.statusCode).send('Product Added.');
});
router.delete('/deleteProduct', async (req, res) => {
  const response = await deleteProductController.handle(req);

  if (!response.ok) { return res.status(response.statusCode).send(response.message); }
  return res.status(response.statusCode).send('Product Deleted.');
});
router.post('/searchProduct', async (req, res) => {
  const response = await searchProductsController.handle(req);

  if (!response.ok) { return res.status(response.statusCode).send(response.message); }
  return res.status(response.statusCode).json(response.body);
});

// router.post('/signin', (req, res) => signinController.handle(req, res));
// router.post('/register', (req, res) => registerController.handle(req, res));

module.exports = router;
