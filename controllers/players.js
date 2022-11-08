const Players = require('../models/Players')
const User = require('../models/User')


module.exports = {
    getPlayers: async (req, res) => {
        try {
            const playerStats = await Players.find({ userId:req.user.id }).sort({firstName: 'asc'})
            res.render('players.ejs', {player: playerStats, user: req.user})
        } catch(err) {
            console.log(err)
        }
    },
    createPlayer: async (req, res) => {
        try {
            await Players.create({
                team: req.user.userName,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                games: 0,    
                goals: 0,
                assists: 0,
                userId: req.user.id
            })
            console.log('Player has been added')
            res.redirect('/players/getPlayers')
        } catch(err) {
            console.log(err)
        }
    },
    deletePlayer: async (req, res) => {
        console.log(req.body.playerIdFromJSFile)
        try {
            await Players.findOneAndDelete({_id: req.body.playerIdFromJSFile })
            console.log('Deleted Player')
            res.json('Deleted Player')
        } catch(err) {
            console.log(err)
        }
    }, 
    gameTime: async (req, res) => {
        try {
            const user = await User.find()
            res.render('gameTime.ejs', { user: req.user })
        } catch(err) {
            console.log(err)
        }
    }
}