import React, { Component , useState, useEffect }  from "react";
import AthletesDataService from "../services/Athlete.service";
import { Link } from "react-router-dom";
//new
import { withRouter } from '../common/with-router';



// Class Exporté
// sauf si export default class router
class AthletesList extends Component {
  constructor(props) {
    super(props);
   
    this.retrieveAthletes = this.retrieveAthletes.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveAthlete = this.setActiveAthlete.bind(this);
    

    this.state = {
      Athletes: [],
      currentAthlete: null,
      currentIndex: -1
    };
  }
 

  componentDidMount() {
    this.retrieveAthletes();
  }

  retrieveAthletes() {
    
    AthletesDataService.getAll()
      .then(response => {
        this.setState({
          Athletes: response.data
        });
        console.log(response.data); 
      })
      .catch(e => {
        console.log(e);
      });
      return "Sucesss";
  }
  getData = async() => {
       
        await this.retrieveAthletes();
  };

  refreshList() {
    this.retrieveAthletes();
    this.setState({
      currentAthlete: null,
      currentIndex: -1
    });
  }

  setActiveAthlete(athlete, index) {
    this.setState({
      currentAthlete: athlete,
      currentIndex: index
    });
  }



  render() {
    const { Athletes, currentAthlete, currentIndex } = this.state;

    return (
      <div className="list row">
	      <div className="col-md-6">
	          <h4>Athletes List</h4>
              <p><strong>Get Athletes</strong></p>
	            <ul className="list-group">
	            {Athletes &&
	              Athletes.map((athlete, index) => (
	                <li
	                  className={
	                    "list-group-item " +
	                    (index === currentIndex ? "active" : "")
	                  }
	                  onClick={() => this.setActiveAthlete(athlete, index)}
	                  key={index}
	                >
	                  <p><strong>Get Athletes</strong></p> {athlete.Athleteid}
	                </li>
                ))}
            </ul>
                  <button 
                    className="m-3 btn btn-sm btn-danger"
                    onClick={this.getData}
                  >
                    Get All
                </button>
                
	      </div>  
     
      </div>
    );
  }
}
export default withRouter(AthletesList);