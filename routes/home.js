const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

router.get('/', homeController.getIndex)

router.post('/createResult', homeController.createResult)


module.exports = router