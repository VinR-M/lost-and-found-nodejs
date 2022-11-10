class SearchProductsController {
  constructor(
    SearchProductsUseCase,
    Validate,
  ) {
    this.searchProductsUseCase = SearchProductsUseCase;
    this.validate = Validate;
  }

  async handle(req) {
    try {
      this.validate.searchRequest(req);
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
