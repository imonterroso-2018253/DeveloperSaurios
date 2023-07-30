'use strict';
const mongoose = require('mongoose');

const likeSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Referencia al modelo de usuario
    required: true
  },
  comment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment', // Referencia al modelo de comentario
    required: true
  }
});

module.exports = mongoose.model('Like', likeSchema);
