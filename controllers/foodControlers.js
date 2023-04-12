/* eslint-disable prettier/prettier */
/* eslint-disable linebreak-style */
import Data from '../public/dev-data/data.json' assert { type: 'json' };



const checkID = (req, res, next, val) => {
  if (Data.length - 1 < val * 1) {
    return res.status(404).json({
      status: 'Not Found Error',
      msg: 'Plese try again letter or request another valid id!!!',
    });
  }
  next();
};

const chceckBody = (req, res, next) => {
  if (!req.body.productName || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      message: 'Missing Name or Price property!!!',
    });
  }
  next();
};

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
  const findData = Data.find((el) => el.id === req.params.id * 1);
  res.status(200).json({
    status: 'success',
    data: {
      findData,
    },
  });
};

const updateDataBasedOnID = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      data: 'Data is updated!!',
    },
  });
};
const deleteDataBasedOnID = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      data: 'Data is Deleted!!',
    },
  });
};

export {
  getAllFoods,
  createFoodData,
  findSpecificIDData,
  updateDataBasedOnID,
  deleteDataBasedOnID,
  checkID,
  chceckBody,
};
