// const Result = require('../models/ResultsEntry')

module.exports = {
    getIndex: (req, res) => {
        res.render('index.ejs')
    },

    

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