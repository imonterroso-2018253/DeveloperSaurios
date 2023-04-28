'use strict'

const express = require('express');
const api = express.Router();
const leaseController = require('./lease.controller');

api.post('/create',leaseController.createLease);
api.get('/get',leaseController.getLeaseByUser);

module.exports = api;