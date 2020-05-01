const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const animalSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    clicks: {
        type: Number
    },
    zone: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Zone'
    }
}, {
    timestamps: true
});

const animal = mongoose.model('Animal', animalSchema);

module.exports = animal;