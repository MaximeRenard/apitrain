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
module.exports = Result;