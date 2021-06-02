const express = require('express');
const route = express.Router();

const usercontroller = require('../controller/UserController');

route.get('/users', usercontroller.getUsers);
route.get('/users/:id', usercontroller.getUserId);
route.get('/isexist', usercontroller.isExist);

route.post('/newuser', usercontroller.addNewUser);
route.post('/deleteuser/:id', usercontroller.deleteUser);

route.get('/time', async(req, res) => {
    res.json({
        message: 'ok',
        result: Date.now()
    })
})

module.exports = route;