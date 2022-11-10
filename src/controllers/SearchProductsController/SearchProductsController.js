class SearchProductsController {
  constructor(
    SearchProductsUseCase,
  ) {
    this.searchProductsUseCase = SearchProductsUseCase;
  }

  async handle(req) {
    try {
      const data = await this.searchProductsUseCase.execute(req.body);
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
        message: error.message || 'Failed to find Products.',
      };
    }
  }
}

module.exports = SearchProductsController;
