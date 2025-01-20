/*  define constructor for Result object here, 
and use the database connection above to write CRUD 
functions:
*/
const sql = require("./db.js");

//Result
const Result = function(result) {
  this.Athleteid = result.Athleteid;
  this.Raceid = result.Raceid;
  this.Timerace = result.Timerace;
  
};
// Function for Athlete table      
Result.create = (newResult, result) => {
  sql.query("INSERT INTO ResultAthletesRace SET ?", newResult, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created Result: ", { id: res.insertId, ...newResult });
    result(null, { id: res.insertId, ...newResult });
  });
};
// View race result
Result.viewRaceResult = (id,result) => {
  let query = "SELECT * FROM ResultAthletesRace WHERE Raceid = ?";

  sql.query(query,id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Result: ", res);
    result(null, res);
    
  });
};
Result.viewRaceAthlete = (id,result) => {
  let query = "SELECT * FROM ResultAthletesRace WHERE Athleteid = ?";

  sql.query(query,id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Athletes: ", res);
    result(null, res);
    
  });
};

module.exports = Result;