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

    this.state = {
      clubid: [],
      currentclub: 'default',
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
      currentclub: null,
      currentIndex: 0
    });
  }

  setActiveClub(club, index) {
    this.setState({
      currentclub: club,
      currentIndex: index  
    });
  }

   



  render() {
    const { clubid,currentclub, currentIndex } = this.state;

    return (
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
                
	      </div>  
     
      </div>
    );
  }
}
export default withRouter(ClubList);
