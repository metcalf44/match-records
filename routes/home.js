const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

router.get('/', homeController.getIndex)


// router.delete('/deleteResult', homeController.deleteResult)

module.exports = router