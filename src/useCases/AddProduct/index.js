const AddProductController = require('../../controllers/AddProductController/AddProductController');
const Validate = require('../../controllers/validations/Validate');
const { Product } = require('../../infra/models');
const ProductsRepository = require('../../infra/repositories/ProductsRepository');
const AddProductUseCase = require('./AddProductUseCase');

const product = Product;
const validate = new Validate();

const productsRepository = new ProductsRepository(product);

const addProductsUseCase = new AddProductUseCase(productsRepository);

const addProductController = new AddProductController(addProductsUseCase, validate);

module.exports = { addProductController };
