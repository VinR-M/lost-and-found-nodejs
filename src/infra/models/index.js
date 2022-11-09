/* eslint-disable strict */
/**
* DB models.
*/

'use strict';

const mongoose = require('mongoose');
const productSchema = require('./Products');

const Product = mongoose.model('products', productSchema);

module.exports = { Product };
