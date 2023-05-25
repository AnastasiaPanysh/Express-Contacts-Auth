const express = require('express')
const route = require('./controller/user.controller')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

app.use('/user', route)

module.exports = app