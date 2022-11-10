/* eslint-disable max-classes-per-file */
const { assert } = require('chai');
const { describe, it } = require('mocha');
const sinon = require('sinon');
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

class Validate {
  deleteRequest() { }
}

const validate = new Validate();
const deleteProductUseCase = new DeleteProductUseCaseStub();

const sut = new DeleteProductController(deleteProductUseCase, validate);

describe('Delete Product Controller', () => {
  it('should return true if Product is deleted', async () => {
    const result = await sut.handle(mockRequest);
    assert.isTrue(result.ok);
  });
  it('should return false if error is thrown', async () => {
    sinon.stub(validate, 'deleteRequest').throws();
    const result = await sut.handle(mockRequest);
    assert.isFalse(result.ok);
  });
});
