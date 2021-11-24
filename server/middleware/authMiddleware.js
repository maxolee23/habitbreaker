const jwt = require("jsonwebtoken");
const Habit = require('../models/Habit');

function auth (req, res, next) {
    try {
        // console.log(req.cookies.authToken)
        // console.log('hi from auth')
        const token = req.cookies.authToken;

        if (!token) return res.status(401).json({errorMessage: "Unauthorized"});

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        
        //allows us to read the logged in user's id in the request
        req.user = verified.user;

        next();
        } catch (err){
        console.error(err);
        res.status(401).json({
            errorMessage: "Unauthorized"
        })
    }
}

function getHabits (req, res, next) {
    try{
        // console.log(req.user)
        Habit.find({user: req.user}, (err, data) => {
            if (err) res.send("no habits yet");
            res.status(200).json(data)
        })
    } catch(err){
        return next(err)
    }
}

module.exports = {auth, getHabits};