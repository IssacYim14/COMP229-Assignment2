const express = require('express');
const app = express();

app.use(express.static('./public'))
//app.set('views', './view');
app.set('view engine', 'ejs');

const homeRoute = require('./routes/home');
const aboutRoute = require('./routes/about');
const projectsRoute = require('./routes/projects');
const servicesRoute = require('./routes/services');
const contactRoute = require('./routes/contact');

app.use('/', homeRoute);
app.use('/about', aboutRoute);
app.use('/projects', projectsRoute);
app.use('/services', servicesRoute);
app.use('/contact', contactRoute);

app.listen(3000,() => {
    console.log('server is listening on port 5000')
})
