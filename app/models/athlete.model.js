/*  define constructor for Athlete object here, 
and use the database connection above to write CRUD 
functions:
*/
const sql = require("./db.js");

// constructor
const Athlete = function(athlete) {
  this.LastName = athlete.LastName;
  this.FirstName = athlete.FirstName;
  this.Address = athlete.Address;
  this.City = athlete.City;
};

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
Athlete.getAll = (city, result) => {
  let query = "SELECT * FROM Athletes";

  if (city) {
    query += ` WHERE City LIKE '%${city}%'`;
  }

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

Athlete.getAllPublished = result => {
  sql.query("SELECT * FROM Athletes WHERE LastName=true", (err, res) => {
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
    "UPDATE Athletes SET LastName = ?, FirstName = ?, Address = ?, City = ? WHERE Athleteid = ?",
    [athlete.LastName, athlete.FirstName, athlete.Address,athlete.City, id],
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
