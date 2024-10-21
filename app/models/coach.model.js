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
