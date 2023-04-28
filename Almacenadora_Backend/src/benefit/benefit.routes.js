'use strict'

const express = require('express');
const api = express.Router();
const benefitController = require('./benefit.controller');
const { ensureAuth, isAdmin } = require('../services/authenticated');

api.get('/', benefitController.test)
api.get('/get', [ensureAuth, isAdmin], benefitController.get);
api.post('/create', [ensureAuth, isAdmin], benefitController.create);
api.put('/update', [ensureAuth, isAdmin], benefitController.update);
api.delete('/delete', [ensureAuth, isAdmin], benefitController.delete);


module.exports = api;