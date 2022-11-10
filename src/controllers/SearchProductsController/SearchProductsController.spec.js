/* eslint-disable max-classes-per-file */
const { expect, assert } = require('chai');
const { describe, it } = require('mocha');
const sinon = require('sinon');
const { mockSearch, mockProductList } = require('../../utils/mocks');
const SearchProductsController = require('./SearchProductsController');

class SearchProductsUseCaseStub {
  async execute() {
    return Promise.resolve(mockProductList);
  }
}

class Validate {
  searchRequest() { }
}

const validate = new Validate();
const searchProductsUseCase = new SearchProductsUseCaseStub();

const sut = new SearchProductsController(searchProductsUseCase, validate);

describe('Search Products Controller', () => {
  it('should return list of Products', async () => {
    const result = await sut.handle(mockSearch);
    expect(result.body).to.equal(mockProductList);
  });
  it('should return false if error is thrown', async () => {
    sinon.stub(validate, 'searchRequest').throws();
    const result = await sut.handle(mockSearch);
    assert.isFalse(result.ok);
  });
});
