/*  Request on multi table with join table
*/
const sql = require("./db.js");
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
// 1- Athlete d'une ville

// 2- Athlete des club

// 3- Athlete d'un coach

// 4- Athlete d'une categorie

// 6- Meilleur athlete par categorie, club

// 7- Coach Annuaire order by athlete

// 8- Resultat d'une course

// 9- tous les Resultats d'un athlete

// 10- Record athlete par epreuve

module.exports = Result;