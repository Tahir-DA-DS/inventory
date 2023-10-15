const express = require('express')
const userrouter = express.Router()
const usercontroller = require('../controller/users.controller')


userrouter.post('/signup', usercontroller.signUp)
userrouter.post('/login', usercontroller.logIn)


module.exports = userrouter