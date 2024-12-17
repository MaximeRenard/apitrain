const Club = require("../models/club.model.js");


// Create club
// Create
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const club = new Club({
    // Name of club
    Name: req.body.Name,
    City: req.body.City,
    Address: req.body.Address,
    Description: req.body.Description
  });

  // Save Club in the database
  Club.create(club, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating Club."
      });
    else res.send(data);
  });
};
// Listing of all category
exports.Allclub= (req, res) => {

  Club.allclubs((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving clubs."
      });
    else res.send(data);
  });
};
exports.delete = (req, res) => {
  Club.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Club with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Club with id " + req.params.id
        });
      }
    } else res.send({ message: `Club was deleted successfully!` });
  });
};

//Delete all objects
//Delete all Athletes from the database:

exports.deleteAll = (req, res) => {
  Club.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Club."
      });
    else res.send({ message: `All Club were deleted successfully!` });
  });
};