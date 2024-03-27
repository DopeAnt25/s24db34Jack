var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let query = req.query;
  console.log(`Rows: ${query.rows}`);
  console.log(`Cols: ${query.cols}`);
  res.render('grid', { title: 'Grid Display', query: query });
});

module.exports = router;
