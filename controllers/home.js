const Result = require('../models/Results')

module.exports = {
    getIndex: (req, res) => {
        res.render('home.ejs')
    },

<<<<<<< HEAD
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
=======
    
>>>>>>> 9b4095831badf5617bfec6acb18450e49d94fa7f

}