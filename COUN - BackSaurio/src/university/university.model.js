'use strict'

const mongoose = require('mongoose');

const universitySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    faculty: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Faculty',
        required: true
    }],
    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('University', universitySchema);