class AddProductController {
  constructor(
    AddProductUseCase,
  ) {
    this.addProductUseCase = AddProductUseCase;
  }

  async handle(req) {
    try {
      await this.addProductUseCase.execute(req.body);
      const response = {
        statusCode: 201,
        ok: true,
      };

      return response;
    } catch (error) {
      return {
        statusCode: 500,
        ok: false,
        message: error.message || 'Failed to add Product.',
      };
    }
  }
}

module.exports = AddProductController;
