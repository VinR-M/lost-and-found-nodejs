const { assert } = require('chai');
const { describe, it } = require('mocha');
const DeleteProductUseCase = require('./DeleteProductUseCase');

const mockProduct = {
  id: 'any_id',
};

class ProductsRepositoryStub {
  async delete() {
    return Promise.resolve(true);
  }
}

const productsRepository = new ProductsRepositoryStub();

const sut = new DeleteProductUseCase(productsRepository);

describe('Delete Product Use Case', () => {
  it('should return true if product is deleted', async () => {
    const result = await sut.execute(mockProduct);
    assert.isTrue(result);
  });
  // Error tests
});
