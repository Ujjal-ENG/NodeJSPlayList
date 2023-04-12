/* eslint-disable import/no-extraneous-dependencies */
import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, 'A food must have a name'],
    unique: true,
  },
  image: String,
  from: String,
  nutrients: String,
  quantity: Number,
  price: {
    type: Number,
    required: [true, 'A food must have price'],
  },
  organic: Boolean,
  description: String,
});

const Food = mongoose.model('Food', foodSchema);
