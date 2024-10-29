module.exports = app => {
  const home = require("../controllers/home.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.get("/", home.welcome);

  app.use('/api/Home', router);
};