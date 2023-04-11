/* eslint-disable comma-dangle */
/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const Data = require('./public/dev-data/data.json');

const app = express();
app.get('/', (req, res) => {
  res.status(200).json({ msg: 'hei this the home page..' });
});
app.use(express.json());

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: Data.length,
    Data,
  });
});

app.post('/api/v1/tours', (req, res) => {
  // console.log(req.body);
  const newID = Data[Data.length - 1].id + 1;
  const newData = { id: newID, ...req.body };
  Data.push(newData);
  res.send('Done');
});




app.post('/', (req, res) => {
  res.send('You can post to the endpoint...');
});
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port localhost:${port}`);
});
