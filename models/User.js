/*
File Name: User.js
Created by: Chun Wai Yim (Student #: 301242959) on 6/18/2023
*/

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;