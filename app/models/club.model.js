/*  define constructor for Club object here, 
and use the database connection above to write CRUD 
functions:
*/
const sql = require("./db.js");

// Club
const Club = function(club) {
  this.Name = club.Name;
  this.City = club.City;
  this.Address = club.Address;
  this.Description = club.Description;
};