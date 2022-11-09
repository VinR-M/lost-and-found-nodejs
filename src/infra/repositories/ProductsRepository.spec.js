const { expect } = require('chai');
const {
  describe, it, before, beforeEach,
} = require('mocha');
const { Product } = require('../models');
const ProductsRepository = require('./ProductsRepository');

const connectToDatabase = require('../../server/setup/mongoose');

const product = Product;

before(async () => connectToDatabase());

beforeEach(async () => {
  await product.deleteMany();
});

// after(() => {
// runs once after the last test in this block
// });

const mockProduct = {
  productName: 'any_name',
};

const sut = new ProductsRepository(product);

describe('Products Repository', () => {
  it('Should add Product to Database', async () => {
    await sut.add(mockProduct);
    const databaseData = await product.find();
    expect(databaseData.length).to.equal(1);
  });
});
