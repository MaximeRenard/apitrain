const mysql = require("mysql2");
const dbConfig = require("../config/db.config.js");

// Create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

// Database
const tableclub = `CREATE TABLE IF NOT EXISTS Clubs(
        Clubsid int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
        Name varchar(20) NOT NULL,
        City varchar(50) NOT NULL,
        Address varchar(50),
        Description varchar(255)
      )ENGINE=InnoDB DEFAULT CHARSET=utf8;`

const tableCoach = `CREATE TABLE IF NOT EXISTS Coach(
        Coachid int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
        Name varchar(20) NOT NULL,
        Years int(4) NOT NULL,
        City varchar(50) NOT NULL,
        Description varchar(255),
        ClubsID int,
        CONSTRAINT FK_club FOREIGN KEY (ClubsID) REFERENCES Clubs(ClubsID)
      )ENGINE=InnoDB DEFAULT CHARSET=utf8;`

const tablerace = `CREATE TABLE IF NOT EXISTS Race(
        Raceid int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
        Name varchar(20) NOT NULL,
        DateRace DATE NOT NULL,
        Distance DOUBLE(4,1) NOT NULL,
        City varchar(50) NOT NULL,
        Description varchar(255),
        ClubsID int,
        CONSTRAINT FK_club_race FOREIGN KEY (ClubsID) REFERENCES Clubs(ClubsID)
      )ENGINE=InnoDB DEFAULT CHARSET=utf8;`
// SELECT DATE_FORMAT("2018-09-24", "%M %d %Y"); and DATE - format YYYY-MM-DD
const tableAthlete = `CREATE TABLE IF NOT EXISTS Athletes( 
        Athleteid int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
        LastName varchar(20) NOT NULL,
        FirstName varchar(20)NOT NULL,
        Years int(4) NOT NULL,
        Weight float(2,1),
        height float(2,2),
        City varchar(50) NOT NULL,
        favoriteDistance varchar(20),
        ClubsID int,
        FOREIGN KEY (ClubsID) REFERENCES Clubs(ClubsID),
        CoachID int,
        FOREIGN KEY (CoachID) REFERENCES Coach(CoachID)
      
      )ENGINE=InnoDB DEFAULT CHARSET=utf8;`

// Create DB and connection

// open the MySQL connection
connection.connect(function(err) {
  if (err) throw err;
  console.log("Successfully connected to the database.");
  
    // Create Table Club 
  var club = tableclub; 
  connection.query(club, function (err, result) {
    if (err) throw err;
    console.log("Table Club created");
  });
  // Create Table Coach 
  var coach = tableCoach; 
  connection.query(coach, function (err, result) {
    if (err) throw err;
    console.log("Table  Coach created");
  });
  // Create Table Club 
  var race = tablerace; 
  connection.query(race, function (err, result) {
    if (err) throw err;
    console.log("Table Race created");
  });
  // Create Table Athlete 
  var athlete = tableAthlete; 
  connection.query(athlete, function (err, result) {
    if (err) throw err;
    console.log("Table Athletes created");
  });
  console.log("All Table  are created or existed.");
});




module.exports = connection;

