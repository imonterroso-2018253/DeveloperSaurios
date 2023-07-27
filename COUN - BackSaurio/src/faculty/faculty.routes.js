'use strict'

const express = require('express');
const api = express.Router();
const facultyController = require('./faculty.controller');
const { ensureAuth, isAdmin} = require('../services/authenticated');

api.get('/', facultyController.test);
api.post('/save', /*[ensureAuth, isAdmin],*/ facultyController.save);
api.get('/get', [ensureAuth], facultyController.getFaculty);
api.put('/update', [ensureAuth, isAdmin],facultyController.update);
api.delete('/delete', [ensureAuth, isAdmin],facultyController.delete);

module.exports = api;