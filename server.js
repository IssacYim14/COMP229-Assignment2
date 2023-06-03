const express = require('express');
const path = require('path');
const app = express();

// setup static and middleware
app.use(express.static('./public'))
app.set('views', './view');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './home.html'))
})

app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, './about.html'))
})

app.get('/projects', (req, res) => {
    res.sendFile(path.resolve(__dirname, './projects.html'))
})

app.get('/services', (req, res) => {
    res.sendFile(path.resolve(__dirname, './services.html'))
})

app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname, './contact.html'))
})

app.all('*', (req, res) => {
    res.status(404).send('Not Found')
})

app.listen(3000,() => {
    console.log('server is listening on port 5000')
})
