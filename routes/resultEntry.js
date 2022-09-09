const express = require('express')
const router = express.Router()
const resultEntryController = require('../controllers/resultEntry')

router.get('/resultEntry', resultEntryController.resultEntry)

router.post('/createResult', resultEntryController.createResult)

module.exports = router