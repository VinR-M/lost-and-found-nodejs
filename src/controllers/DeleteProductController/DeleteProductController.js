class DeleteProductController {
  constructor(
    DeleteProductUseCase,
  ) {
    this.deleteProductUseCase = DeleteProductUseCase;
  }

  async handle(res) {
    try {
      await this.deleteProductUseCase.execute(res.body);
      const response = {
        statusCode: 200,
        ok: true,
      };

      return response;
    } catch (error) {
      return {
        statusCode: 500,
        ok: false,
        message: error.message || 'Failed to delete Product.',
      };
    }
  }
}

module.exports = DeleteProductController;
