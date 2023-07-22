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
    career: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Career',
        required: true
    },
    comments: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('University', universitySchema);