module.exports = app => {
  const athletes = require("../controllers/athlete.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", athletes.create);

  // Retrieve all Athletes
  router.get("/", athletes.findAll);

  // Retrieve all published Athletes
  router.get("/published", athletes.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", athletes.findOne);

  // Update a Tutorial with id
  router.put("/:id", athletes.update);

  // Delete a Tutorial with id
  router.delete("/:id", athletes.delete);

  // Delete all Athletes
  router.delete("/", athletes.deleteAll);

  app.use('/api/Athletes', router);
};