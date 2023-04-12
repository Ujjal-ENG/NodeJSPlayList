/* eslint-disable import/extensions */
/* eslint-disable prettier/prettier */
import { Router } from 'express';
import {
  chceckBody, checkID,
  createFoodData,
  deleteDataBasedOnID,
  findSpecificIDData,
  getAllFoods,
  updateDataBasedOnID,
} from '../controllers/foodControlers.js';

const foodRouter = Router();
foodRouter.param('id', checkID);

foodRouter.route('/').get(getAllFoods).post(chceckBody, createFoodData);

foodRouter
  .route('/:id')
  .get(findSpecificIDData)
  .patch(updateDataBasedOnID)
  .delete(deleteDataBasedOnID);

export default foodRouter;
