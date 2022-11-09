class ListProductsUseCase {
  constructor(
    productsRepository,
  ) {
    this.productsRepository = productsRepository;
  }

  async execute() {
    const list = await this.productsRepository.list();

    if (!list) { throw new Error('Failed to list Products.'); }

    return list;
  }
}

module.exports = ListProductsUseCase;
