/*
File Name: contact.js
Created by: Chun Wai Yim (Student #: 301242959) on 6/2/2023
*/

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // dynamic change the title in ejs
    res.render('contact');
})

module.exports = router;