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
        const zones = await Zone.find().populate('animals').sort({clicks: -1});
        res.send(zones);
    },

    async updateClicks(req, res) {
        const zone = await Zone.findByIdAndUpdate(req.params.id, {$inc: {clicks: 1}}).populate('animals');
        res.send(zone);
    }
}

module.exports = ZonesController;