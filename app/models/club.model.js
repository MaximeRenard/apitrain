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

// Function for Club table
// Create club      
Club.create = (newClub, result) => {
  sql.query("INSERT INTO Clubs SET ?", newClub, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created Club: ", { id: res.insertId, ...newClub });
    result(null, { id: res.insertId, ...newClub });
  });
};
Club.allclubs = (result) => {
  let query = "SELECT * FROM Clubs";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Clubs: ", res);
    result(null, res);
  });
};

module.exports = Club;