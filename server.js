/*
File Name: server.js
Created by: Chun Wai Yim (Student #: 301242959) on 6/2/2023
*/

const express = require('express');
const app = express();

app.use(express.static('./public'))
app.set('view engine', 'ejs');

// express use routes
app.use('/', require('./routes/home'));
app.use('/about', require('./routes/about'));
app.use('/projects', require('./routes/projects'));
app.use('/services', require('./routes/services'));
app.use('/contact', require('./routes/contact'));
app.use('/users', require('./routes/users'));

app.listen(process.env.PORT || 3000,() => {
    console.log('server is listening on port 3000');
});
