const { expect } = require('chai');
const {
  describe, it, before, beforeEach,
} = require('mocha');
const mongoose = require('mongoose');

const moment = require('moment');
const { Product } = require('../models');
const ProductsRepository = require('./ProductsRepository');

const connectToDatabase = require('../../server/setup/mongoose');
const { mockSearch, mockSearchWithoutDate } = require('../../utils/mocks');

const product = Product;

before(async () => connectToDatabase());

beforeEach(async () => {
  await product.deleteMany();
});

// after(() => {
// runs once after the last test in this block
// });

const mongoId = new mongoose.mongo.ObjectId('56cb91bdc3464f14678934ca');
const mongoIdTwo = new mongoose.mongo.ObjectId('56cb91bdc3464f14678934cb');

const mockProduct = {
  _id: mongoId,
  type: 'any_type',
};

const mockTwoProducts = [
  {
    _id: mongoId,
    type: 'any_type',
    foundAt: moment().subtract(3, 'hours').format(),
  },
  {
    _id: mongoIdTwo,
    type: 'any_other_type',
  }];

const addProduct = async () => {
  await product.create(mockProduct);
};

const addTwoProducts = async () => {
  await product.insertMany(mockTwoProducts);
};

const sut = new ProductsRepository(product);

describe('Products Repository', () => {
  it('Should Add Product to Database', async () => {
    await sut.add(mockProduct);
    const databaseData = await product.find();
    expect(databaseData.length).to.equal(1);
  });

  it('Should List all Products from Database', async () => {
    addProduct();
    const list = await sut.list();
    expect(list.length).to.equal(1);
  });

  it('Should Delete Product from Database', async () => {
    addProduct();
    await sut.delete(mongoId);
    const databaseData = await product.find();
    expect(databaseData.length).to.equal(0);
  });

  describe('Search Method', () => {
    it('Should list all Products matched with only Search Terms', async () => {
      addTwoProducts();
      const list = await sut.search(mockSearchWithoutDate);
      expect(list.length).to.equal(2);
    });

    it('Should list all Products matched with Search Terms and with Added date greater than lost date ', async () => {
      addTwoProducts();
      const list = await sut.search(mockSearch);
      expect(list.length).to.equal(1);
    });
  });
});
