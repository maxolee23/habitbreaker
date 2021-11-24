const Habit = require('../models/Habit');
const User = require('../models/User');
// const auth = require('../middleware/authMiddleware');

const habitController = {};

habitController.newHabit = (req, res, next) => {
    const {title, reason} = req.body;

    Habit.create({
        title,
        reason,
        user: req.user,
        startDate: Date.now()
    }, (err, data) => {
        if (err) res.status(400).send(err);
        // res.json(data)
        User.findOneAndUpdate({_id: req.user}, (err, data) => {
            if (err) res.status(400).send(err);
            data.habits.push(data);
        })
        next();
    })

}

habitController.startOver = (req, res, next) => {
    // console.log(req.params.id)
    // console.log('starting over')
    // const {startDate} = req.body;
    // console.log(startDate)
    const id = req.params.id;

    Habit.findByIdAndUpdate({_id: id}, {startDate: req.body.startDate}, {new: true}, (err, data) => {
        if (err) next(err)
        // res.send(data);
        console.log(data)
    })
    next();
}

habitController.deleteHabit = (req, res, next) => {
    const id = req.params.id;
    Habit.findByIdAndDelete({_id: id}, (err, data) => {
        if (err) res.status(400).send(err);
        console.log(data)
    })
    next();
}

module.exports = habitController;