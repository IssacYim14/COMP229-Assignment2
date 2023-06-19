/*
File Name: passport.js
Created by: Chun Wai Yim (Student #: 301242959) on 6/18/2023
*/

const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const User = require('../models/User'); 

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'name' }, (name, password, done) => {
      User.findOne({ name: name })
        .then(user => {
          if (!user) {
            return done(null, false);
          }

          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
              return done(null, user);
            } else {
              return done(null, false);
            }
          });
        })
        .catch(err => console.log(err));
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      done(err, null);
    }
  });
};
