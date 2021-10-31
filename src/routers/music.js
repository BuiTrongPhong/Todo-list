const express = require('express')
const musicController = require('../app/controllers/api/MusicController')
const router = new express.Router()

router.route('/')
    .get(musicController.index)
module.exports = router