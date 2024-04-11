var express = require('express');
const drone_controlers= require('../controllers/drone');
var router = express.Router();

/* GET home page. */
router.get('/', drone_controlers.drone_view_all_Page);

//GET detail Drone Page
router.get('/detail', drone_controlers.drone_view_one_Page)

//GET create Drone page
router.get('/create', drone_controlers.drone_create_Page);

//GET create update page
router.get('/update', drone_controlers.drone_update_Page);

//GET delete drone page
router.get('/delete', drone_controlers.drone_delete_Page);

module.exports = router;
