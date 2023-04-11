/* eslint-disable comma-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';

const app = express();
app.get('/', (req, res) => {
  res.status(200).json({ msg: 'hei this the home page..' });
});

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json('THis is the fisrt tours api');
});
app.post('/', (req, res) => {
  res.send('You can post to the endpoint...');
});
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port localhost:${port}`);
});
