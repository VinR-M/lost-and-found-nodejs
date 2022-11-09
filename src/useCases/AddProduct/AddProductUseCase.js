class AddProductUseCase {
  constructor(
    productsRepository,
  ) {
    this.productsRepository = productsRepository;
  }

  async execute(data) {
    const isAdded = await this.productsRepository.add(data);

    if (!isAdded) { throw new Error('Failed to add Product.'); }

    return true;
  }
}

module.exports = AddProductUseCase;
