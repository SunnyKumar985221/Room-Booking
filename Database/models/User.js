const mongoose = require('mongoose');
const Personnewuser = new mongoose.Schema({
        username: {
          type: String,
          required: true
        },
        email: {
          type: String,
          required: true,
          unique: true,
        },
        country: {
          type: String
        },
        img: {
          type: String
        },
        city: {
          type: String
        },
        phone: {
          type: String
        },
        password: {
          type: String,
          required: true,
        },
        isAdmin: {
          type: Boolean,
          default: false,
        },
      },
      { timestamps: true }
    );

const personuser = new mongoose.model('User',Personnewuser);
module.exports = personuser;