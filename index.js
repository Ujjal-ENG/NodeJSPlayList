/* eslint-disable comma-dangle */
/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const morgan = require('morgan');
const Data = require('./public/dev-data/data.json');

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
const getAllFoods = (req, res) => {
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: Data.length,
    Data,
  });
};

const createFoodData = (req, res) => {
  // console.log(req.body);
  const newID = Data[Data.length - 1].id + 1;
  const newData = { id: newID, ...req.body };
  Data.push(newData);
  res.send('Done');
};

const findSpecificIDData = (req, res) => {
  const foundId = req.params.id * 1;
  const findData = Data.find((el) => el.id === foundId);
  if (!findData) {
    res.status(404).json({
      status: 'Not Found Error',
      msg: 'Plese try again letter or request another valid id!!!',
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      findData,
    },
  });
};

const updateDataBasedOnID = (req, res) => {
  if (Data.length - 1 < req.params.id * 1) {
    res.status(404).json({
      status: 'Not Found Error',
      msg: 'Plese try again letter or request another valid id!!!',
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      data: 'Data is updated!!',
    },
  });
};
const deleteDataBasedOnID = (req, res) => {
  if (Data.length - 1 < req.params.id * 1) {
    res.status(404).json({
      status: 'Not Found Error',
      msg: 'Plese try again letter or request another valid id!!!',
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      data: 'Data is Deleted!!',
    },
  });
};
// routes path
app.route('/api/v1/foods').get(getAllFoods).post(createFoodData);

app
  .route('/api/v1/foods/:id')
  .get(findSpecificIDData)
  .patch(updateDataBasedOnID)
  .delete(deleteDataBasedOnID);

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port localhost:${port}`);
});
