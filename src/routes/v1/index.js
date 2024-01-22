const express = require('express');

const router = express.Router();

const airplaneRoutes = require('./airplane-routes');

const airportRoutes = require('./airport-routes');

const { InfoController } = require('../../controllers/index');

const cityRoutes = require('./city-routes');

router.get('/info', InfoController.info);

router.use('/airplanes', airplaneRoutes);

router.use('/cities', cityRoutes);

router.use('/airports', airportRoutes);

module.exports = router;