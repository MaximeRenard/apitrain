// Servor
const express = require("express");
//cors provides Express middleware to enable CORS with various option
const cors = require("cors");

// Api
const app = express();
// option servor connection
var corsOptions = {
	origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to apitrain application for runners and coach." });
});
// Category part
require("./app/routes/category.routes.js")(app);
// Club part
require("./app/routes/club.routes.js")(app);
// Coach part
require("./app/routes/coach.routes.js")(app);
// Athlete part
require("./app/routes/athlete.routes.js")(app);

// set port, listen for requests process.env.PORT 
const PORT =  process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

