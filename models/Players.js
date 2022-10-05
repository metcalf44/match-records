const mongoose = require('mongoose')

const PlayersSchema = new mongoose.Schema({
    team: {
        type: String,
        ref: 'User',
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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Players', PlayersSchema)