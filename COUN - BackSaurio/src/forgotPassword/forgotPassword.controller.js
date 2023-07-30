/* 'use strict'

// controllers/forgotPasswordController.js
const crypto = require('crypto');
const ResetToken = require('./forgotPassword.model');
const User = require('../user/user.model');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'DevSauriosGT@gmail.com',
    clientId: 'TU_CLIENT_ID',
    clientSecret: 'TU_CLIENT_SECRET',
    refreshToken: 'TU_REFRESH_TOKEN',
    accessToken: 'TU_ACCESS_TOKEN', // No es necesario incluirlo aquí, se generará automáticamente
  },
});

const mailOptions = {
  from: 'DevSauriosGT@gmail.com',
  to: 'correo_destino@example.com',
  subject: 'Prueba de correo electrónico',
  text: 'Este es un correo de prueba enviado desde Node.js y nodemailer con OAuth2.',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error al enviar el correo:', error);
  } else {
    console.log('Correo enviado:', info.response);
  }
});


// Función para generar y guardar el token de recuperación de contraseña
const generateResetToken = async (userId) => {
  const resetToken = crypto.randomBytes(20).toString('hex');
  const tokenDocument = new ResetToken({
    user: userId,
    token: resetToken,
  });
  await tokenDocument.save();
  return resetToken;
};

// Controlador para procesar la solicitud de recuperación de contraseña
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    const resetToken = await generateResetToken(user._id);
    await sendResetEmail(email, resetToken);

    res.status(200).json({ message: 'Correo electrónico de recuperación enviado correctamente' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}; */