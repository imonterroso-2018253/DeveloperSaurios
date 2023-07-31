'use strict'

const express = require('express');
const api = express.Router();
const universityController = require('./university.controller');
const { ensureAuth, isAdmin} = require('../services/authenticated');

api.post('/save', [ensureAuth, isAdmin], universityController.saveUniversity);
api.post('/vote', ensureAuth, universityController.addOrUpdateRating)
api.put('/update', [ensureAuth, isAdmin], universityController.updateUniversity);
api.get('/get',  universityController.getUniversity);
api.get('/get/:id',  universityController.getUniversity1);
api.get('/getByName/:name', universityController.getUniversityByName)

/*
api.delete('/delete', [ensureAuth, isAdmin],universityController.delete);*/

module.exports = api;