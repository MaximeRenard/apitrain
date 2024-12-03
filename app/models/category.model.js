/*  define constructor for Category object here, 
and use the database connection above to write CRUD 
functions:
*/
const sql = require("./db.js");
// Category
const Category = function(category) {
  this.NameCategory = category.NameCategory;
  this.DescriptionCategory = category.DescriptionCategory;
};

// Function for coach table
// Create Category      
Category.create = (newCategory, result) => {
  sql.query("INSERT INTO CategoryAthletes SET ?", newCategory, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created Category: ", { id: res.insertId, ...newCategory });
    result(null, { id: res.insertId, ...newCategory });
  });
};
Category.category_athletes = (result) => {
  let query = "SELECT * FROM CategoryAthletes";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Category: ", res);
    result(null, res);
    //return res;
  });
};
module.exports = Category;
