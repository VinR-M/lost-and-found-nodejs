const { expect } = require('chai');
const { describe, it } = require('mocha');
const { mockSearch, mockProductList } = require('../../utils/mocks');
const SearchProductsController = require('./SearchProductsController');

class SearchProductsUseCaseStub {
  async execute() {
    return Promise.resolve(mockProductList);
  }
}

const searchProductsUseCase = new SearchProductsUseCaseStub();

const sut = new SearchProductsController(searchProductsUseCase);

describe('Search Products Controller', () => {
  it('should return list of Products', async () => {
    const result = await sut.handle(mockSearch);
    expect(result.body).to.equal(mockProductList);
  });
});
