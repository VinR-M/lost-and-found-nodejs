/* eslint-disable strict */
/**
* App routes definitions.
*/

'use strict';

const express = require('express');
const { addProductController } = require('../../useCases/AddProduct');
const { deleteProductController } = require('../../useCases/DeleteProduct');
const { listProductsController } = require('../../useCases/ListProducts');

const router = express.Router();

router.get('/listProducts', async (req, res) => {
  const response = await listProductsController.handle();
  return res.status(response.statusCode).json(response.body);
});
router.post('/addProduct', async (req, res) => {
  const response = await addProductController.handle(req);
  return res.status(response.statusCode).json(response.ok); // Change Response
});
router.delete('/deleteProduct', async (req, res) => {
  const response = await deleteProductController.handle(req);
  return res.status(response.statusCode).json(response.ok); // Change Response
});
// router.get('/searchProduct', (req, res) => searchProductController.handle(req, res));

// router.post('/signin', (req, res) => signinController.handle(req, res));
// router.post('/register', (req, res) => registerController.handle(req, res));

module.exports = router;
