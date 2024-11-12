module.exports = app => {
  const clubs = require("../controllers/club.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/create/", clubs.create);

  app.use('/api/Clubs', router);
};