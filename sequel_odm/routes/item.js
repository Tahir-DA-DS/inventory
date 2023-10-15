const express = require('express')
const itemrouter = express.Router()
const itemcontroller = require('../controller/item')
const userrout = require('./user')
const check = require('../middleware/middleware')


itemrouter.post('/', itemcontroller.createItem)
itemrouter.get('/', itemcontroller.getAll)
itemrouter.put('/:id', itemcontroller.updateItem)
itemrouter.get('/:id', itemcontroller.getOne)
itemrouter.delete('/:id', check.roleCheck, itemcontroller.deleteItem)

module.exports = itemrouter 