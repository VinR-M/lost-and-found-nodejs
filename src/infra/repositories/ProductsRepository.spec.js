const { expect } = require('chai');
const {
  describe, it, before, beforeEach,
} = require('mocha');
const mongoose = require('mongoose');

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

const mongoId = new mongoose.mongo.ObjectId('56cb91bdc3464f14678934ca');

const mockProduct = {
  _id: mongoId,
  productName: 'any_name',
};

const addProduct = async () => {
  await product.create(mockProduct);
};

const sut = new ProductsRepository(product);

describe('Products Repository', () => {
  it('Should add Product to Database', async () => {
    await sut.add(mockProduct);
    const databaseData = await product.find();
    expect(databaseData.length).to.equal(1);
  });

  it('Should list all Products from Database', async () => {
    addProduct();
    const list = await sut.list();
    expect(list.length).to.equal(1);
  });

  it('Should delete Product from Database', async () => {
    addProduct();
    await sut.delete(mongoId);
    const databaseData = await product.find();
    expect(databaseData.length).to.equal(0);
  });
});
