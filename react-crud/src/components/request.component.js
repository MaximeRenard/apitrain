import RequestDataService from "../services/request.service";
import React, { Component , useState }  from "react";

//Router
import { withRouter } from '../common/with-router';

// Logo example
// react page
import logo from '../logo.svg';

//Find race of specific race
class RequestDB extends Component {
  render(){
    return(
    	<>
       <div className="Request">
	      <header className="App-Request">
	        
	        <p>
	          Request on data base to get statistic of athletes, races, category 
	        </p>
	      </header>
	      <h1>Statistic and data</h1>
    </div>
    <img src={logo} className="App-logo" alt="logo" />
    </>

    );

  }
}


export default withRouter(RequestDB);