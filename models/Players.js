const mongoose = require('mongoose')

const PlayersSchema = new mongoose.Schema({
    team: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    games: {
        type: Number,
    },
    goals: {
        type: Number,
    },
    assists: {
        type: Number,
    },
    userId: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Players', PlayersSchema)