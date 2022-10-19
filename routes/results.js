const express = require('express')
const router = express.Router()
const resultsController = require('../controllers/results')
const { ensureAuth } = require('../middleware/auth')


router.get('/addGame', ensureAuth, resultsController.addGame)

router.post('/createResult', resultsController.createResult)

router.get('/getResults', ensureAuth, resultsController.getResults)

router.delete('/deleteResult', resultsController.deleteResult)


module.exports = router