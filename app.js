var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// connect to database
mongoose.connect('mongodb://localhost:27017/callback-newsfeed-db');

var app = express();
// serve all files out of public folder
app.use(express.static('public'));

// parse json bodies in post requests
app.use(bodyParser.json());


// TODO: api routes


app.listen(3000);
console.log('Listening at 127.0.0.1:' + 3000);
