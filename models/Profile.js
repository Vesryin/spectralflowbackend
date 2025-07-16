// models/Profile.js
const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  name: String,
  about: String,
  photo: String // optional URL or filename
});

module.exports = mongoose.model('Profile', ProfileSchema);
