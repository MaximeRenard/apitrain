import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
// navigate
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// react page
import logo from './logo.svg';
//import mylogo from './Logo_perso_plain.svg';
import './App.css';

// import table
import AthletesList from "./components/athletes.component";
import CategoryList from "./components/category.component";
import ClubList from "./components/club.component";
import CoachList from "./components/coach.component";
// import RaceList from "./components/race.component";
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
     
      
      <body>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/api" className="navbar-brand">
            Apitrain
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
                Category of athletes 
              </Link>
            </li>
            <li className="nav-item">
              
              <Link to={"/Clubs/view/"} className="nav-link">
                Club List
              </Link>
            </li>
            <li className="nav-item">
              
              <Link to={"/Athletes/view/"} className="nav-link">
                Athletes
              </Link>
            </li>
             <li className="nav-item">
              
              <Link to={"/Coachs/view/"} className="nav-link">
                Coach List
              </Link>
            </li>
            
             
           
          </div>
        </nav>

        
         <img src={logo} className="App-logo" alt="logo" />
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
            <Route path="/Clubs/view/" element={<ClubList/>} />
            <Route path="/Category/view/" element={<CategoryList/>} />
            <Route path="/Coachs/view/" element={<CoachList/>} />
            
            
            

            
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

 

Files
create athletes
add-athletes.component.js
all athletes
athletes.component.js
See oneAthletes 
athletes-get.component.js
First test with athletes.component.js
 <li className="nav-item">
              <Link to={"/Athletes/create"} className="nav-link">
                Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/Athletes/:id"} className="nav-link">
                Get a athletes
              </Link>
            </li> 
<Route path="/Athletes/create" element={<AddAthletes/>} />
<Route path="/Athletes/:id" element={<RetAthletes/>} />
*/
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

//export default React_page;
*/