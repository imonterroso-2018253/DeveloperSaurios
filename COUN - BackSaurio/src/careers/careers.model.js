'use strict'
const mongoose = require('mongoose');

const careersSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Careers', careersSchema);