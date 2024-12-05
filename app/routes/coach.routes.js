module.exports = app => {
  const coach = require("../controllers/coach.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/create", coach.create);

  // view coach
  router.get("/view",coach.view)

  app.use('/api/Coachs', router);
};
