const DeleteProductController = require('../../controllers/DeleteProductController/DeleteProductController');
const Validate = require('../../controllers/validations/Validate');
const { Product } = require('../../infra/models');
const ProductsRepository = require('../../infra/repositories/ProductsRepository');
const DeleteProductUseCase = require('./DeleteProductUseCase');

const product = Product;
const validate = new Validate();

const productsRepository = new ProductsRepository(product);

const deleteProductsUseCase = new DeleteProductUseCase(productsRepository);

const deleteProductController = new DeleteProductController(deleteProductsUseCase, validate);

module.exports = { deleteProductController };
