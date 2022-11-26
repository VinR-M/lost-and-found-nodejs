const moment = require('moment');

const mockProductList = {
  body: [
    {
      type: 'any_type',
      brand: 'any_brand',
      foundAt: Date.now(),
    },
    {
      type: 'any_other_type',
      color: 'any_color',
      foundAt: Date.now(),
    },
  ],
};

const mockSearch = {
  searchTerm: 'any_type any_other_type',
  date: moment().subtract(1, 'hour').format(),
};
const mockSearchWithoutDate = {
  searchTerm: 'any_type any_other_type',
};

module.exports = { mockProductList, mockSearch, mockSearchWithoutDate };
