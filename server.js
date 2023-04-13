/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from './index.js';

dotenv.config({ path: './config.env' });

const DB = process.env.DB.replace('<PASSWORD>', process.env.DB_PASSWORD);

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
