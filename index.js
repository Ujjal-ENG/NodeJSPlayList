/* eslint-disable comma-dangle */
/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const morgan = require('morgan');

const userRouter = require('./routes/userRoutes');
const foodRouter = require('./routes/foodRoutes');

const app = express();
app.use(express.json());
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

app.get('/', (req, res) => {
  res.status(200).json({ msg: 'hei this the home page..' });
});
// route handlers

// Routes

app.use('/api/v1/foods', foodRouter);
app.use('/api/v1/users', userRouter);

// routes path

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port localhost:${port}`);
});
