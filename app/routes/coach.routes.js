module.exports = app => {
  const coach = require("../controllers/coach.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/create", coach.create);

  // view coach
  router.get("/view",coach.view);

  // Delete all coach
  router.delete("/delete/", coach.deleteAll);

  // Delete coach
  router.delete("/delete/:id", coach.delete);

  app.use('/api/Coachs', router);
};
