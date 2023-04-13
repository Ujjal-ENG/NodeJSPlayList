/* eslint-disable import/extensions */
/* eslint-disable comma-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import express, { json } from 'express';
import morgan from 'morgan';

import foodRouter from './routes/foodRoutes.js';
import userRouter from './routes/userRoutes.js';

const app = express();
app.use(json());
app.use(morgan('dev'));

// first middlewares
app.use((req, res, next) => {
  console.log('This is the Middleware here 🙋‍♀️ 🙋‍♀️');
  next();
});
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
// Routes
app.use('/api/v1/foods', foodRouter);
app.use('/api/v1/users', userRouter);

export default app;
