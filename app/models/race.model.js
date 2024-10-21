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
  this.ClubsID = race.ClubsID;
  
};