import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// react page
import logo from './logo.svg';
import './App.css';



// import specific component
import AthletesList from "./components/athletes.component";
import Homepageapp from "./components/homeapi.component";
import Homepageweb from "./components/homeweb.component";
import Formpageweb from "./components/Form.component";
import CategoryList from "./components/category.component";
// Exemple with base
import GetCategory from "./components/getcategorybase.component";
import FetchCategory from "./components/getCategoryfetch.component";
import DataHook from "./components/usereducer.Hook";
import HookFetch from "./components/indexhook";
import Callback from "./components/index";

// import AddAthletes from "./components/add-athletes.component";
// import RetAthletes from "./components/athletes-get.component";

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
              
              <Link to={"/Category/view/"} className="nav-link">
                Category of athletes 
              </Link>
            </li>
            <li className="nav-item">
              
              <Link to={"/NewCategory/view/"} className="nav-link">
                Fetch in web base
              </Link>
            </li>
             <li className="nav-item">
              
              <Link to={"/Fetchexample/view/"} className="nav-link">
                Fetch GetCategory
              </Link>
            </li>
            <li className="nav-item">
              
              <Link to={"/Athletes/view/"} className="nav-link">
                Athletes
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
            <Route path="/Athletes/view/" element={<AthletesList/>} />
            <Route path="/Category/view/" element={<CategoryList/>} />
            <Route path="/NewCategory/view/" element={<GetCategory/>} />
            <Route path="/Fetchexample/view/" element={<FetchCategory/>} />
            
            

            
          </Routes>


        </div>
        <p>Aim : See category in fetch method</p>
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