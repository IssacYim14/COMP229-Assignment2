/*
File Name: businessContacts.js
Created by: Chun Wai Yim (Student #: 301242959) on 6/18/2023
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

// Logout Handle
router.post('/logout', (req, res) => {
  req.session.destroy(function(err){
    if (err) {
      console.log(err);
    }
    res.redirect('/users/login');
  })
});

// Update contact
router.get('/:id/update', ensureAuthenticated, async (req, res) => {
    try {
      // Find the contact by ID
      const contact = await Contact.findById(req.params.id);
  
      if (!contact) {
        return res.status(404).send('Contact not found');
      }
  
      // Render the update form and pass the contact data
      res.render('updateContact', { contact });
    } catch (error) {
      console.log(error);
      res.status(500).send('Server Error');
    }
});

// Handle contact update
router.post('/:id/update', ensureAuthenticated, async (req, res) => {
    try {
      // Find the contact by ID
      const contact = await Contact.findById(req.params.id);
  
      if (!contact) {
        return res.status(404).send('Contact not found');
      }
  
      // Update the contact data
      contact.name = req.body.name;
      contact.number = req.body.number;
      contact.email = req.body.email;
  
      // Save the updated contact
      await contact.save();
  
      // Redirect to the businessContacts page or any other desired route
      res.redirect('/businessContacts');
    } catch (error) {
      console.log(error);
      res.status(500).send('Server Error');
    }
});
  
// Handle contact deletion
router.post('/:id/delete', ensureAuthenticated, async (req, res) => {
    try {
      // Find the contact by ID
      const contact = await Contact.findById(req.params.id);
  
      if (!contact) {
        return res.status(404).send('Contact not found');
      }
  
      // Delete the contact
      await Contact.deleteOne({ _id: req.params.id });
  
      // Redirect to the businessContacts page or any other desired route
      res.redirect('/businessContacts');
    } catch (error) {
      console.log(error);
      res.status(500).send('Server Error');
    }
  });

module.exports = router;
