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

  async list() {
    const list = await this.product.find();
    return list;
  }
}

module.exports = ProductsRepository;
