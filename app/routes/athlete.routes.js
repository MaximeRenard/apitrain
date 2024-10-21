module.exports = app => {
  const athletes = require("../controllers/athlete.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/create", athletes.create);

  // Retrieve all Athletes of city
  router.get("/city", athletes.findAllCity);

  // Retrieve all Athletes of city
  router.get("/Category", athletes.findAllCategory);

  // Retrieve a single Tutorial with id
  router.get("/view/:id", athletes.findOne);

  // Update a Tutorial with id
  router.put("/update/:id", athletes.update);

  // Delete a Tutorial with id
  router.delete("/delete/:id", athletes.delete);

  // Delete all Athletes
  router.delete("/delete", athletes.deleteAll);

  app.use('/api/Athletes', router);
};


