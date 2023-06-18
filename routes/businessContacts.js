/*
File Name: services.js
Created by: Chun Wai Yim (Student #: 301242959) on 6/2/2023
*/

const express = require('express');
const router = express.Router();

// Add the middleware function to check authentication
const ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/users/login');
  };
  
  // Define the "businessContacts" route
  router.get('/', ensureAuthenticated, (req, res) => {
    res.render('businessContacts', { user: req.user });
  });
  
  module.exports = router;