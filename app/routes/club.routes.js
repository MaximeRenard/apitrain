module.exports = app => {
  const clubs = require("../controllers/club.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/create/", clubs.create);
  // Listing all clubs
  router.get("/view/", clubs.Allclub);


  app.use('/api/Clubs', router);
};