const SearchProductsController = require('../../controllers/SearchProductsController/SearchProductsController');
const Validate = require('../../controllers/validations/Validate');
const { Product } = require('../../infra/models');
const ProductsRepository = require('../../infra/repositories/ProductsRepository');
const SearchProductsUseCase = require('./SearchProductsUseCase');

const product = Product;
const validate = new Validate();

const productsRepository = new ProductsRepository(product);

const searchProductsUseCase = new SearchProductsUseCase(productsRepository);

const searchProductsController = new SearchProductsController(searchProductsUseCase, validate);

module.exports = { searchProductsController };
