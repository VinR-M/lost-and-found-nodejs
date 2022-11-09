class DeleteProductUseCase {
  constructor(
    productsRepository,
  ) {
    this.productsRepository = productsRepository;
  }

  async execute({ id }) {
    const isDeleted = await this.productsRepository.delete(id);

    if (!isDeleted) { throw new Error('Failed to delete Product.'); }

    return true;
  }
}

module.exports = DeleteProductUseCase;
