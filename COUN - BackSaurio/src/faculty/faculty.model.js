'use strict'
const mongoose = require('mongoose');

const facultysSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Faculty', facultysSchema);