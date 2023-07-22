'use strict'

const userController = require('./user.controller');
const express = require('express');
const api = express.Router();
const { ensureAuth, isAdmin } = require('../services/authenticated');

api.get('/' , userController.test);
api.post('/register', [ensureAuth, isAdmin], userController.register);
api.post('/login', userController.login);
api.delete('/delete/:id', [ensureAuth, isAdmin], userController.delete);
api.put('/update/:id', [ensureAuth], userController.update);
api.get('/getUser', [ensureAuth, isAdmin], userController.get)
api.get('/get/:id', ensureAuth, userController.getUser)

module.exports = api;