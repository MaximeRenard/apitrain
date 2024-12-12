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
  
  Category.category_athletes((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Category."
      });
    else res.send(data);
    
  });
};
//Delete an object
//Delete a Athlete with the specified id in the request:

exports.delete = (req, res) => {
  Category.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Category with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Category with id " + req.params.id
        });
      }
    } else res.send({ message: `Category was deleted successfully!` });
  });
};

//Delete all objects
//Delete all Athletes from the database:

exports.deleteAll = (req, res) => {
  Category.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Category."
      });
    else res.send({ message: `All Category were deleted successfully!` });
  });
};
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Category.updateById(
    req.params.id,
    new Category(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Category with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Category with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};