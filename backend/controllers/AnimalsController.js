const { Animal, Zone } = require('../models');

const AnimalsController = {
    async create(req, res) {
        const { name, description, image, zone_id } = req.body;
        let clicks = 0;
        const animal = new Animal({
            name,
            description,
            image,
            clicks,
            zone: zone_id
        });
        let savedAnimal = await animal.save().then(() => res.json('Animal added!')).catch(err => res.status(400).json('Error: ' + err));
        
        let zone = await Zone.findById(zone_id);
        zone.animals.push(savedAnimal);
        zone.save();
        
        res.json(savedAnimal + ' in ' + zone);
    },

    async index(req, res) {
        const animals = await Animal.find().populate('zone');
        res.send(animals);
    },

    async show(req, res) {
        const animal = await Animal.findById(req.params.id).populate('zone');
        res.send(animal);
    },
    
    async zoneByAnimal(req, res) {
        const animal = await Animal.findById(req.params.id).populate('zone');
        const zone = animal.zone;
        res.send(zone);
    }
}

module.exports = AnimalsController;