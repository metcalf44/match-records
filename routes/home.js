const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

// router.get('/', homeController.getHome)

router.post('/createEntry', homeController.createEntry)

router.get('/', homeController.getResults)


// router.delete('/deleteResult', homeController.deleteResult)

module.exports = router