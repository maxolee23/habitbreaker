const express = require("express");
const router = express.Router();
const authController = require('../controllers/authController');
const jwt = require('jsonwebtoken');


router.post('/signup', authController.signup, (req, res) => {
    return res.status(200).send('user creation successful')
});

router.post('/login', authController.login, (req, res) => {
    // console.log(req.cookies.authToken)
    return res.status(200).send('logged in')
})

router.get("/logout", (req, res) => {
    res.clearCookie("authToken").send('logged out')
})

//see if user is logged in 

router.get("/loggedin", (req, res) => {
    try {
        const token = req.cookies.authToken;

        if (!token) return res.json(false);

        jwt.verify(token, process.env.JWT_SECRET);
        res.send(true)
        } catch (err){
        console.error(err);
        res.json(false);
    }
})


module.exports = router;