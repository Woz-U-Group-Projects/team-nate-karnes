var express = require('express');
var router = express.Router();

var holidays = require('../models/holidays.js');
var weathers = require('../models/weathers.js');

router.get('/holidays/:name', function(req, res, next) {
  holidays.findOne({name:req.params.name}, (err, peep) => {
    console.log(err, peep);
    res.send(peep.name);
  });
 });

 router.get('/holidays', function(req, res, next) {
  holidays.find((err, peep) => {
    res.send(peep);
  });
 });

 router.get('/weathers/:name', function(req, res, next) {
  weathers.findOne({name:req.params.name}, (err, peep) => {
    console.log(err, peep);
    res.send(peep.name);
  });
 });

 router.get('/weathers', function(req, res, next) {
  weathers.find((err, peep) => {
    res.send(peep);
  });
 });

module.exports = router;