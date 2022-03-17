var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({
    "data": "this is where data will go"
  })
});

module.exports = router;
