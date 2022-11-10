const { expect } = require('chai');
const { describe, it } = require('mocha');
const { mockProductList, mockSearch } = require('../../utils/mocks');
const SearchProductsUseCase = require('./SearchProductsUseCase');

class ProductsRepositoryStub {
  async search() {
    return Promise.resolve(mockProductList);
  }
}

const productsRepository = new ProductsRepositoryStub();

const sut = new SearchProductsUseCase(productsRepository);

describe('Search Products Use Case', () => {
  it('should return list of Products', async () => {
    const result = await sut.execute(mockSearch);
    expect(result).to.equal(mockProductList);
  });
  // Error tests
});
