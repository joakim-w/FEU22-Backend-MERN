const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  title: {
    type: String,
    required: [true, 'Please add something todo']
  },
  completed: {
    type: Boolean,
    default: false
  }
}, { timestamps: true })

module.exports = mongoose.model('Todo', todoSchema);