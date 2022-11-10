class SearchProductsUseCase {
  constructor(
    productsRepository,
  ) {
    this.productsRepository = productsRepository;
  }

  async execute(product) {
    const list = await this.productsRepository.search(product);

    if (!list) { throw new Error('Failed to find Product.'); }

    return list;
  }
}

module.exports = SearchProductsUseCase;
