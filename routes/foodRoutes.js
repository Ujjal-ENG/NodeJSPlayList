/* eslint-disable import/no-import-module-exports */
const express = require('express');
const {
  createFoodData,
  deleteDataBasedOnID,
  findSpecificIDData,
  getAllFoods,
  updateDataBasedOnID,
  checkID,
} = require('../controllers/foodControlers');

const foodRouter = express.Router();
foodRouter.param('id', checkID);

foodRouter.route('/').get(getAllFoods).post(createFoodData);

foodRouter
  .route('/:id')
  .get(findSpecificIDData)
  .patch(updateDataBasedOnID)
  .delete(deleteDataBasedOnID);

module.exports = foodRouter;
