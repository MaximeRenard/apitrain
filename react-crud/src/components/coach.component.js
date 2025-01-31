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
    // Delete
    this.removeAllCoach = this.removeAllCoach.bind(this);
    this.deleteCoach = this.deleteCoach.bind(this);

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
  removeAllCoach() {
    CoachDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }
  deleteCoach() {   
    
    CoachDataService.delete(this.state.currentCoach.Coachid)
      .then(response => {
        console.log(response.data);
        this.props.router.navigate('/Coachs/view/');
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }



  render() {
    const { coachid,currentCoach, currentIndex } = this.state;

    return (
    <>
      <div className="list row">
	      <div className="col-md-6">
	          <h2>Coach :</h2>
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
	               <p><strong>coach {coach.Coachid}: </strong> {coach.Namecoach} : {coach.Years} years: {coach.Clubid} </p>
	                </li>
                ))}
            </ul>
                  <button 
                    className="m-3 btn btn-sm btn-danger"
                    onClick={this.getCoach}
                  >
                    Get Coach
                </button>
                <button 
                    className="m-3 btn btn-sm btn-danger"
                    onClick={this.refreshList}
                  >
                    refreshList
                </button>

                <button className="m-3 btn btn-sm btn-danger">
                    <Link
                        to={"/Coachs/create"}
                        className="badge badge-warning"
                      >
                        Add Coach 
                    </Link>
                    
                </button>
                <button
                    className="m-3 btn btn-sm btn-danger"
                    onClick={this.removeAllCoach}
                >
                  Remove All
                </button>
                
	      </div>
        <div className="col-md-6">
            {currentCoach ? (
                <div>  
                  <h3>Detail Coach : </h3>
                  <div>
                    <label>
                      <strong>ID:</strong>
                    </label>{" "}
                    {currentCoach.Coachid}
                  </div>
                  <div>
                    <label>
                      <strong>Name:</strong>
                    </label>{" "}
                    {currentCoach.Namecoach}
                  </div>
                  <div>
                    <label>
                      <strong>Years:</strong>
                    </label>{" "}
                    {currentCoach.Years}
                  </div>
                  <div>
                    <label>
                      <strong>City:</strong>
                    </label>{" "}
                    {currentCoach.City}
                  </div>
                  <div>
                    <label>
                      <strong>Description:</strong>
                    </label>{" "}
                    {currentCoach.Description}
                  </div>
                  <div>
                    <label>
                      <strong>Club:</strong>
                    </label>{" "}
                    {currentCoach.Clubid}
                  </div>
                </div>
                ) : (

              <div>
                <br />
                <p>Please click on a Coach...</p>
              </div>
              )}
              <button 
              className="m-3 btn btn-sm btn-danger"
              onClick={this.deleteCoach}
              >
              Delete
        </button>  
        </div>
        
     
      </div>
    </>
    );
  }
}
export default withRouter(CoachList);
