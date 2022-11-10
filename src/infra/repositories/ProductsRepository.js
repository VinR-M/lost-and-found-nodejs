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
    const termsArray = searchTerm.split(' ');
    const termsLike = termsArray.map((term) => (
      new RegExp(term, 'i')
    ));

    const queryProduct = {
      productName: { $in: termsLike },
    };

    if (date) { queryProduct.createdAt = { $gt: date }; }

    const list = await this.product.find(queryProduct);

    return list;
  }
}

module.exports = ProductsRepository;
