/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';

const app = express();

app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('This is the post route');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
