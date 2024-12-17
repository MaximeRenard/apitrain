const Race = require("../models/race.model.js");
const Result = require("../models/result.model.js");


// Create race

// FunctionCreate race
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const race = new Race({
    Name : req.body.Name,
    DateRace : req.body.DateRace,
    Distance : req.body.Distance,
    City : req.body.City,
    Description : req.body.Description,
    ClubsID : req.body.ClubsID
  });
  
  // Save race in the database
  Race.create(race, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating race."
      });
    else res.send(data);
  });
};


// Listing of all category
exports.view = (req, res) => {
  
  Race.viewRace((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving races."
      });
    else res.send(data);
    
  });
};
exports.delete = (req, res) => {
  Race.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Race with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Race with id " + req.params.id
        });
      }
    } else res.send({ message: `Race was deleted successfully!` });
  });
};


//Delete all race from the database:

exports.deleteAll = (req, res) => {
  Race.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Race."
      });
    else res.send({ message: `All Race were deleted successfully!` });
  });
};
// Insert result
exports.result = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

const result = new Result({
    Athleteid : req.body.Athleteid,
    Raceid : req.body.Raceid,
    Timerace : req.body.Timerace
  });
  
  // Save race in the database
  Result.create(result, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating result race."
      });
    else res.send(data);
  });
};