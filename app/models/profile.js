const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
lastName: {
    type: String,
    required: false
  },
  birthDate: {
      type: Date,
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

module.exports = mongoose.model('Profile', profileSchema)
