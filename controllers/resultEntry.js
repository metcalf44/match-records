const Result = require('../models/ResultsEntry')

module.exports = {
    resultEntry: async (req, res) => {
        res.render('resultEntry.ejs')
    },

    getResults: async (req, res) => {
        try {
            const matchResult = await Result.find()
            res.render('resultEntry.ejs', {matches: matchResult})
        } catch(err) {
            console.log(err)
        }
    }
    

    // createResult: async (req, res) => {
    //     try{
    //         await Result.create({results:req.body.result})
    //         console.log('Result has been added')
    //         res.redirect('/')
    //     } catch(err) {
    //         console.log(err)
    //     }
    // }
}