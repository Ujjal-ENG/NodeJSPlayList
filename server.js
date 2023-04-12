/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from './index.js';

dotenv.config({ path: './config.env' });

const DB = process.env.DB.replace('<PASSWORD>', process.env.DB_PASSWORD);

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

const testFood = new Food({
  productName: 'Sweet Corncobs',
  image: '🌽',
  from: 'Germany',
  nutrients: 'Vitamin C, Magnesium',
  quantity: '2',
  price: '2.00',
  organic: false,
  description:
    'Also known as maize, corn is one of the most popular cereal grains in the world. Popcorn and sweet corn are commonly eaten varieties, but refined corn products are also widely consumed, frequently as ingredients in foods. These include tortillas, tortilla chips, polenta, cornmeal, corn flour, corn syrup, and corn oil. Whole-grain corn is as healthy as any cereal grain, rich in fiber and many vitamins, minerals, and antioxidants.',
});

testFood.save();
mongoose
  .connect(DB, {
    useNewURLParser: true,
  })
  .then(() => {
    console.log('DB COnnection Successfull');
  });
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port localhost:${port}`);
});
