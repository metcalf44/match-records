const Result = require('../models/ResultsEntry')

module.exports = {
    getHome: (req, res) => {
        res.render('home.ejs')
    },

    createEntry: async (req, res) => {
        try{
            await Result.create({
                date:req.body.date,
                homeTeam: req.body.homeTeam,
                homeScore: req.body.homeScore,
                awayScore: req.body.awayScore,
                awayTeam: req.body.awayTeam,
                scorer: req.body.scorer
            })
            console.log('result added')
            res.redirect('/')
        }catch(err) {
            console.log(err)
        }
    },
    
    getResults: async (req, res) => {
        try{
            const matchResults = await Result.find()
            res.render('home.ejs', {results: matchResults})
        } catch(err) {
            console.log(err)
        }
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