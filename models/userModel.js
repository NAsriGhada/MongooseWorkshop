const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userFullName: {
    type: String,
    required: [true, "You must type the full name"],
  },
  userEmail: {
    type: String,
    required: [true, "You must type the email"],
  },
  userPhoneNumber: {
    type: Number,
    required: [true, "You must type the phone number"],
  },
  userAge: {
    type: Number,
    required: [true, "You must type the birth date"],
  },
});
module.exports.UserSchema = mongoose.model('UserCollection', UserSchema)