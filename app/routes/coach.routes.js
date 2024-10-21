module.exports = app => {
  const coach = require("../controllers/coach.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/create", coach.create);

  app.use('/api/Coachs', router);
};