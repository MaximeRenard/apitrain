import React, { Component , useState, useEffect }  from "react";
import AthletesDataService from "../services/Athlete.service";
import { Link } from "react-router-dom";
//Router
import { withRouter } from '../common/with-router';


// Class GET Athletes list
class AthletesList extends Component {
  constructor(props) {
    super(props);
   
    this.retrieveAthletes = this.retrieveAthletes.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveAthlete = this.setActiveAthlete.bind(this);
    

    this.state = {
      Athletes: [],
      currentAthlete: null,
      currentIndex: 0
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
      })
      .catch(e => {
        console.log(e);
      });
      return "Sucesss";
  }
  // async fonction
  getData = async() => {
       
        await this.retrieveAthletes();
  };

  refreshList() {
    this.retrieveAthletes();
    this.setState({
      currentAthlete: null,
      currentIndex: 0
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
	                  <p><strong>Athletes</strong> {athlete.Athleteid} : {athlete.FirstName}  - {athlete.Years} years old- 
                    Detail  Category: {athlete.Categoryid} - Coach : {athlete.Categoryid}
                    Club : {athlete.Clubid}</p>
	                </li>

                ))}
            </ul>
                  <button 
                    className="m-3 btn btn-sm btn-danger"
                    onClick={this.getData}
                  >
                    Get All
                </button>
                <button 
                    className="m-3 btn btn-sm btn-danger"
                    onClick={this.refreshList}
                  >
                    refreshList
                </button>
                
	      </div>  
     
      </div>
    );
  }
}
export default withRouter(AthletesList);

/*
Model
                   LastName varchar(20) NOT NULL,
        FirstName varchar(20)NOT NULL,
        Years int(4) NOT NULL,
        Weight FLOAT(5,2),
        Height FLOAT(4,2),
        City varchar(50) NOT NULL,
        FavoriteDistance varchar(20),
        Clubid int NOT NULL,
        FOREIGN KEY (Clubid) REFERENCES Clubs(Clubid),
        Coachid int NOT NULL,
        FOREIGN KEY (Coachid) REFERENCES Coach(Coachid),
        Categoryid int(11) NOT NULL,
*/