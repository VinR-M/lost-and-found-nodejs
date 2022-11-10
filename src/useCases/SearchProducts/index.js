const SearchProductsController = require('../../controllers/SearchProductsController/SearchProductsController');
const { Product } = require('../../infra/models');
const ProductsRepository = require('../../infra/repositories/ProductsRepository');
const SearchProductsUseCase = require('./SearchProductsUseCase');

const product = Product;

const productsRepository = new ProductsRepository(product);

const searchProductsUseCase = new SearchProductsUseCase(productsRepository);

const searchProductsController = new SearchProductsController(searchProductsUseCase);

module.exports = { searchProductsController };
