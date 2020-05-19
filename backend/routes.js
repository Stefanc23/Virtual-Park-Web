const express = require('express');
const router = express.Router();
const { AnimalsController, ZonesController, AttractionsController, QuestionsController } = require('./controllers');

module.exports = function(app) {
    router.post('/animals', AnimalsController.create);
    router.get('/animals', AnimalsController.index);
    router.get('/animals/:id', AnimalsController.updateClicks);

    router.post('/zones', ZonesController.create);
    router.get('/zones', ZonesController.index);
    router.get('/zones/:id/animals', ZonesController.getAnimalsFromZone);
    router.get('/zones/:id', ZonesController.updateClicks);

    router.post('/attractions', AttractionsController.create);
    router.get('/attractions', AttractionsController.index);
    router.get('/attractions/:id', AttractionsController.updateClicks);

    router.post('/questions', QuestionsController.create);
    router.get('/questions', QuestionsController.index);
    router.get('/questions/:id', QuestionsController.find);

    app.use('/api', router);
};