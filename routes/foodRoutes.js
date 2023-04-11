/* eslint-disable import/no-import-module-exports */
const express = require('express');
const {
  createFoodData,
  deleteDataBasedOnID,
  findSpecificIDData,
  getAllFoods,
  updateDataBasedOnID,
} = require('../controllers/foodControlers');

const router = express.Router();

router.route('/').get(getAllFoods).post(createFoodData);

router.route('/:id').get(findSpecificIDData).patch(updateDataBasedOnID).delete(deleteDataBasedOnID);

module.exports = router;
