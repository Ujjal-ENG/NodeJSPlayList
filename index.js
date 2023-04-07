/* eslint-disable comma-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded());

// eslint-disable-next-line arrow-body-style
const loggerWrapper = (options) => {
  // eslint-disable-next-line func-names
  return function (req, res, next) {
    if (options.log) {
      console.log(
        `${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.originalUrl} - ${
          req.protocol
        } - ${req.ip}`
      );
      next();
    } else {
      throw new Error('Mama application kop khaiya gese');
    }
  };
};
app.use(loggerWrapper({ log: false }));

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
