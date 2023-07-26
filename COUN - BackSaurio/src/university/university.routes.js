'use strict'

const express = require('express');
const api = express.Router();
const universityController = require('./university.controller');
const { ensureAuth, isAdmin} = require('../services/authenticated');

api.post('/save', /*[ensureAuth, isAdmin],*/ universityController.saveUniversity);
/*api.get('/get', [ensureAuth], universityController.getFaculty);
api.put('/update', [ensureAuth, isAdmin],universityController.update);
api.delete('/delete', [ensureAuth, isAdmin],universityController.delete);*/

module.exports = api;