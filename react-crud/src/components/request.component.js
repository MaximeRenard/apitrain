import RaceDataService from "../services/race.service";
import React, { Component , useState }  from "react";

import { Link } from "react-router-dom";
//Router
import { withRouter } from '../common/with-router';

// Logo exeaple
// react page
import logo from '../logo.svg';

//Find race of specific race
class RequestDB extends Component {
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
	          Create Request 
	        </a>
	      </header>
    </div>

    );

  }
}


export default withRouter(RequestDB);