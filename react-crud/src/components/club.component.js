import ClubDataService from "../services/Club.service";
import React, { Component , useState }  from "react";

import { Link } from "react-router-dom";
//Router
import { withRouter } from '../common/with-router';

//Find Club
class ClubList extends Component {
  constructor(props) {
    super(props);
   
    this.retrieveclub = this.retrieveclub.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveClub = this.setActiveClub.bind(this);
    
    // update
    //this.onChangeTitle = this.onChangeTitle.bind(this);
    //this.onChangeDescription = this.onChangeDescription.bind(this);
    // Create
    //this.saveClub = this.saveClub.bind(this);
    //this.newClub = this.newClub.bind(this);
    // delete
    this.removeAllClub = this.removeAllClub.bind(this);
    this.deleteClub = this.deleteClub.bind(this);

    this.state = {
      clubid: [],
      currentClub: 'default',
  	  currentIndex: 'default'
    };
  }
 

  componentDidMount() {
    this.retrieveclub();
  }

  retrieveclub() {
    ClubDataService.viewclub()
      .then(response => {
        this.setState({
          clubid: response.data,
        });
      })
      .catch(e => {
      	alert(e)
        console.log(e);
      });
      return "Sucesss";
  }
  getClub = async() => {
        await this.retrieveclub();
  };

  refreshList() {
    this.retrieveclub();
    this.setState({
      currentClub: null,
      currentIndex: 0
    });
  }

  setActiveClub(club, index) {
    this.setState({
      currentClub: club,
      currentIndex: index  
    });
  }
  removeAllClub() {
    ClubDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }
  deleteClub() {   
    
    ClubDataService.delete(this.state.currentClub.Clubid)
      .then(response => {
        console.log(response.data);
        this.props.router.navigate('/Clubs/view/');
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

   



  render() {
    const { clubid,currentClub, currentIndex } = this.state;

    return (
    <>
      <div className="list row">
	      <div className="col-md-6">
	          <h4>Club List</h4>
            <p> On click list appel de setActiveClub</p>
             
	            <ul className="list-group">
	            {clubid &&
	              clubid.map((club, index) => (
	                <li
                    className={
                      "list-group-item " +
                      (index === currentIndex  ? "active" : "")
                    }
                    onClick={() => this.setActiveClub(club, index)}
                    key={index}
                  >
	               <p><strong>club {club.Clubid}: </strong> {club.Name} : {club.City} : {club.Description} </p>
	                </li>

                ))}
            </ul>
                  <button 
                    className="m-3 btn btn-sm btn-danger"
                    onClick={this.getClub}
                  >
                    Get All async
                </button>
                <button 
                    className="m-3 btn btn-sm btn-danger"
                    onClick={this.refreshList}
                  >
                    refreshList
                </button>

                <button className="m-3 btn btn-sm btn-danger">
                      <Link
                          to={"/Clubs/create"}
                          className="badge badge-warning"
                        >
                          Add club for admin
                      </Link>
                </button>
                <button
                    className="m-3 btn btn-sm btn-danger"
                    onClick={this.removeAllClub}
                >
                  Remove All
                </button>
                
	      </div>
        <div className="col-md-6">
            {currentClub ? (
                <div>  
                  <h4>Detail Category : </h4>
                  <div>
                    <label>
                      <strong>ID:</strong>
                    </label>{" "}
                    {currentClub.Clubid}
                  </div>
                  <div>
                    <label>
                      <strong>Name:</strong>
                    </label>{" "}
                    {currentClub.Name}
                  </div>
                  <div>
                    <label>
                      <strong>Address:</strong>
                    </label>{" "}
                    {currentClub.Address}
                  </div>
                  <div>
                    <label>
                      <strong>City:</strong>
                    </label>{" "}
                    {currentClub.City}
                  </div>
                  <div>
                    <label>
                      <strong>Description:</strong>
                    </label>{" "}
                    {currentClub.Description}
                  </div>
                </div>

                
                ) : (

              <div>
                <br />
                <p>Please click on a Club...</p>
              </div>
              )}
              <button 
                      className="m-3 btn btn-sm btn-danger"
                      onClick={this.deleteClub}
                      >
                      Delete
              </button>
        </div> 
       
      </div>
    </>
    );
  }
}
export default withRouter(ClubList);
