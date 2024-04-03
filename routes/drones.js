var express = require('express');
const drone_controlers= require('../controllers/drone');
var router = express.Router();

/* GET home page. */
router.get('/', drone_controlers.drone_view_all_Page);

module.exports = router;
