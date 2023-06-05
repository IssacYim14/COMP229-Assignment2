/*
File Name: server.js
Created by: Chun Wai Yim (Student #: 301242959) on 6/2/2023
*/

const express = require('express');
const app = express();

app.use(express.static('./public'))
app.set('view engine', 'ejs');

// require routes of different pages
const homeRoute = require('./routes/home');
const aboutRoute = require('./routes/about');
const projectsRoute = require('./routes/projects');
const servicesRoute = require('./routes/services');
const contactRoute = require('./routes/contact');

// express use routes
app.use('/', homeRoute);
app.use('/about', aboutRoute);
app.use('/projects', projectsRoute);
app.use('/services', servicesRoute);
app.use('/contact', contactRoute);

app.listen(process.env.PORT || 3000,() => {
    console.log('server is listening on port 3000');
});
