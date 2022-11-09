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

  async delete(id) {
    await this.product.deleteOne({ _id: id });
    return true;
  }
}

module.exports = ProductsRepository;
