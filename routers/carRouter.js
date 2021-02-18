const router = require('express').Router();
const carController = require('../controllers/carController');


router.get('/allCars',carController.indexAll);


















module.exports = router;