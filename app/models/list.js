const mongoose = require('mongoose')

const listSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
description: {
    type: String,
    required: false
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('List', listSchema)
