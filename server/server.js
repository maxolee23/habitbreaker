const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const path = require('path');

const authRoutes = require('./routes/auth');
const habitRoutes = require('./routes/habit');


dotenv.config();

// console.log(process.env.MONGO_URI)

app.use(express.json());
app.use(cookieParser());

//routes
app.use('/api/auth', authRoutes);
app.use('/api/habits', habitRoutes);

// app.get('/', express.static(path.join(__dirname, '../index.html')));
app.get('/build', express.static(path.join(__dirname, '../build/')));

//error handler

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err))
app.use((err, req, res, next) => {
    console.log(err);
    res.status(400).send(err);
  });


app.listen(process.env.PORT, () => {
    console.log('we be listenin')
})