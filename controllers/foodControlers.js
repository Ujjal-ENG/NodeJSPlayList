/* eslint-disable import/extensions */
/* eslint-disable prettier/prettier */


/* eslint-disable linebreak-style */

const getAllFoods = (req, res) => {
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,

  });
};

const createFoodData = async (req, res) => {
  // console.log(req.body);
  // try {
  //   const newFood = await Food.create(req.body);
  //   res.status(201).json({
  //     status: 'success',
  //     data: {
  //       food: newFood,
  //     },
  //   });
  // } catch (error) {
  //   res.status(400).json({
  //     status: 'fail',
  //     message: error,
  //   });
  // }
};

const findSpecificIDData = (req, res) => {
  // const findData = data.find((el) => el.id === req.params.id * 1);
  // res.status(200).json({
  //   status: 'success',
  //   data: {
  //     findData,
  //   },
  // });
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
};
