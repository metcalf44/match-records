const express = require('express')
const router = express.Router()
const resultsController = require('../controllers/results')
const { ensureAuth } = require('../middleware/auth')


router.get('/addGame', resultsController.addGame)

router.post('/createResult', resultsController.createResult)

router.get('/getResults', resultsController.getResults)

router.delete('/deleteResult', resultsController.deleteResult)

module.exports = router