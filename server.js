// Servor
const express = require("express");
//cors provides Express middleware to enable CORS with various option
const cors = require("cors");
const path = require('path');
// Api
const app = express();
// option servor connection
// ["http://localhost:8080/api","http://localhost:8081/api"]
var corsOptions = {
	origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
/*
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});*/
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/api", (req, res) => {
  res.json({ message: "Welcome to apitrain application for runners and coach." });
});
// sendFile will go here
app.get('/api/Home/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});
// Home part Welcome page 
//require("./app/routes/home.routes.js")(app);
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

