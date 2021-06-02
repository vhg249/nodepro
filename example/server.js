const express = require('express')

const userRoute = require('./routes/UserRoute')

app = express()

app.use(express.json())

app.use('/api/v1', userRoute)

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
})

app.listen(3000)