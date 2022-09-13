const mongoose = require('mongoose')

const ResultsSchema = new mongoose.Schema({
    date: {
        type: Date,
        $setOnInsert: { dateAdded: new Date() },
        required: true,
    },
    homeTeam: {
        type: String,
        required: true,
    },
    homeScore: {
        type: Number,
        required: true,
    },
    awayScore: {
        type: Number,
        required: true,
    },
    awayTeam: {
        type: String,
        required: true,
    },
    scorer: {
        type: String,
        required: false,
    }
})

module.exports = mongoose.model('Results', ResultsSchema)