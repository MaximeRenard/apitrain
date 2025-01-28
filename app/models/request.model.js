/*  Request on multi table with join table*/
const sql = require("./db.js");

// Request Athlete
const Request = function(athlete) {
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
/*
//Category
const Category = function(category) {
  this.NameCategory = category.NameCategory;
  this.DescriptionCategory = category.DescriptionCategory;
};

//Club
const Club = function(club) {
  this.Name = club.Name;
  this.City = club.City;
  this.Address = club.Address;
  this.Description = club.Description;
};
// Coach
const Coach = function(coach) {
  this.Name = coach.Name;
  this.Years = coach.Years;
  this.City = coach.City;
  this.Description = coach.Description;
  this.Clubid = coach.Clubid;
};
// Race

const Race = function(race) {
  this.Name = race.Name;
  this.DateRace = race.DateRace;
  this.Distance = race.Distance;
  this.City = race.City;
  this.Description = race.Description;
  this.Clubid = race.Clubid;
}; 
// Result
const Result = function(result) {
  this.Athleteid = result.Athleteid;
  this.Raceid = result.Raceid;
  this.Timerace = result.Timerace;
  
};
const Category = function(category) {
  this.NameCategory = category.NameCategory;
  this.DescriptionCategory = category.DescriptionCategory;
};
*/
// 1- Athlete par ville with alphabetic order
// Athletes of city
//if (city) {
  //  query += ` WHERE City LIKE '%${city}%'`;
  //}
Request.getAthletescity = (result) => {
  let query = "SELECT LastName,FirstName,City,FavoriteDistance FROM Athletes WHERE City IS NOT NULL ORDER BY City";

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
// 2- Athlete des club par category et nb adherent

// 3- Athlete d'un coach avec affichage nom 

// 4- Athlete d'une categorie order by sex 

// 6- Meilleur athlete par categorie, club

// 7- Coach Annuaire order by athlete affichage nom, club

// 8- Podium d'une course oder by sex 

// 9- tous les Resultats d'un athlete oder by date course

// 10- Record des epreuves avc affichage temps et Athletes

module.exports = Request;