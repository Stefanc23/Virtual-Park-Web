const { Zone } = require('../models');

const ZonesController = {
    async create(req, res) {
        const { name, description, image } = req.body;
        let clicks = 0;
        const zone = new Zone({
            name,
            description,
            image,
            clicks
        });
        let savedZone = await zone.save().then(() => res.json('Zone added!')).catch(err => res.status(400).json('Error: ' + err));
        res.json(savedZone);
    },

    async index(req, res) {
        const zones = await Zone.find().populate('animals');
        res.send(zones);
    },

    async show(req, res) {
        const zone = await Zone.findById(req.params.id).populate('animals');
        res.send(zone);
    },

    async animalsByZone(req, res) {
        const zone = await Zone.findById(req.params.id).populate('animals');
        const animals = zone.animals;
        res.send(animals);
    }
}

module.exports = ZonesController;