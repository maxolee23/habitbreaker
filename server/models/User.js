const mongoose = require('mongoose');

const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        max: 20
    },
    lastName: {
        type: String,
        required: true,
        max: 20
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    habits: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Habit'
        }
    ]
});



const User = mongoose.model('user', userSchema);

module.exports = User;