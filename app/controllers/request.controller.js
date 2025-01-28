const Request = require("../models/request.model.js");

// Request
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
