const mysql = require("mysql2");
const dbConfig = require("../config/db.config.js");

// Create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

// Creation in order

// CREATE Database
const tableCategory = `CREATE TABLE IF NOT EXISTS CategoryAthletes( 
        Categoryid int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
        Sexcategory VARCHAR(10) NOT NULL,
        NameCategory varchar(3) NOT NULL,
        DescriptionCategory varchar(55) NOT NULL,
        CONSTRAINT CHK_Category CHECK (Sexcategory = 'Men' OR Sexcategory='Woman')
      )ENGINE=InnoDB DEFAULT CHARSET=utf8;` 

const tableclub = `CREATE TABLE IF NOT EXISTS Clubs(
        Clubid int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
        Nameclub varchar(30) NOT NULL,
        City varchar(50) NOT NULL,
        Address varchar(50),
        Description varchar(255)
      )ENGINE=InnoDB DEFAULT CHARSET=utf8;`

const tableCoach = `CREATE TABLE IF NOT EXISTS Coach(
        Coachid int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
        Namecoach varchar(30) NOT NULL,
        Years int(4) NOT NULL,
        City varchar(50) NOT NULL,
        Description varchar(255),
        Clubid int NOT NULL,
        CONSTRAINT FK_club FOREIGN KEY (Clubid) REFERENCES Clubs(Clubid)
      )ENGINE=InnoDB DEFAULT CHARSET=utf8;`

const tablerace = `CREATE TABLE IF NOT EXISTS Race(
        Raceid int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
        Namerace varchar(50) NOT NULL,
        DateRace DATE NOT NULL,
        Distance DOUBLE(4,1) NOT NULL,
        City varchar(50) NOT NULL,
        Description varchar(255),
        Clubid int NOT NULL,
        CONSTRAINT FK_club_race FOREIGN KEY (Clubid) REFERENCES Clubs(Clubid)
      )ENGINE=InnoDB DEFAULT CHARSET=utf8;`

// SELECT DATE_FORMAT("2018-09-24", "%M %d %Y"); and DATE - format YYYY-MM-DD
const tableAthlete = `CREATE TABLE IF NOT EXISTS Athletes( 
        Athleteid int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
        LastName varchar(20) NOT NULL,
        FirstName varchar(20)NOT NULL,
        Years int(4) NOT NULL,
        Sexathetes VARCHAR(10) NOT NULL,
        Weight FLOAT(5,2),
        Height FLOAT(4,2),
        City varchar(50) NOT NULL,
        FavoriteDistance varchar(20),
        Clubid int NOT NULL,
        FOREIGN KEY (Clubid) REFERENCES Clubs(Clubid),
        Coachid int NOT NULL,
        FOREIGN KEY (Coachid) REFERENCES Coach(Coachid),
        Categoryid int(11) NOT NULL,
        FOREIGN KEY (Categoryid) REFERENCES CategoryAthletes(Categoryid),
        CONSTRAINT CHK_Athletes CHECK (Sexathetes = 'Men' OR Sexathetes='Woman')
      
      )ENGINE=InnoDB DEFAULT CHARSET=utf8;`

const tableResult = `CREATE TABLE IF NOT EXISTS ResultAthletesRace( 
        Athleteid int(11) NOT NULL,
        Raceid int(11) NOT NULL,
        Timerace TIME NOT NULL,
        FOREIGN KEY (Raceid) REFERENCES Race(RaceID),
        FOREIGN KEY (Athleteid) REFERENCES Athletes(Athleteid)
      
      )ENGINE=InnoDB DEFAULT CHARSET=utf8;` 

// Suppression des tables et des données 
// open the MySQL connection
  
connection.connect(function(err) {
  console.log("Successfully connected to the database.");
  /*
  // Delete all tables
    const delete_tables = `DROP TABLE IF EXISTS 
    ResultAthletesRace,Athletes,Race,CategoryAthletes,Coach,Clubs;`
    var reinitialize = delete_tables;
    connection.query(reinitialize, function (err, result) {
    if (err) throw err;
    console.log("Delete All tables");
  });
*/
// Create DB and connection

  // Create Table category
  var category = tableCategory; 
  connection.query(category, function (err, result) {
    if (err) throw err;
    console.log("Table Category created");
  });

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
  // Create Result race 
  var raceresult = tableResult; 
  connection.query(raceresult, function (err, result) {
    if (err) throw err;
    console.log("Table Athletes-Race created");
  });

});


module.exports = connection;