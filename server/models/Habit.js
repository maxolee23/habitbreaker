const mongoose = require('mongoose');

const habitSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    reason: {
        type: String,
        default: 'None specified'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    startDate: {
        type: Date,
    }
})

const Habit = mongoose.model('habit', habitSchema);

module.exports = Habit;