/*  define constructor for Race object here, 
and use the database connection above to write CRUD 
functions:
*/
const sql = require("./db.js");
// Category
const Category = function(category) {
  this.nameCategory = category.nameCategory;
  this.descriptionCategory = category.descriptionCategory;
};
