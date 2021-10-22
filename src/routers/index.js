const express = require('express')
const todoController = require('../app/controllers/TodoController')
const homeController = require('../app/controllers/HomeController')
const router = express.Router()
const todo = require('./todo')

router.route('/')
    .get(homeController.index)
router.use('/todos', todo)

module.exports = router