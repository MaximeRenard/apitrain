const Request = require("../models/request.model.js");

// Request 1
exports.findAthletescity = (req, res) => {

  Request.getAthletescity((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Athletes order by city."
      });
    else res.send(data);
  });
};
// Request 2
exports.findAthletesclub = (req, res) => {

  Request.getAthletesClub(req.params.idclub,(err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Athletes of club."
      });
    else res.send(data);
  });
};