'use strict'

const express = require('express');
const api = express.Router();
const universityController = require('./university.controller');
const { ensureAuth, isAdmin} = require('../services/authenticated');

api.post('/save', [ensureAuth, isAdmin], universityController.saveUniversity);
api.put('/update', [ensureAuth, isAdmin], universityController.updateUniversity);
api.get('/get/:id', [ensureAuth], universityController.getUniversity);
/*
api.delete('/delete', [ensureAuth, isAdmin],universityController.delete);*/

module.exports = api;