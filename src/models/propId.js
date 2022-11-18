const mongoose = require('mongoose');

// schema for Wallet
const propSchema = new mongoose.Schema(
  {
    // prop_id: {
    //   type: String,
    //   required: true,
    //   minlength: 1,
    // },
    vote: {
      type: String,
      required: true,
      minlength: 1,
    },
    name: {
      type: String,
      required: true,
      minlength: 5,
    },
    description: {
      type: String,
      required: true,
      minlength: 3,
    },
    forLang: {
      type: String,
      required: true,
      minlength: 3,
    },
    isComplete: {
      type: Boolean,
      required: true,
      minlength: 3,
    },
    proposerAddress: {
      type: String,
      required: true,
      minlength: 10,
    },
    endDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

// create new collection
const propID = new mongoose.model('PropId', propSchema);

module.exports = propID;
