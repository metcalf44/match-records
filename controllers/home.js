const Result = require('../models/Results')

module.exports = {
    getIndex: (req, res) => {
        res.render('index.ejs')
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
            })
            console.log('Result has been added')
            res.redirect('/')
        } catch(err) {
            console.log(err)
        }
    }

}