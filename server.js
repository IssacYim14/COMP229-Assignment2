/*
File Name: server.js
Created by: Chun Wai Yim (Student #: 301242959) on 6/2/2023
*/

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const initializePassport = require('./config/passport');

const app = express();

// DB config
const db = require('./config/keys').MongoURI;

//connect to Mongo
mongoose.connect(db, { useNewUrlParser: true})
    .then(() => console.log('MongoDb Connected..'))
.catch(err => console.log(err))


// Express session
app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
);

// Initialize Passport.js
initializePassport(passport);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use(express.static('./public'))
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false}));

// express use routes
app.use('/', require('./routes/home'));
app.use('/about', require('./routes/about'));
app.use('/projects', require('./routes/projects'));
app.use('/services', require('./routes/services'));
app.use('/contact', require('./routes/contact'));
app.use('/users', require('./routes/users'));
app.use('/businessContacts', require('./routes/businessContacts'));

app.listen(process.env.PORT || 3000,() => {
    console.log('server is listening on port 3000');
});
