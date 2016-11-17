const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// connect to database
mongoose.connect('mongodb://localhost:27017/callback-newsfeed-db')

const server = express()
// serve all files out of public folder
server.use(express.static('public'))

// parse json bodies in post requests
server.use(bodyParser.json())

// TODO: api routes

server.listen(3000)
console.log('Listening at 127.0.0.1:' + 3000)
