const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const zoneSchema = new Schema({
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
    animals: [
        {
            type: mongoose.Schema.Types.ObjectId, ref: 'Animal'
        }
    ]
}, {
    timestamps: true
});

const zone = mongoose.model('Zone', zoneSchema);

module.exports = zone;