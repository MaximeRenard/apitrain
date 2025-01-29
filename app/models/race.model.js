/*  define constructor for Race object here, 
and use the database connection above to write CRUD 
functions:
*/
const sql = require("./db.js");

// Race
const Race = function(race) {
  this.Name = race.Name;
  this.DateRace = race.DateRace;
  this.Distance = race.Distance;
  this.City = race.City;
  this.Description = race.Description;
  this.Clubid = race.Clubid;
};


// Function for Athlete table      
Race.create = (newRace, result) => {
  sql.query("INSERT INTO Race SET ?", newRace, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created Race: ", { id: res.insertId, ...newRace });
    result(null, { id: res.insertId, ...newRace });
  });
};

Race.viewRace = (result) => {
  let query = "SELECT * FROM Race";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Race: ", res);
    result(null, res);
    
  });
};
Race.removeAll = result => {
  sql.query("DELETE FROM Race", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} Race`);
    result(null, res);
  });

};

Race.remove = (id, result) => {
  sql.query("DELETE FROM Race WHERE Raceid = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Race with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted Race with id: ", id);
    result(null, res);
  });
};

module.exports = Race;