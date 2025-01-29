module.exports = app => {
  const request = require("../controllers/request.controller.js");
 
  var router = require("express").Router();

  // Request
  
  // Retrieve all Athletes by city
  // GET http://127.0.0.1:8080/api/Statistic/Athletes_city/
  router.get("/Athletes_city/", request.findAthletescity);
  // Retrieve all Athletes of club
  // GET http://127.0.0.1:8080/api/Statistic/Athletes_club/1
  router.get("/Athletes_club/:idclub", request.findAthletesclub);

  app.use('/api/Statistic', router);
};