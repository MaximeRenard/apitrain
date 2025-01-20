import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
// Base CSS 
//import "../node_modules/bootstrap/dist/css/bootstrap.css";
// Modify CSS
import "./bootstrap.css";

import './App.css';

// import component
// Home
import Homepage from "./components/home.component";

// Actualite et calendar
import Actualitepage from "./components/actualite.component";

// Category
import CategoryList from "./components/category.component";
import CategoryAdd from "./components/add-category.component";

//Clubs
import ClubList from "./components/club.component";
import ClubAdd from "./components/add-club.component";

// Coach
import CoachList from "./components/coach.component";
import CoachAdd from "./components/add-coach.component";

// Athletes
import AthletesList from "./components/athletes.component";
import AthletesAdd from "./components/add-athletes.component";

// Race
import RaceList from "./components/race.component";
// Add fonction result avec affichage resultat course et add 
// Front add resultat et course

// Request page 
import Requestpage from "./components/request.component";

// Contact Page
import Contactpage from "./components/contact.component";


// Page Tutoriel Exercice not shown
import Formpageweb from "./components/Form.component";
// Exemple with Hook
import FetchCategory from "./components/getCategoryfetch.component";
import DataHook from "./components/usereducer.Hook";
import HookFetch from "./components/indexhook";
import Callback from "./components/index";



class App extends Component {
  render() {
    return (
      <html>
      <head>
      <h1> Api Foxrun</h1>
      </head>
     
      
      <body>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/api" className="navbar-brand">
            Foxrun
          </a>
          
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/Home"} className="nav-link">
                Home
              </Link>
             </li>

            <li className="nav-item">
              <Link to={"/Actualite/"} className="nav-link">
                Actualite&Calendar
              </Link>
             </li>

            <li className="nav-item">
              
              <Link to={"/Category/view/"} className="nav-link">
                Category 
              </Link>
            </li>

            <li className="nav-item">
              
              <Link to={"/Clubs/view/"} className="nav-link">
                Clubs 
              </Link>
            </li>
            
             <li className="nav-item">
              
              <Link to={"/Coachs/view/"} className="nav-link">
                Coachs
              </Link>
            </li>
            <li className="nav-item">
              
              <Link to={"/Athletes/view/"} className="nav-link">
                Athletes
              </Link>
            </li>

            <li className="nav-item">
              
              <Link to={"/Race/view/"} className="nav-link">
                Race
              </Link>
            </li>
            
            <li className="nav-item">
              
              <Link to={"/Statistic/"} className="nav-link">
                Statistic&research
              </Link>
            </li>

            <li className="nav-item">
              
              <Link to={"/Contact/"} className="nav-link">
                Contact us
              </Link>
            </li>
             

           
          </div>
        </nav>
        <h1> Api Foxrun</h1>
        
         <img src="Logo_perso.svg" className="App-logo" alt="logo fox " />
        <div className="container mt-3">
          <Routes>
            <Route path="/Home" element={<Homepage/>} />
            <Route path="/Actualite" element={<Actualitepage/>} />
            
            <Route path="/Category/view/" element={<CategoryList/>} />
            <Route path="/Category/create/" element={<CategoryAdd/>} />

            <Route path="/Clubs/view/" element={<ClubList/>} />
            <Route path="/Clubs/create/" element={<ClubAdd/>} />

            <Route path="/Coachs/view/" element={<CoachList/>} />
            <Route path="/Coachs/create/" element={<CoachAdd/>} />
            
            <Route path="/Athletes/view/" element={<AthletesList/>} />
            <Route path="/Athletes/create/" element={<AthletesAdd/>} />
            
            
            <Route path="/Race/view/" element={<RaceList/>} />
            <Route path="/Statistic/" element={<Requestpage/>} />

            <Route path="/Contact/" element={<Contactpage/>} />

            <Route path="/Form/" element={<Formpageweb/>} />
            <Route path="/DataHook/" element={<DataHook/>} />
            <Route path="/Callback/" element={<Callback/>} />
            <Route path="/UseFetch/" element={<HookFetch/>} />
            <Route path="/Fetchexample/view/" element={<FetchCategory/>} />           
            

            
          </Routes>


        </div>
      </div>
      </body>
      </html>

    );
  }
}


export default App;

// Link to Exercice page
 /*
             <li className="nav-item">
              
              <Link to={"/Form/"} className="nav-link">
                Forms
              </Link>
            </li>
            <li className="nav-item">
              
              <Link to={"/DataHook/"} className="nav-link">
                DataHook
              </Link>
            </li>
            <li className="nav-item">
              
              <Link to={"/Callback/"} className="nav-link">
                Callback
              </Link>
            </li>
            
            <li className="nav-item">
            
            <Link to={"/UseFetch/"} className="nav-link">
                UseFetch
            </Link>
            </li>
           
             <li className="nav-item">
              
              <Link to={"/Fetchexample/view/"} className="nav-link">
                Fetch GetCategory
              </Link>

            </li>
*/