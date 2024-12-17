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

  app.use('/api/race', router);
};
