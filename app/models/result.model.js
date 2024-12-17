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
module.exports = Result;