/* eslint-disable import/no-import-module-exports */
const express = require('express');
const {
  createFoodData,
  deleteDataBasedOnID,
  findSpecificIDData,
  getAllFoods,
  updateDataBasedOnID,
  checkID,
  chceckBody,
} = require('../controllers/foodControlers');

const foodRouter = express.Router();
foodRouter.param('id', checkID);

foodRouter.route('/').get(getAllFoods).post(chceckBody, createFoodData);

foodRouter
  .route('/:id')
  .get(findSpecificIDData)
  .patch(updateDataBasedOnID)
  .delete(deleteDataBasedOnID);

module.exports = foodRouter;
