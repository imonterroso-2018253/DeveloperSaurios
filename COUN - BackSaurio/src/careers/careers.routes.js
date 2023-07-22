'use strict'

const express = require('express');
const api = express.Router();
const careerController = require('./careers.controller');
const { ensureAuth, isAdmin} = require('../services/authenticated');

api.get('/', careerController.test);
api.post('/save', [ensureAuth], careerController.save);
api.get('/get', [ensureAuth, isAdmin], careerController.getCareer);
api.put('/update', [ensureAuth, isAdmin],careerController.update);
api.delete('/delete', [ensureAuth, isAdmin],careerController.delete);

module.exports = api;