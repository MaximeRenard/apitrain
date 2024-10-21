module.exports = app => {
  const category = require("../controllers/category.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/create", category.create);

  app.use('/api/Category', router);
};