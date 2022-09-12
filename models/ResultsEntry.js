const mongoose = require('mongoose')

const ResultEntrySchema = new mongoose.Schema({
    date: {
        type: Date,
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
    }
})

// ('database name', mongoose schema)
module.exports = mongoose.model('results', ResultEntrySchema)