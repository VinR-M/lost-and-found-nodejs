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
        statusCode: 403,
        ok: false,
        message: error.message || 'Failed to add Product.',
      };
    }
  }
}

module.exports = ListProductsController;
