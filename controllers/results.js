const Result = require('../models/Results')

module.exports = {

    getResults: async (req, res) => {
        try{
            const matchResults = await Result.find()
            res.render('results.ejs', {matches: matchResults})
        } catch(err) {
            console.log(err)
        }
    },

    deleteResult: async (req, res) => {
        console.log(req.body.resultIdFromJSFile)
        try {
            await Result.findOneAndDelete({_id:req.body.resultIdFromJSFile})
            console.log('Deleted result')
            res.json('Deleted result')
        } catch (err) {
            console.log(err)
        }
    } 
}