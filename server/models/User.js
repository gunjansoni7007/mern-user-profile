const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  profilePhoto: String,
  username: String,
  currentPassword: String,
  newPassword: String,
  profession: String,
  companyName: String,
  addressLine1: String,
  country: String,
  state: String,
  city: String,
  subscriptionPlan: String,
  newsletter: Boolean
});

module.exports = mongoose.model('User', userSchema);
