const { Animal, Zone } = require('../models');

const AnimalsController = {
    async create(req, res) {
        const { name, description, image, zoneName } = req.body;
        let clicks = 0;
        let zone = await Zone.findOne({name: zoneName}).catch(err => res.json(err));
        let zone_id = zone._id;
        const animal = new Animal({
            name,
            description,
            image,
            clicks,
            zone: zone_id
        });
        await animal.save().then(() => {
            zone.animals.push(animal);
            zone.save().then(() => res.json(animal.name + ' in ' + zone.name + ' added!')).catch(err => res.json(err));
        }).catch(err => res.status(400).json('Error: ' + err));
    },

    async index(req, res) {
        const animals = await Animal.find().populate('zone').sort({clicks: -1});
        res.send(animals);
    },

    async updateClicks(req, res) {
        const animal = await Animal.findByIdAndUpdate(req.params.id, {$inc: {clicks: 1}}).populate('zone');
        res.send(animal);
    }
}

module.exports = AnimalsController;