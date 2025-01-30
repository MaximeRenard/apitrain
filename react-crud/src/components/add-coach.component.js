import React, { Component } from "react";
import ClubDataService from "../services/Coach.service";
import { Link } from "react-router-dom";
//Router
import { withRouter } from '../common/with-router';
 class ClubAdd extends Component {
  constructor(props) {
    super(props);
    
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeYears = this.onChangeYears.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeIdClub = this.onChangeIdClub.bind(this);
    this.savecoach = this.savecoach.bind(this);
    this.newcoach = this.newcoach.bind(this);

    this.state = {
      Coachid: null,
      Name: "",
      Years:"",
      City:"",
      Address: "",
      Description: "",
      Clubid:null
    };
  }


 onChangeTitle(e) {
    this.setState( {
      Namecoach: e.target.value
    });
  }
  onChangeYears(e) {

    this.setState( {
       Years: e.target.value
    });
  }
  onChangeCity(e) {

    this.setState( {
       City: e.target.value
    });
  }
  onChangeAddress(e) {
    this.setState( {
      Address: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      Description: e.target.value
      
    });
  }

  onChangeIdClub(e) {
    this.setState({
      Clubid: e.target.value
      
    });
  }



  // Create Category
  savecoach() {
       
    var data = {
      Name: this.state.Name,
      Years: this.state.Years,
      City: this.state.City,
      Address: this.state.Address,
      Description: this.state.Description,
      Clubid: this.state.Clubid
    };

    ClubDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.Coachid,
          Namecoach: response.data.Namecoach,
          Years:response.data.Years,
          City:response.data.City,
          Address: response.data.Adress,
          Description: response.data.Description,
          Clubid:response.data.Clubid,
          submitted: true
        });
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }
  // initialize new category
  newcoach() {
    this.setState({
      id: null,
      Namecoach: "",
      Years:null,
      Namecoach:null,
      City:"",
      Address: "",
      Description: "",
      Clubid:null,
      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully category to master!</h4>
            <button className="btn btn-success" onClick={this.newcoach}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="Name">Name</label>
              <input
                type="text"
                className="form-control"
                id="Namecoach"
                required
                value={this.state.Namecoach}
                onChange={this.onChangeTitle}
                name="Namecoach"
              />
            </div>

            <div className="form-group">
              <label htmlFor="Years">Years</label>
              <input
                type="text"
                className="form-control"
                id="Years"
                value={this.state.Years}
                onChange={this.onChangeYears}
                name="Years"
              />
            </div>

            <div className="form-group">
              <label htmlFor="City">City</label>
              <input
                type="text"
                className="form-control"
                id="City"
                value={this.state.City}
                onChange={this.onChangeCity}
                name="City"
              />
            </div>

            <div className="form-group">
              <label htmlFor="Address">Address</label>
              <input
                type="text"
                className="form-control"
                id="Address"
                value={this.state.Address}
                onChange={this.onChangeAddress}
                name="Address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="Description">Description</label>
              <input
                type="text"
                className="form-control"
                id="DescriptionCategory"
                value={this.state.Description}
                onChange={this.onChangeDescription}
                name="Description"
              />
            </div>

            <div className="form-group">
              <label htmlFor="Clubid">Club</label>
              <input
                type="text"
                className="form-control"
                id="Clubid"
                value={this.state.Clubid}
                onChange={this.onChangeIdClub}
                name="Clubid"
              />
            </div>

            <button onClick={this.savecoach} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
          <div>  
                  <button className="m-3 btn btn-sm btn-danger">
                    <Link
                        to={"/Coachs/view"}
                        className="badge badge-warning"
                      >
                        Back to coach
                    </Link>
                    
                    </button>
                    
          </div>
      </div>
    );
  }
            
}
export default withRouter(ClubAdd);
