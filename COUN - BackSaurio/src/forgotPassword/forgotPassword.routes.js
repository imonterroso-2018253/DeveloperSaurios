/* // routes/forgotPasswordRoute.js
const express = require('express');
const api = express.Router();
const forgotPassword = require('./forgotPassword.controller');

api.post('/forgot-password', forgotPassword.forgotPassword);

module.exports = api;
 */