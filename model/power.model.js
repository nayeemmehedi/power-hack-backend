const mongoose = require('mongoose');
// const { check, body, validationResult } = require('express-validator');

const PowerSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Please provide a full name']
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
    match: [
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please provide a valid email'
    ]
  },
  phone: {
    type: String,
    required: [true, 'Please provide a phone number'],
    unique: true,
    validate: {
      validator: function(v) {
        return /^01[0-9]{9}$/.test(v);
      },
      message: props => `${props.value} is not a valid phone number!`
    }
  },
  amount: {
    type: Number,
    required: [true, 'Please provide an amount'],
    min: [0, 'Amount cannot be negative']
  }
},{
  timestamps: true,
});

const Power = mongoose.model('Power', PowerSchema);



module.exports = Power
