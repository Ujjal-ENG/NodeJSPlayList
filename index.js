/* eslint-disable comma-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded());
const logger = (req, res, next) => {
  console.log(
    `${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.originalUrl} - ${
      req.protocol
    } - ${req.ip}`
  );
  throw new Error('Mama application kop khaiya gese');
};
app.use(logger);
app.get('/about', (req, res) => {
  res.send('About');
  res.end();
});
app.all('/*', (req, res) => {
  res.send('This is the kopa Kopi path which is not valid path!!');
});

const errorMiddleWare = (err, req, res, next) => {
  res.send('There was serbver site error');
  next();
};
app.use(errorMiddleWare);
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
