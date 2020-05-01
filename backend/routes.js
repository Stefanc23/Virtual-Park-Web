const express = require('express');
const router = express.Router();
const { AnimalsController, ZonesController, AttractionsController } = require('./controllers');

module.exports = function(app) {
    router.post('/animals', AnimalsController.create);
    router.get('/animals', AnimalsController.index);
    router.get('/animals/:id', AnimalsController.show);
    router.get('/animals/:id/zone', AnimalsController.zoneByAnimal);

    router.post('/zones', ZonesController.create);
    router.get('/zones', ZonesController.index);
    router.get('/zones/:id', ZonesController.show);
    router.get('/zones/:id/animals', ZonesController.animalsByZone);

    router.post('/attractions', AttractionsController.create);
    router.get('/attractions', AttractionsController.index);
    router.get('/attractions/:id', AttractionsController.show);

    app.use('/api', router);
};