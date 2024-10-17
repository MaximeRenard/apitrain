// Servor
const express = require("express");
//cors provides Express middleware to enable CORS with various option
const cors = require("cors");

// Api
const app = express();
// not use ? 
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
  res.json({ message: "We5come to apitrain application for runners." });
});

require("./app/routes/athlete.routes.js")(app);

// set port, listen for requests process.env.PORT 
const PORT =  process.env.PORT || 8089;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

