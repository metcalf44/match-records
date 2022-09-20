const Result = require('../models/Results')

module.exports = {
    getIndex: (req, res) => {
        res.render('index.ejs')
    }, 

}