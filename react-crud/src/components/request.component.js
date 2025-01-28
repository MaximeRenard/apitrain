import RequestDataService from "../services/request.service";
import React, { Component , useState }  from "react";

//Router
import { withRouter } from '../common/with-router';

// Logo example
// react page
import logo from '../logo.svg';

class RequestDB extends Component {
	constructor(props) {
    super(props);
   	this.refreshList = this.refreshList.bind(this);
    this.retrieveathletebycity = this.retrieveathletebycity.bind(this);
    this.setActiverequest = this.setActiverequest.bind(this);

    this.state = {
      idrequest: [],
      currentrequest: 'default',
  	  currentIndex: 'default',
    };
  }
   retrieveathletebycity() {
    
    RequestDataService.getathletebycity()
      .then(response => {
        this.setState({
          idrequest: response.data
        }); 
      })
      .catch(e => {
        console.log(e);
      });
      return "Sucesss";
  }
  setActiverequest(request, index) {
    this.setState({
      currentrequest: request,
      currentIndex: index  
    });
  }
  refreshList() {
    this.retrieveathletebycity();
    this.setState({
      currentrequest: null,
      currentIndex: 0
    });
  }
  render(){
  	const { idrequest,currentrequest, currentIndex } = this.state;
    return(
    	<>
      <div className="Request">
	      <header className="App-Request">
	      	<h1>Statistic and Request</h1>
	      	<h5>
	          Request on data base to get more statistic of athletes, races, category 
	        </h5>
	      	<img src={logo} className="App-logo" alt="logo" />
	        
	      </header>
	      
	      	
	      	
	      <div className="athletescity">
	      	<h2> First Request : Athletes order by city</h2>
	      	 <ul className="list-group">
		      	{idrequest &&
		              idrequest.map((request, index) => (
		                <li
	                    className={
	                      "list-group-item " +
	                      (index === currentIndex  ? "active" : "")
	                    }
	                    onClick={() => this.setActiverequest(request, index)}
	                    key={index}
	                  >
		               		<p><strong>Athletes lives in {request.City} : </strong> Last name : {request.LastName} - FirstName : {request.FirstName} - Speciality : {request.FavoriteDistance} </p>
		                </li>
	          ))}
          </ul>
          <button 
                    className="m-3 btn btn-sm btn-danger"
                    onClick={this.refreshList}
                  >
                    Request Athletes by city
                </button>
	      </div>
	      
    </div>
    
    </>

    );

  }
}


export default withRouter(RequestDB);