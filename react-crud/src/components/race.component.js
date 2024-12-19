import RaceDataService from "../services/race.service";
import React, { Component , useState }  from "react";

import { Link } from "react-router-dom";
//Router
import { withRouter } from '../common/with-router';

//Find race of specific race
class RaceList extends Component {
  constructor(props) {
    super(props);
   
    this.retrieverace = this.retrieverace.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveRace = this.setActiveRace.bind(this);
    

    this.state = {
      idrace: [],
      currentrace: 'default',
  	  currentIndex: 'default'
    };
  }
 

  componentDidMount() {
    this.retrieverace();
  }

  retrieverace() {
    RaceDataService.viewrace()
      .then(response => {
        this.setState({
          idrace: response.data,
        });
      })
      .catch(e => {
      	alert(e)
        console.log(e);
      });
      return "Sucesss";
  }
  getRace = async() => {
        await this.retrieverace();
  };

  refreshList() {
    this.retrieverace();
    this.setState({
      currentrace: null,
      currentIndex: 0
    });
  }

  setActiveRace(race, index) {
    this.setState({
      currentrace: race,
      currentIndex: index  
    });
  }



  render() {
    const { idrace,currentrace, currentIndex } = this.state;

    return (
      <div className="list row">
	      <div className="col-md-6">
	          <h4>race List</h4>
            <p> On click list appel de setActiveRace</p>
             
	            <ul className="list-group">
	            {idrace &&
	              idrace.map((race, index) => (
	                <li
                    className={
                      "list-group-item " +
                      (index === currentIndex  ? "active" : "")
                    }
                    onClick={() => this.setActiveRace(race, index)}
                    key={index}
                  >
	               <p><strong>race {race.idrace}: </strong> {race.Name} : {race.Description} </p>
	                </li>
                ))}
            </ul>
                  <button 
                    className="m-3 btn btn-sm btn-danger"
                    onClick={this.getRace}
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
export default withRouter(RaceList);
