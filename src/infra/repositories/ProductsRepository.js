class ProductsRepository {
  constructor(
    Product,
  ) {
    this.product = Product;
  }

  async add(data) {
    await this.product.create(data);
    return true;
  }
}

module.exports = ProductsRepository;
