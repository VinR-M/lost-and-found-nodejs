const ListProductsController = require('../../controllers/ListProductsController/ListProductsController');
const { Product } = require('../../infra/models');
const ProductsRepository = require('../../infra/repositories/ProductsRepository');
const ListProductsUseCase = require('./ListProductsUseCase');

const product = Product;

const productsRepository = new ProductsRepository(product);

const listProductsUseCase = new ListProductsUseCase(productsRepository);

const listProductsController = new ListProductsController(listProductsUseCase);

module.exports = { listProductsController };
