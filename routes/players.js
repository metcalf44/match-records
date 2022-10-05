const express = require('express')
const router = express.Router()
const playerController = require('../controllers/players')
const { ensureAuth } = require('../middleware/auth')

router.get('/getPlayers', ensureAuth, playerController.getPlayers)

router.post('/createPlayer', playerController.createPlayer)

router.delete('/deletePlayer', playerController.deletePlayer)

module.exports = router