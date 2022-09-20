const mongoose = require('mongoose')

const ResultsSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
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
    },
    userId: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Results', ResultsSchema)