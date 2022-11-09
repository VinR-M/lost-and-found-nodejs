const { assert } = require('chai');
const { describe, it } = require('mocha');
const DeleteProductController = require('./DeleteProductController');

const mockRequest = {
  body: {
    id: 'any_id',
  },
};

class DeleteProductUseCaseStub {
  async execute() {
    return Promise.resolve(true);
  }
}

const deleteProductUseCase = new DeleteProductUseCaseStub();

const sut = new DeleteProductController(deleteProductUseCase);

describe('Delete Product Controller', () => {
  it('should return true if Product is deleted', async () => {
    const result = await sut.handle(mockRequest);
    assert.isTrue(result.ok);
  });
});
