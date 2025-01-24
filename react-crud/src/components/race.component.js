import RaceDataService from "../services/race.service";
import React, { Component , useState }  from "react";

//Router
import { withRouter } from '../common/with-router';

//Find race of specific race
class RaceList extends Component {
  constructor(props) {
    super(props);
   
    this.retrieverace = this.retrieverace.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveRace = this.setActiveRace.bind(this);
    //viewRaceResult
    this.retrieveresultrace = this.retrieveresultrace.bind(this);


    this.state = {
      idrace: [],
      currentrace: 'default',
  	  currentIndex: 'default',
      idresult:[]
    };
  }
 

  componentDidMount() {
    this.retrieverace();
  }
// Retrieve race info
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
//Retrieve result of race
    retrieveresultrace(id) {
    RaceDataService.resultrace(id)
      .then(response => {
        this.setState({
          idresult: response.data,
        });
      })
      .catch(e => {
        alert(e)
        console.log(e);
      });
      return "Sucesss";
  }

  

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
    const { idrace,currentrace, currentIndex,idresult } = this.state;

    return (
    <>
      <div className="list row">
	      <div className="col-md-6">
	          <h2>Race :</h2>
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
	               <p><strong>Race {race.Raceid}: </strong> {race.Name} : {race.Description} </p>
	                </li>
                ))}
            </ul>
                  <button 
                    className="m-3 btn btn-sm btn-danger"
                    onClick={this.getRace}
                  >
                    Get Race
                </button>
                <button 
                    className="m-3 btn btn-sm btn-danger"
                    onClick={this.refreshList}
                  >
                    refreshList
                </button>
                
	      </div>
        <div className="col-md-6">
          {currentrace ? (
          <div>
          <h2>Race Detail :</h2>
          <div>
                    <label>
                    <strong>ID:</strong>
                    </label>{" "}
                    {currentrace.Raceid}
                  </div>
                  <div>
                    <label>
                      <strong>Daterace:</strong>
                    </label>{""}
                    {currentrace.DateRace}
                  </div>
                  <div>
                    <label>
                      <strong>Distance:</strong>
                    </label>{" "}
                    {currentrace.Distance}
                  </div>
                  <div>
                    <label>
                      <strong>City:</strong>
                    </label>{" "}
                    {currentrace.City}
                  </div>
                  <div>
                    <label>
                      <strong>Description:</strong>
                    </label>{" "}
                    {currentrace.Description}
                  </div>
                  <div>
                    <label>
                      <strong>Club:</strong>
                    </label>{" "}
                    {currentrace.Clubid}
                  </div>
                  <div>
                  <h2>Race Result :</h2>
                    {idresult &&
                idresult.map((result, index) => (
                  <li
                    className={
                      "list-group-item " +
                      (index === currentIndex  ? "active" : "")
                    }
                    onClick={() => this.setActiveRace(result, index)}
                    key={index}
                  >

                 <p><strong>Result Race : {result.Raceid}: Athlete :</strong> {result.Athleteid} , Time : {result.Timerace}</p>
                  </li>
                ))}
                    <button 
                    className="m-3 btn btn-sm btn-danger"
                    onClick={() => this.retrieveresultrace(currentrace.Raceid)}
                  >
                    Get Race
                </button>
                  </div>
                </div>
                
                ) : (

              <div>
                <br />
                <p>Please click on a Race...</p>
              </div>
             
              )}
            
        </div> 
       
     
      </div>
    </>
    );
  }
}
export default withRouter(RaceList);
