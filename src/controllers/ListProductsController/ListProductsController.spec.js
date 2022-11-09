const { expect } = require('chai');
const { describe, it } = require('mocha');
const { mockProductList } = require('../../utils/mocks');
const ListProductsController = require('./ListProductsController');

class ListProductsUseCaseStub {
  async execute() {
    return Promise.resolve(mockProductList);
  }
}

const listProductsUseCase = new ListProductsUseCaseStub();

const sut = new ListProductsController(listProductsUseCase);

describe('List Products Controller', () => {
  it('should return list of Products', async () => {
    const result = await sut.handle();
    expect(result.body).to.equal(mockProductList);
  });
});
