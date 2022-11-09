const { assert } = require('chai');
const { describe, it } = require('mocha');
const AddProductUseCase = require('./AddProductUseCase');

const mockProduct = {
  id: 'any_id',
  name: 'any_name',
};

class ProductsRepositoryStub {
  async add() {
    return Promise.resolve(true);
  }
}

const productsRepository = new ProductsRepositoryStub();

const sut = new AddProductUseCase(productsRepository);

describe('Add Product Use Case', () => {
  it('should return true if product is added', async () => {
    const result = await sut.execute(mockProduct);
    assert.isTrue(result);
  });
});
