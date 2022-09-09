const Result = require('../models/ResultsEntry')

module.exports = {
    resultEntry: async (req, res) => {
        res.render('resultEntry.ejs')
    },

    createResult: async (req, res) => {
        try{
            await Result.create({result: req.body.results})
            console.log('Result has been added')
            res.redirect('/')
        } catch(err) {
            console.log(err)
        }
    }
}