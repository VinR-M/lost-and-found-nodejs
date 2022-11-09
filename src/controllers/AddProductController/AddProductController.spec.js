const { assert } = require('chai');
const { describe, it } = require('mocha');
const AddProductController = require('./AddProductController');

const mockRequest = {
  body: {
    productName: 'any_name',
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
