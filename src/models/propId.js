const mongoose = require('mongoose');

// schema for Wallet
const propSchema = new mongoose.Schema({
  propID: {
    type: String,
    required: true,
    minlength: 3,
  },
  description: {
    type: String,
    required: true,
    minlength: 3,
  },
  start_at: {
    type: Date,
    required: true,
    minlength: 3,
  },
  end_at: {
    type: Date,
    required: true,
    minlength: 3,
  },
});

// create new collection
const propID = new mongoose.model('Wallet', propSchema);

module.exports = propID;
