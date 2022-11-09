const { assert } = require('chai');
const { describe, it } = require('mocha');
const AddProductController = require('./AddProductController');

const mockRequest = {
  body: {
    productId: 'any_id',
    productName: 'any_name',
    productCreatedAt: 'any_date',
  },
};

class AddProductUseCaseStub {
  async execute() {
    return Promise.resolve(true);
  }
}

const addProductUseCase = new AddProductUseCaseStub();

const sut = new AddProductController(addProductUseCase);

describe('Add Product Controller', () => {
  it('should return true if product is added', async () => {
    const result = await sut.handle(mockRequest);
    assert.isTrue(result.ok);
  });
});
