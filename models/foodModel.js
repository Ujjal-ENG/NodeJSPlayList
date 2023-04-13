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
  organic: {
    type: Boolean,
    required: [true, 'Organic Type must needed for identify goog food and sell high price'],
  },
  description: {
    type: String,
    trim: true,
    required: [true, 'Description Must needed to know about the food easily'],
  },
});

const Food = mongoose.model('Food', foodSchema);
export default Food;
