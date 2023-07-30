/* // models/resetToken.js
const mongoose = require('mongoose');

const resetTokenSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 3600, // El token expirará después de 1 hora (en segundos)
  },
});

const ResetToken = mongoose.model('ResetToken', resetTokenSchema);

module.exports = ResetToken;
 */