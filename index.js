/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded());

const myMiddleWare = (req, res, next) => {
  console.log('I am logging');
  next();
};

app.use(myMiddleWare);

app.get('/about', (req, res) => {
  res.send('About');
});

app.all('/*', (req, res) => {
  res.send('This is the kopa Kopi path which is not valid path!!');
});
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
