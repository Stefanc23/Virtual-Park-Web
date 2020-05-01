const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const attractionSchema = new Schema({
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
    }
}, {
    timestamps: true
});

const attraction = mongoose.model('Attraction', attractionSchema);

module.exports = attraction;