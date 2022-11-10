class AddProductController {
  constructor(
    AddProductUseCase,
    Validate,
  ) {
    this.addProductUseCase = AddProductUseCase;
    this.validate = Validate;
  }

  async handle(req) {
    try {
      this.validate.addRequest(req);

      await this.addProductUseCase.execute(req.body);
      const response = {
        statusCode: 201,
        ok: true,
      };

      return response;
    } catch (error) {
      return {
        statusCode: 400,
        ok: false,
        message: error.message || 'Failed to add Product.',
      };
    }
  }
}

module.exports = AddProductController;
