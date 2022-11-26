const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  type: { type: String, required: true, trim: true },
  brand: { type: String, trim: true },
  color: { type: String, trim: true },
  foundAt: { type: Date, default: Date.now },
});

productSchema.index({ type: 'text', brand: 'text', color: 'text' });

module.exports = productSchema;
