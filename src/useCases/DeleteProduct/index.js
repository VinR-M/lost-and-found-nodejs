const DeleteProductController = require('../../controllers/DeleteProductController/DeleteProductController');
const { Product } = require('../../infra/models');
const ProductsRepository = require('../../infra/repositories/ProductsRepository');
const DeleteProductUseCase = require('./DeleteProductUseCase');

const product = Product;

const productsRepository = new ProductsRepository(product);

const deleteProductsUseCase = new DeleteProductUseCase(productsRepository);

const deleteProductController = new DeleteProductController(deleteProductsUseCase);

module.exports = { deleteProductController };
