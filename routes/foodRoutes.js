/* eslint-disable import/extensions */
/* eslint-disable prettier/prettier */
import { Router } from 'express';
import {
  createFoodData,
  deleteDataBasedOnID,
  findSpecificIDData,
  getAllFoods,
  updateDataBasedOnID,
} from '../controllers/foodControlers.js';

const foodRouter = Router();

foodRouter.route('/').get(getAllFoods).post(createFoodData);

foodRouter
  .route('/:id')
  .get(findSpecificIDData)
  .patch(updateDataBasedOnID)
  .delete(deleteDataBasedOnID);

export default foodRouter;
