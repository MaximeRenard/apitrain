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
    this.retrieveAthletesbyid = this.retrieveAthletesbyid.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    
    this.state = {
      Athletes: [],
      currentAthlete: null,
      currentIndex: -1
    };
  }
 
  handleChange(event) {    this.setState({value: event.target.value});  }
  handleSubmit(event) {
    alert('A id was submitted: ' + this.state.currentIndex);
    event.preventDefault();
  }

  componentDidMount() {
    this.retrieveAthletes();
  }

  retrieveAthletesbyid(id){
    AthletesDataService.getid(id)
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
    const { Athletes,currentAthlete, currentIndex } = this.state;
    
    return (
      <>
        <div className="list row">
          <div className="col-md-6">
            <h4>Athletes List</h4>
              
              <ul className="list-group">
                {Athletes &&
                Athletes.map((athlete, index) => (
                  <li
                    className={
                      "list-group-item " +
                      (index === currentIndex  ? "active" : "")
                    }
                    onClick={() => this.setActiveAthlete(athlete, index)}
                    key={index}
                  >
                    {athlete.FirstName} : {athlete.Athleteid} : {athlete.Years} years old- 
                      Detail  Category: {athlete.Categoryid} - Coach : {athlete.Categoryid}
                      Club : {athlete.Clubid}
                  </li>

            
                ))};
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
  	      
          <div className="col-md-6">
            {currentAthlete ? (
                <div>  
                  <h4>Detail List</h4>
                  <div>
                    <label>
                      <strong>ID:</strong>
                    </label>{" "}
                    {currentAthlete.Athleteid}
                  </div>
                  <div>
                    <label>
                      <strong>FirstName:</strong>
                    </label>{" "}
                    {currentAthlete.FirstName}
                  </div>
                  <div>
                    <label>
                      <strong>Height:</strong>
                    </label>{" "}
                    {currentAthlete.Height}
                  </div>
                  <div>
                    <label>
                      <strong>FavoriteDistance:</strong>
                    </label>{" "}
                    {currentAthlete.FavoriteDistance}
                  </div>
                  <div>
                  <button className="m-3 btn btn-sm btn-danger">
                    <Link
                        to={"/Clubs/view/"}
                        className="badge badge-warning"
                      >
                        to club page
                    </Link>
                    </button>
                    <button className="m-3 btn btn-sm btn-danger">
                    <Link
                        to={"/Category/view/"}
                        className="badge badge-warning"
                      >
                        to category page
                    </Link>
                    </button>
                    <button className="m-3 btn btn-sm btn-danger">
                    <Link
                        to={"/Coachs/view/"}
                        className="badge badge-warning"
                      >
                        to coachs page
                    </Link>
                    </button>
                  </div>
                </div>
                  
                  ) : (

                  <div>
                    <br />
                    <p>Please click on a Tutorial...</p>
                  </div>
            
            )}
          </div>
          
        </div>
      </>
    );
  }
}
export default withRouter(AthletesList);

/*
+ currentAthlete.Athleteid
<div className="col-md-6">
          
        
      </div> 
<Link
                    to={"Athletes/view/" + currentAthletes.Athleteid}
                    className="badge badge-warning"
                  >
                    Edit
                  </Link>
*/

/*
<div className="col-md-6">
                <form onSubmit={this.handleSubmit}>
                 <label >ID search Athletes: 
                <input  type="number" name ="Categoryid" value={this.state.currentIndex}/>
                </label>
                <input type="reset" value="Reset" /> 
                 <input type="submit" value="Submit Forms" />
                </form>
                <br/>
                <p>Current Value: {currentIndex}</p>
                
      </div>

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
replacement by , 
<div className="col-md-6">
          {currentAthletes ? (
            <div>
              <h4>Tutorial</h4>
              <div>
                <label>
                  <strong>FirstName:</strong>
                </label>{" "}
                {currentAthletes.FirstName}
              </div>
              <div>
                <label>
                  <strong>Height:</strong>
                </label>{" "}
                {currentAthletes.Height}
              </div>
              <div>
                <label>
                  <strong>FavoriteDistance:</strong>
                </label>{" "}
                {currentAthletes.FavoriteDistance ? "Published" : "Pending"}
              </div>

              <Link
                to={"Athletes/view/" + currentAthletes.Athleteid}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
*/