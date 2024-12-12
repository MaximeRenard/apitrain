module.exports = app => {
  const category = require("../controllers/category.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/create", category.create);
  // View category
  router.get("/view", category.AllCategory);

  // Delete all category
  router.delete("/deleteall", category.deleteAll);

  // Delete category
  router.delete("/delete/:id", category.delete);

  // Update Category with id
  router.put("/update/:id", category.update);
  

  app.use('/api/Category', router);
};