const express = require('express')
const itemrout = express.Router()

const controller = require('../controllers/items')
const middleware = require('../middleware/middleware')
const auth = require('../auth/validate')

itemrout.get('/', middleware.verifyToken, controller.getAllitems)

itemrout.get('/:_id',middleware.verifyToken, auth.validateLogin, controller.getoneItem)

itemrout.put('/:_id', middleware.checkrole, controller.updateItem)

itemrout.delete('/:_id', middleware.checkrole, controller.deleteItem)

module.exports = itemrout