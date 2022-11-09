/* eslint-disable strict */
/**
* App routes definitions.
*/

'use strict';

const express = require('express');
const { addProductController } = require('../../useCases/AddProduct');

const router = express.Router();

// router.get('/listProducts', (req, res) => listProductsController.handle(req, res));
router.post('/addProduct', async (req, res) => {
  const response = await addProductController.handle(req);
  return res.status(response.statusCode).json(response.ok); // Change Response
});
// router.delete('/deleteProduct', (req, res) => deleteProductController.handle(req, res));
// router.get('/searchProduct', (req, res) => searchProductController.handle(req, res));

// router.post('/signin', (req, res) => signinController.handle(req, res));
// router.post('/register', (req, res) => registerController.handle(req, res));

module.exports = router;
