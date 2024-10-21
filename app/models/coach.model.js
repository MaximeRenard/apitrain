/*  define constructor for Coach object here, 
and use the database connection above to write CRUD 
functions:
*/
const sql = require("./db.js");

// Coach
const Coach = function(coach) {
  this.Name = coach.Name;
  this.Years = coach.Years;
  this.City = coach.City;
  this.Description = coach.Description;
  this.ClubsID = coach.ClubsID;
};

// Function for coach table
// Create Coach      
Coach.create = (newCoach, result) => {
  sql.query("INSERT INTO Coach SET ?", newCoach, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created Coach: ", { id: res.insertId, ...newCoach });
    result(null, { id: res.insertId, ...newCoach });
  });
};

module.exports = Coach;