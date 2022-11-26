/* eslint-disable max-classes-per-file */
const { assert } = require('chai');
const { describe, it } = require('mocha');
const sinon = require('sinon');
const AddProductController = require('./AddProductController');

const mockRequest = {
  body: {
    type: 'any_name',
  },
};

class AddProductUseCaseStub {
  async execute() {
    return Promise.resolve(true);
  }
}

class Validate {
  addRequest() { }
}

const validate = new Validate();
const addProductUseCase = new AddProductUseCaseStub();

const sut = new AddProductController(addProductUseCase, validate);

describe('Add Product Controller', () => {
  it('should return true if product is added', async () => {
    const result = await sut.handle(mockRequest);
    assert.isTrue(result.ok);
  });
  it('should return false if error is thrown', async () => {
    sinon.stub(validate, 'addRequest').throws();
    const result = await sut.handle(mockRequest);
    assert.isFalse(result.ok);
  });
});
