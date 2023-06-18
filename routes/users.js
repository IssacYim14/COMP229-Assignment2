const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const User = require('../models/User');



router.get('/register', (req, res) => 
    res.render('register'));

router.get('/login', (req, res) => 
res.render('login'));

router.post('/register', async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
      });
      await user.save();
      res.redirect('/users/login');
    } catch (err) {
      res.redirect('/users/register');
    }
});


// Login Handle
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
      successRedirect: '/businessContacts',
      failureRedirect: '/users/login',
      failureFlash: true
    })(req, res, next);
  });

// Logout handle
router.post('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out.');
    res.redirect('/users/login')
})

module.exports = router;