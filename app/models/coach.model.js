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
Coach.removeAll = result => {
  sql.query("DELETE FROM Coach", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} Coach`);
    result(null, res);
  });

};

Coach.remove = (id, result) => {
  sql.query("DELETE FROM Coach WHERE Coachid = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Athlete with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted Coach with id: ", id);
    result(null, res);
  });
};

module.exports = Coach;