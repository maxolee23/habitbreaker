const router = require("express").Router();
// const Habit = require("../models/Habit");
const {auth, getHabits} = require("../middleware/authMiddleware");
const habitController = require('../controllers/habitController');

router.post('/', auth, habitController.newHabit, (req, res) => {
    res.status(200).send('Habit created successfully')
});

router.get('/', auth,  getHabits);

router.patch('/:id', auth, habitController.startOver ,(req, res) => {
    res.status(200).send('update successful')
});
router.delete('/:id', auth, habitController.deleteHabit, (req, res) => {
    res.status(200).send('delete successful')
});


module.exports = router;