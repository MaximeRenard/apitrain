import CoachDataService from "../services/Coach.service";
import React, { Component , useState }  from "react";

import { Link } from "react-router-dom";
//Router
import { withRouter } from '../common/with-router';

//Find Coach of specific coach
class CoachList extends Component {
  constructor(props) {
    super(props);
   
    this.retrievecoach = this.retrievecoach.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveCoach = this.setActiveCoach.bind(this);
    

    this.state = {
      coachid: [],
      currentCoach: 'default',
  	  currentIndex: 'default'
    };
  }
 

  componentDidMount() {
    this.retrievecoach();
  }

  retrievecoach() {
    CoachDataService.view()
      .then(response => {
        this.setState({
          coachid: response.data,
        });
      })
      .catch(e => {
      	alert(e)
        console.log(e);
      });
      return "Sucesss";
  }
  getCoach = async() => {
        await this.retrievecoach();
  };

  refreshList() {
    this.retrievecoach();
    this.setState({
      currentCoach: null,
      currentIndex: 0
    });
  }

  setActiveCoach(coach, index) {
    this.setState({
      currentCoach: coach,
      currentIndex: index  
    });
  }



  render() {
    const { coachid,currentCoach, currentIndex } = this.state;

    return (
      <div className="list row">
	      <div className="col-md-6">
	          <h4>Coach List</h4>
            <p> On click list appel de setActiveCoach</p>
             
	            <ul className="list-group">
	            {coachid &&
	              coachid.map((coach, index) => (
	                <li
                    className={
                      "list-group-item " +
                      (index === currentIndex  ? "active" : "")
                    }
                    onClick={() => this.setActiveCoach(coach, index)}
                    key={index}
                  >
	               <p><strong>coach {coach.Coachid}: </strong> {coach.Name} : {coach.Description} </p>
	                </li>
                ))}
            </ul>
                  <button 
                    className="m-3 btn btn-sm btn-danger"
                    onClick={this.getCoach}
                  >
                    Get All async
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
export default withRouter(CoachList);

/*
                 Coachid int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
        Name varchar(20) NOT NULL,
        Years int(4) NOT NULL,
        City varchar(50) NOT NULL,
        Description varchar(255),
        Clubid int NOT NULL,

*/