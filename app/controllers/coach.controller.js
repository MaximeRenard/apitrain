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