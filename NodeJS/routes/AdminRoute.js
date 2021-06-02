const express = require('express')
const route = express.Router()
const {
  timeNow,
  getAllUser,
  getUserById,
  deleteUser,
  addUser,
} = require("../controller/AdminController");

route.get('/time', timeNow);
route.post('/user', addUser);
route.get('/users', getAllUser);
route.get('/user/:id', getUserById);
route.post('/user/:id', deleteUser);


module.exports = route