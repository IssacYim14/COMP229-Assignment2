/*
File Name: businessContacts.js
Created by: Chun Wai Yim (Student #: 301242959) on 6/2/2023
*/

const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact'); // Import the Contact model

// Add the middleware function to check authentication
const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/users/login');
};

// Display all contacts
router.get('/', ensureAuthenticated, async (req, res) => {
  try {
    // Retrieve all contacts from the database
    const contacts = await Contact.find();

    // Render the businessContacts.ejs template and pass the contacts data
    res.render('businessContacts', { contacts });
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
