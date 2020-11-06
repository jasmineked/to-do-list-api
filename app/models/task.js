const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  dateDue: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('task', taskSchema)
