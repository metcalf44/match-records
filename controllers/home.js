// const Result = require('../models/ResultsEntry')

module.exports = {
    getIndex: (req, res) => {
        res.render('index.ejs')
    },

    // getResults: async (req, res) => {
    //     try{
    //         const matchResults = await result.find()
    //         res.render('index.ejs', {results: matchResults})
    //     } catch(err) {
    //         console.log(err)
    //     }
    // },

    // deleteResult: async (req, res) => {
    //     console.log(req.body.resultIdFromJSFile)
    //     try {
    //         await result.findOneAndDelete({_id:req.body.resultIdFromJSFile})
    //         console.log('Deleted result')
    //         res.json('Deleted result')
    //     } catch (err) {
    //         console.log(err)
    //     }
    // } 
}