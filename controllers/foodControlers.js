/* eslint-disable import/extensions */
/* eslint-disable prettier/prettier */

import Food from '../models/foodModel.js';

/* eslint-disable linebreak-style */

const getAllFoods = async (req, res) => {
  try {
    const foods = await Food.find();
    res.status(200).json({
      status: 'success',
      results: foods.length,
      data: {
        foods,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      message: error,
    });
  }
};

const createFoodData = async (req, res) => {
  // console.log(req.body);
  try {
    const newFood = await Food.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        food: newFood,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

const findSpecificIDData = async (req, res) => {
  try {
    const data = await Food.findById(req.params.id);
    res.status(201).json({
      status: 'success',
      data,
    });
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      message: error,
    });
  }
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
