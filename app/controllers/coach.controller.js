const Coach = require("../models/coach.model.js");


// Create coach

// FunctionCreate
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const coach = new Coach({
    // Name of coach
    Name: req.body.Name,
    Years: req.body.Years,
    City: req.body.City,
    Description: req.body.Description,
    Clubid: req.body.Clubid
  });
  
  // Save coach in the database
  Coach.create(coach, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating coach."
      });
    else res.send(data);
  });
};
// Listing of all category
exports.view = (req, res) => {
  
  Coach.viewCoach((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Coachs."
      });
    else res.send(data);
    
  });
};

exports.delete = (req, res) => {
  Coach.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Coach with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Coach with id " + req.params.id
        });
      }
    } else res.send({ message: `Coach was deleted successfully!` });
  });
};

//Delete all objects
//Delete all coach from the database:

exports.deleteAll = (req, res) => {
  Coach.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Coach."
      });
    else res.send({ message: `All Coach were deleted successfully!` });
  });
};