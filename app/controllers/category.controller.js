const Category = require("../models/category.model.js");


// Create function models
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const category = new Category({
    // Name of category
    NameCategory: req.body.NameCategory,
    DescriptionCategory: req.body.DescriptionCategory
  });

  // Save category in the database
  Category.create(category, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating category."
      });
    else res.send(data);
  });
};

  // Listing of all category
  exports.AllCategory = (req, res) => {
  alert("passage AllCategory back")
  Category.category_athletes((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Category."
      });
    else res.send(data);
    alert(res)
  });
};