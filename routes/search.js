const express = require('express');
const router = express.Router();
const dataService = require('../data/service');

router.get('/', function (req, res, next) {
  try {
    const data = dataService.getByQueryParams(req.query);
    res.send(data);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
