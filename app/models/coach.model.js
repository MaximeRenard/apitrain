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
  this.Clubid = coach.Clubid;
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
Coach.viewCoach = (result) => {
  let query = "SELECT * FROM Coach";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Coach: ", res);
    result(null, res);
    //return res;
  });
};

module.exports = Coach;