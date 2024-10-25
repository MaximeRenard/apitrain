/*  define constructor for Athlete object here, 
and use the database connection above to write CRUD 
functions:
*/
const sql = require("./db.js");





// constructor of base

// Athlete
const Athlete = function(athlete) {
  this.LastName = athlete.LastName;
  this.FirstName = athlete.FirstName;
  this.Years = athlete.Years;
  this.Weight = athlete.Weight;
  this.Height = athlete.Height;
  this.City = athlete.City;
  this.FavoriteDistance = athlete.FavoriteDistance;
  this.Clubid = athlete.Clubid;
  this.Coachid = athlete.Coachid;
  this.Categoryid = athlete.Categoryid;
};


// Function for Athlete table      
Athlete.create = (newAthlete, result) => {
  sql.query("INSERT INTO Athletes SET ?", newAthlete, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created Athlete: ", { id: res.insertId, ...newAthlete });
    result(null, { id: res.insertId, ...newAthlete });
  });
};

Athlete.findById = (id, result) => {
  sql.query(`SELECT * FROM Athletes WHERE Athleteid = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found Athlete: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Athlete with the id
    result({ kind: "not_found" }, null);
  });
};

// Athletes of city
//if (city) {
  //  query += ` WHERE City LIKE '%${city}%'`;
  //}
Athlete.getAllAthletes = (city, result) => {
  let query = "SELECT * FROM Athletes";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Athletes: ", res);
    result(null, res);
  });
};

Athlete.getAllCategory = result => {
  sql.query("SELECT * FROM Athletes WHERE Categoryid = 3", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Athletes: ", res);
    result(null, res);
  });
};

Athlete.updateById = (id, athlete, result) => {
  sql.query(
    "UPDATE Athletes SET LastName = ?, FirstName = ?, Years = ?,Weight = ?, Height = ?, City = ?, FavoriteDistance = ? WHERE Athleteid = ?",
    [athlete.LastName, athlete.FirstName, athlete.Years,athlete.Weight,athlete.Height,athlete.City,athlete.FavoriteDistance, id],
  // No change in foreign key  
  //this.ClubsID = athlete.ClubsID;
  //this.CoachID = athlete.CoachID;
  //this.Categoryid = athlete.Categoryid;
    (err, res) => {
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

      console.log("updated Athlete: ", { id: id, ...Athlete });
      result(null, { id: id, ...Athlete });
    }
  );
};

Athlete.remove = (id, result) => {
  sql.query("DELETE FROM Athletes WHERE Athleteid = ?", id, (err, res) => {
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

    console.log("deleted Athlete with id: ", id);
    result(null, res);
  });
};

Athlete.removeAll = result => {
  sql.query("DELETE FROM Athletes", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} Athletes`);
    result(null, res);
  });
};

module.exports = Athlete;
