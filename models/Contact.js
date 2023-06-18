/*
File Name: Contact.js
Created by: Chun Wai Yim (Student #: 301242959) on 6/18/2023
*/

const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Contact', contactSchema);
