const Result = require('../models/Results')
const Players = require('../models/Players')

module.exports = {

    addGame: (req, res) => {
        res.render('results.ejs')
    },

    getPlayers: async (req, res) => {
        try {
            const playerStats = await Players.find()
            const matches = await Result.find()
            res.render('players.ejs', {player: playerStats, match: matches})
        } catch(err) {
            console.log(err)
        }
    },

    createPlayer: async (req, res) => {
        try {
            await Players.create({
                team: req.body.team,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                games: 0,    
                goals: 0,
                assists: 0,
                userId: req.user.id
            })
            console.log('Player has been added')
            res.redirect('/results/getPlayers')
        } catch(err) {
            console.log(err)
        }
    },

    getResults: async (req, res) => {
        try{
            const matchResults = await Result.find({userId:req.user.id}).sort({ date: 1 })
            res.render('home.ejs', {matches: matchResults, user: req.user})
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
                userId: req.user.id
            })
            console.log('Result has been added')
            res.redirect('/results/getResults')
        } catch(err) {
            console.log(err)
        }
    },

}