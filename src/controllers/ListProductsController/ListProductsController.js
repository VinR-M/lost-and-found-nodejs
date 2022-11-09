class ListProductsController {
  constructor(
    ListProductsUseCase,
  ) {
    this.listProductsUseCase = ListProductsUseCase;
  }

  async handle() {
    try {
      const data = await this.listProductsUseCase.execute();
      const response = {
        statusCode: 200,
        ok: true,
        body: data,
      };

      return response;
    } catch (error) {
      return {
        statusCode: 500,
        ok: false,
        message: error.message || 'Failed to list Products.',
      };
    }
  }
}

module.exports = ListProductsController;
