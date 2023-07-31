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
    // campo para almacenar las votaciones
    ratings: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        stars: {
            type: Number,
            min: 1,
            max: 10
        }
    }]
});

// Método para calcular el promedio de las calificaciones
universitySchema.methods.calculateAverageRating = function () {
    if (this.ratings.length === 0) {
        return 0; // No hay votaciones, el promedio es 0
    }

    const sum = this.ratings.reduce((total, rating) => total + rating.stars, 0);
    const average = sum / this.ratings.length;
    return Math.round(average); // Redondear el promedio al número entero más cercano
};
module.exports = mongoose.model('University', universitySchema);
