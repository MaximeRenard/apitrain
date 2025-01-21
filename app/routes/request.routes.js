module.exports = app => {
  const request = require("../controllers/request.controller.js");
 
  var router = require("express").Router();

  // Request
  

  app.use('/api/Statistic', router);
};