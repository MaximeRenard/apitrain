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
    //delete
    this.removeAllAthlete = this.removeAllAthlete.bind(this);
    this.deleteAthlete = this.deleteAthlete.bind(this);
    // Retrieve category
    //this.removeAllAthlete = this.removeAllAthlete.bind(this);
    
    this.state = {
      Athletes: [],
      currentAthlete: null,
      currentIndex: 0
    };
  }
 
  handleChange(event) {    this.setState({value: event.target.value});  }
  handleSubmit(event) {
    alert('A id was submitted: ' + this.state.currentAthlete.Athleteid);
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
      currentIndex: 0
    });
  }
  removeAllAthlete() {
    AthletesDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteAthlete() {   
    
    AthletesDataService.delete(this.state.currentAthlete.Athleteid)
      .then(response => {
        console.log(response.data);
        this.props.router.navigate('/Athletes/view/');
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
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
            <h2>Athletes :</h2>
              
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
                    onClick={this.removeAllAthlete}
                >
                  Remove All
                </button>

                <button className="m-3 btn btn-sm btn-danger">
                      <Link
                          to={"/Athletes/create"}
                          className="badge badge-warning"
                        >
                          Add Athletes
                      </Link>

                </button>
          </div>
  	      
          <div className="col-md-6">
            {currentAthlete ? (
                <div>  
                  <h3>Detail Athletes : </h3>
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

                    <button 
                      className="m-3 btn btn-sm btn-danger"
                      onClick={this.deleteAthlete}
                      >
                      Delete
                    </button>

                

                  </div>
                  <div className="col-md-6">
                      <form onSubmit={this.handleSubmit}>
                         <label >ID search Athletes: 
                        <input  type="number" name ="Categoryid" value={this.state.currentAthlete.Athleteid}/>
                        </label>
                        <input type="reset" value="Reset" /> 
                         <input type="submit" value="Submit Forms" />
                      </form>
                        <br/>      
                  </div>
                </div>
                  
                ) : (

                <div>
                  <br />
                  <p>Please click on a Athlete...</p>
                </div>
            
            )}
          </div>

          
        </div>
      </>
    );
  }
}
export default withRouter(AthletesList);

