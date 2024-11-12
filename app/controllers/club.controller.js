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