'use strict';
const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Referencia al modelo de usuario
    required: true
  },
  university: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'University', // Referencia al modelo 
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  comment: {
    type: String,
    required: true
  },
  likesCount: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Comment', commentSchema);

