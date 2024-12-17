module.exports = app => {
  const clubs = require("../controllers/club.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/create/", clubs.create);
  // Listing all clubs
  router.get("/view/", clubs.Allclub);

  // Delete all club
  router.delete("/delete/", clubs.deleteAll);

  // Delete club
  router.delete("/delete/:id", clubs.delete);


  app.use('/api/Clubs', router);
};