const express = require('express')
const useroute = express.Router()

const controller = require('../controllers/users')
const middleware = require('../middleware/middleware')
const auth = require('../auth/validate')

useroute.post('/signup', auth.checkSignup, controller.SignupUser)

useroute.get('/login', controller.loginUser)

module.exports = useroute