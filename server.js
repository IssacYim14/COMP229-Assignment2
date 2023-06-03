const express = require('express');
//let ejs = require('ejs');
const path = require('path');
const app = express();

// setup static and middleware
app.use(express.static('./public'))
//app.set('views', './view');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home', {title : 'Home Page'});
    //res.sendFile(path.resolve(__dirname, './home.html'))
})

app.get('/about', (req, res) => {
    res.render('about', {title : 'About me'});
})

app.get('/projects', (req, res) => {
    res.render('projects', {title : 'Projects'});
})

app.get('/services', (req, res) => {
    res.render('services', {title : 'Services'});
})

app.get('/contact', (req, res) => {
    res.render('contact', {title : 'Contact'});
})

app.all('*', (req, res) => {
    res.status(404).send('Page Not Found')
})

app.listen(3000,() => {
    console.log('server is listening on port 5000')
})
