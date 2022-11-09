const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = productSchema;
