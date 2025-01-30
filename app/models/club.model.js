/*  define constructor for Club object here, 
and use the database connection above to write CRUD 
functions:
*/
const sql = require("./db.js");

// Club
const Club = function(club) {
  this.Nameclub = club.Nameclub;
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
Club.removeAll = result => {
  sql.query("DELETE FROM Clubs", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} Club`);
    result(null, res);
  });
};
Club.remove = (id, result) => {
  sql.query("DELETE FROM Clubs WHERE Clubid = ?", id, (err, res) => {
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

    console.log("deleted Club with id: ", id);
    result(null, res);
  });
};

module.exports = Club;