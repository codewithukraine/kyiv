var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
  {
    number: 1,
    name: 'Jane',
    gender: 'female'
  },
  {
    number: 2,
    name: 'John',
    gender: 'male'
  }
  ])
});

module.exports = router;
