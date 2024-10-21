const Category = require("../models/category.model.js");


// Create category

// FunctionCreate
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