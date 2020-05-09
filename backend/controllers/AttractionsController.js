const { Attraction } = require('../models');

const AttractionsController = {
    async create(req, res) {
        const { name, description, image } = req.body;
        let clicks = 0;
        const attraction = new Attraction({
            name,
            description,
            image,
            clicks
        });
        let savedAttraction = await attraction.save().then(() => res.json('Attraction added!')).catch(err => res.status(400).json('Error: ' + err));
        res.json(savedAttraction);
    },

    async index(req, res) {
        const attractions = await Attraction.find().sort({clicks: -1});
        res.send(attractions);
    },

    async updateClicks(req, res) {
        const attraction = await Attraction.findByIdAndUpdate(req.params.id, {$inc: {clicks: 1}});
        res.send(attraction);
    }
}

module.exports = AttractionsController;