const AddProductController = require('../../controllers/AddProductController/AddProductController');
const { Product } = require('../../infra/models');
const ProductsRepository = require('../../infra/repositories/ProductsRepository');
const AddProductUseCase = require('./AddProductUseCase');

const product = Product;

const productsRepository = new ProductsRepository(product);

const addProductsUseCase = new AddProductUseCase(productsRepository);

const addProductController = new AddProductController(addProductsUseCase);

module.exports = { addProductController };
