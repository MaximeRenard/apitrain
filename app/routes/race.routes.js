module.exports = app => {
  const race = require("../controllers/race.controller.js");
 
  var router = require("express").Router();

  // Create a new race
  router.post("/create", race.create);

  // Post a result
  router.post("/result", race.result);

  // view race
  router.get("/view",race.view);

   // Delete all race
  router.delete("/delete/", race.deleteAll);

  // Delete race
  router.delete("/delete/:id", race.delete);

  // View race result
  router.get("/result/:id", race.findResultRace);

  // View result athlete
  router.get("/result/athlete/:id", race.findResultAthlete);
  

  app.use('/api/race', router);
};
