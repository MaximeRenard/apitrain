const Athlete = require("../models/athlete.model.js");


// Create
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Athlete
  const athlete = new Athlete({
    LastName: req.body.LastName,
    FirstName: req.body.FirstName,
    Address: req.body.Address,
    City: req.body.City || false
  });

  // Save Athlete in the database
  Athlete.create(athlete, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Athlete."
      });
    else res.send(data);
  });
};

// Retrieve all objects
exports.findAll = (req, res) => {
  const city = req.query.city;

  Athlete.getAll(city, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Athletes."
      });
    else res.send(data);
  });
};

exports.findAllPublished = (req, res) => {
  Athlete.getAllPublished((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Athletes."
      });
    else res.send(data);
  });
};
//Retrieve a single object
//Find a single Athlete by the id:

exports.findOne = (req, res) => {
  Athlete.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Athlete with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Athlete with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};
//Update an object
//Update a Athlete identified by the id in the request:

exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Athlete.updateById(
    req.params.id,
    new Athlete(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Athlete with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Athlete with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

//Delete an object
//Delete a Athlete with the specified id in the request:

exports.delete = (req, res) => {
  Athlete.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Athlete with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Athlete with id " + req.params.id
        });
      }
    } else res.send({ message: `Athlete was deleted successfully!` });
  });
};

//Delete all objects
//Delete all Athletes from the database:

exports.deleteAll = (req, res) => {
  Athlete.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Athletes."
      });
    else res.send({ message: `All Athletes were deleted successfully!` });
  });
};