const express = require('express')
const router = express.Router()
const resultsController = require('../controllers/results')

router.get('/', resultsController.getResults)

router.delete('/deleteResult', resultsController.deleteResult)

module.exports = router