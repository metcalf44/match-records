const express = require('express')
const router = express.Router()
const resultEntryController = require('../controllers/resultEntry')

// router.get('/', resultEntryController.resultEntry)

// router.post('/createResult', resultEntryController.createResult)

router.get('/', resultEntryController.getResults)



module.exports = router