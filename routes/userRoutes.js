/* eslint-disable import/extensions */
/* eslint-disable object-curly-newline */
// eslint-disable-next-line import/no-import-module-exports
import express from 'express';
import {
  createUser,
  deleteUser,
  getAllUsers,
  getOneUser,
  updateUser,
} from '../controllers/userControlers.js';

const userRouter = express.Router();

userRouter.route('/').get(getAllUsers).post(createUser);
userRouter.route('/:id').get(getOneUser).patch(updateUser).delete(deleteUser);

export default userRouter;
