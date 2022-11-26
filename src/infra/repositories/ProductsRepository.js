/* eslint-disable no-useless-escape */
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

  async search({ searchTerm, date }) {
    const queryProduct = {
      $text: { $search: searchTerm },
    };

    if (date) { queryProduct.foundAt = { $gt: date }; }

    const list = await this.product.find(queryProduct);

    return list;
  }
}

module.exports = ProductsRepository;
