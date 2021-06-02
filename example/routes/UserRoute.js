const express = require('express')
const route = express.Router()

const usercontroller = require('../controller/UserController')

route.get('/users/:id', usercontroller.check, usercontroller.getUserId)

route.post('/users', async (req, res) => {
    var rs = req.body
    console.log(rs)
    res.json(rs)
})

module.exports = route