class DeleteProductController {
  constructor(
    DeleteProductUseCase,
    Validate,
  ) {
    this.deleteProductUseCase = DeleteProductUseCase;
    this.validate = Validate;
  }

  async handle(req) {
    try {
      this.validate.deleteRequest(req);

      await this.deleteProductUseCase.execute(req.body);
      const response = {
        statusCode: 200,
        ok: true,
      };

      return response;
    } catch (error) {
      return {
        statusCode: 400,
        ok: false,
        message: error.message || 'Failed to delete Product.',
      };
    }
  }
}

module.exports = DeleteProductController;
