const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');



const authController = {};


authController.signup = (req, res, next) => {
    const {firstName, lastName, email, password, confirm} = req.body;
    if (password !== confirm){
        return res.status(400).send('Passwords do not match')
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPw = bcrypt.hashSync(password, salt);

    User.create({
        firstName, 
        lastName,
        email,
        password: hashedPw
    }, (err, data) => {
        if (err) return next(err)

       

        // res.locals.user = data;

        //create token and stuff here

        const token = jwt.sign({user: data._id}, process.env.JWT_SECRET, {expiresIn: "30m"});
        res.cookie("authToken", token, {
            httpOnly: true
        })
        
        return next();
    })
    
}

authController.login = (req, res, next) => {
    const {email, password} = req.body;

    User.findOne({email}, (err, data) => {
        if (err) return next(err);

        //compare passwords
        const compare = bcrypt.compareSync(password, data.password)
        if (!compare) return next('Invalid password');

        const token = jwt.sign({user: data._id}, process.env.JWT_SECRET, {expiresIn: "30m"});
        // console.log(token)
        res.cookie("authToken", token, {
            httpOnly: true
        })
        return next();
    })
}


module.exports = authController;