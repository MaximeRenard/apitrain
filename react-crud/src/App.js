import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
// Base CSS 
//import "../node_modules/bootstrap/dist/css/bootstrap.css";
// Modif CSS
import "./bootstrap.css";

// react page
import logo from './logo.svg';

import './App.css';

// import table

// Category
import AthletesList from "./components/athletes.component";
import AthletesAdd from "./components/add-athletes.component";
// Category
import CategoryList from "./components/category.component";
import CategoryAdd from "./components/add-category.component";
// Inclu in Category list
//import Categorydelete from "./components/delete-category.component";
import ClubList from "./components/club.component";
import ClubAdd from "./components/add-club.component";

import CoachList from "./components/coach.component";
import CoachAdd from "./components/add-coach.component";

// Race
import RaceList from "./components/race.component";
// import ResultList from "./components/Result.component";

// Home Tutoriel
import Homepageapp from "./components/homeapi.component";
import Homepageweb from "./components/homeweb.component";
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
              <Link to={"/Homeweb"} className="nav-link">
                Home web
              </Link>
             </li>

            <li className="nav-item">
              <Link to={"/Homeapi"} className="nav-link">
                Home api
              </Link>
             </li>
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
            <li className="nav-item">
              
              <Link to={"/Category/view/"} className="nav-link">
                Category 
              </Link>
            </li>

            <li className="nav-item">
              
              <Link to={"/Clubs/view/"} className="nav-link">
                Club List
              </Link>
            </li>
            
             <li className="nav-item">
              
              <Link to={"/Coachs/view/"} className="nav-link">
                Coach List
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
            
             
           
          </div>
        </nav>
        <h1> Api Foxrun</h1>
        
         <img src="Logo_perso.svg" className="App-logo" alt="logo fox " />
        <div className="container mt-3">
          <Routes>
            <Route path="/Homeweb" element={<Homepageweb/>} />
            <Route path="/Homeapi" element={<Homepageapp/>} />
            <Route path="/Form/" element={<Formpageweb/>} />
            <Route path="/DataHook/" element={<DataHook/>} />
            <Route path="/Callback/" element={<Callback/>} />
            <Route path="/UseFetch/" element={<HookFetch/>} />
            <Route path="/Fetchexample/view/" element={<FetchCategory/>} />
            <Route path="/Athletes/view/" element={<AthletesList/>} />
            <Route path="/Athletes/create/" element={<AthletesAdd/>} />
            <Route path="/Clubs/view/" element={<ClubList/>} />
            <Route path="/Clubs/create/" element={<ClubAdd/>} />
            <Route path="/Category/view/" element={<CategoryList/>} />
            <Route path="/Category/create/" element={<CategoryAdd/>} />
            <Route path="/Coachs/view/" element={<CoachList/>} />
            <Route path="/Coachs/create/" element={<CoachAdd/>} />
            <Route path="/Race/view/" element={<RaceList/>} />
            
            
            

            
          </Routes>


        </div>
      </div>
      </body>
      </html>

    );
  }
}


export default App;

/*
class React_page extends Component{
  render(){
    return(
       <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

    );

  }
}
*/
