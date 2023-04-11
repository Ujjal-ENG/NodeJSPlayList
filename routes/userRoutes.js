/* eslint-disable object-curly-newline */
// eslint-disable-next-line import/no-import-module-exports
const express = require('express');
const {
  createUser,
  deleteUser,
  getAllUsers,
  getOneUser,
  updateUser,
} = require('../controllers/userControlers');

const userRouter = express.Router();

userRouter.route('/').get(getAllUsers).post(createUser);
userRouter.route('/:id').get(getOneUser).patch(updateUser).delete(deleteUser);

module.exports = userRouter;
