const Result = require('../models/Results')
const User = require('../models/User')

module.exports = {

    addGame: async (req, res) => {
        try {
            const user = await User.find()
            res.render('results.ejs', { user: req.user })
        } catch(err) {
            console.log(err)
        }
    },
    getResults: async (req, res) => {
        try{
            const matchResults = await Result.find({ userId:req.user.id }).sort({ date: 1 })
            res.render('home.ejs', { matches: matchResults, user: req.user })
        } catch(err) {
            console.log(err)
        }
    },

    deleteResult: async (req, res) => {
        console.log(req.body.resultIdFromJSFile)
        try {
            await Result.findOneAndDelete({ _id:req.body.resultIdFromJSFile })
            console.log('Deleted result')
            res.json('Deleted result')
        } catch (err) {
            console.log(err)
        }
    },

    createResult: async (req, res) => {
        try{
            await Result.create({
                date: req.body.date,
                homeTeam: req.body.homeTeam,
                homeScore: req.body.homeScore,
                awayScore: req.body.awayScore,
                awayTeam: req.body.awayTeam,
                scorer: req.body.scorer,
                assist: req.body.assist,
                userId: req.user.id,
            })
            console.log('Result has been added')
            res.redirect('/results/getResults')
        } catch(err) {
            console.log(err)
        }
    },

}