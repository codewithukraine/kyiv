const express = require('express');
const service = require('../data/service.js');

const getTopics = function (req, res) {
  console.log('getTopics');
  res.json([
    "ukraine-refugees"
  ]);
}

const getServices = function (req, res) {
  console.log('getServices()');
  res.json(service.getServices());
}

const getAdvice = function (req, res) {
  console.log('getAdvice()');
  res.json(service.getByQueryParams(res.query));
}

const getRouter = function() {
  console.log('getRouter()');
  var router = express.Router();

  router.get('/topics', getTopics);
  router.get('/services', getServices);
  router.get('/advice', getAdvice);

  return router
}

module.exports = {
  getRouter
};
