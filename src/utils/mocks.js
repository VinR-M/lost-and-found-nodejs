const moment = require('moment');

const mockProductList = {
  body: [
    {
      productName: 'any_name',
      createdAt: Date.now(),
    },
    {
      productName: 'any_other_name',
      createdAt: Date.now(),
    },
  ],
};

const mockSearch = {
  searchTerm: 'any_name any_other_name',
  date: moment().subtract(1, 'hour').format(),
};
const mockSearchWithoutDate = {
  searchTerm: 'any_name any_other_name',
};

module.exports = { mockProductList, mockSearch, mockSearchWithoutDate };
