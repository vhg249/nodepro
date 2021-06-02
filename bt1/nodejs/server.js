const express = require('express');
const http = require('http');
const userRoute = require('./routes/user');
var bodyParser = require('body-parser');

const app = express();
let port = 3000;

app.use(express.json());
app.use('/api/v1', userRoute);

var server = http.createServer(app);

server.listen(port);