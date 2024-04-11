var express = require('express');
var router = express.Router();

// require controller modules
var api_controller = require('../controllers/api');
var drone_controller = require('../controllers/drone');
const drone = require('../models/drone');

/// API ROUTE ///
// GET resources base
router.get('/', api_controller.api);

/// DRONE ROUTES ///

// POST request for creating a drone
router.post('/drones', drone_controller.drone_create_post);

// DELETE request to delete drone
router.delete('/drones/:id', drone_controller.drone_delete);

//PUT request to update Drone
router.put('/drones/:id', drone_controller.drone_update_put);

//GET request for one drone
router.get('/drones/:id', drone_controller.drone_detail);

//GET request for all drones
router.get('/drones', drone_controller.drone_view_all_Page);

module.exports = router;