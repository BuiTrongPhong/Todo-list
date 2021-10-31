const express = require('express')
const todoController = require('../app/controllers/TodoController')
const homeController = require('../app/controllers/HomeController')
const router = express.Router()
const todo = require('./todo')
const music = require('./music')

router.route('/')
    .get(homeController.index)
router.use('/todos', todo)
router.use('/api/musics', music)

module.exports = router