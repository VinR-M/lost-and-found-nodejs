const { expect } = require('chai');
const { describe, it } = require('mocha');
const { mockProductList } = require('../../utils/mocks');
const ListProductsUseCase = require('./ListProductsUseCase');

class ProductsRepositoryStub {
  async list() {
    return Promise.resolve(mockProductList);
  }
}

const productsRepository = new ProductsRepositoryStub();

const sut = new ListProductsUseCase(productsRepository);

describe('List Products Use Case', () => {
  it('should return list of Products', async () => {
    const result = await sut.execute();
    expect(result).to.equal(mockProductList);
  });
  // Error tests
});
