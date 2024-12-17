import React, { Component } from "react";
import AthletesDataService from "../services/Athlete.service";
import { Link } from "react-router-dom";
//Router
import { withRouter } from '../common/with-router';
 class AthleteAdd extends Component {
  constructor(props) {
    super(props);
    this.onChangeID = this.onChangeID.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeYears = this.onChangeYears.bind(this);
    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.onChangeHeight = this.onChangeHeight.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeFavorite = this.onChangeFavorite.bind(this);
    this.onChangeIdclub = this.onChangeIdclub.bind(this);
    this.onChangeIdcoach = this.onChangeIdcoach.bind(this);
    this.onChangeIdCategory = this.onChangeIdCategory.bind(this);
    this.saveAthlete = this.saveAthlete.bind(this);
    this.newAthlete = this.newAthlete.bind(this);

    this.state = {
      id: null,
      LastName: "",
      FirstName:"",
      Years:null,
      Weight:null,
      Height:null,
      City:"",
      FavoriteDistance:"",
      Clubid:null,
      Coachid:null,
      Categoryid: null, 

      submitted: false
     
    }
  }


  onChangeID(e) {
    this.setState({
      id: e.target.value
    });
  }

  onChangeLastName(e) {
    this.setState({
      LastName: e.target.value
    });
  }

  onChangeFirstName(e) {
    this.setState({
      FirstName: e.target.value
    });
  }

  onChangeYears(e) {
    this.setState({
      Years: e.target.value
    });
  }
  onChangeWeight(e) {
    this.setState({
      Weight: e.target.value
    });
  }
  onChangeHeight(e) {
    this.setState({
      Height: e.target.value
    });
  }
  onChangeCity(e) {
    this.setState({
      City: e.target.value
    });
  }
  onChangeFavorite(e) {
    this.setState({
      FavoriteDistance: e.target.value
    });
  }
  onChangeIdclub(e) {
    this.setState({
      Clubid: e.target.value
    });
  }
  onChangeIdcoach(e) {
    this.setState({
      Coachid: e.target.value
    });
  }
  onChangeIdCategory(e) {
    this.setState({
      Categoryid: e.target.value
    });
  }
  saveAthlete() {
    var data = {
      LastName: this.state.LastName,
      FirstName:this.state.FirstName,
      Years:this.state.Years,
      Weight:this.state.Weight,
      Height:this.state.Height,
      City:this.state.City,
      FavoriteDistance:this.state.FavoriteDistance,
      Clubid:this.state.Clubid,
      Coachid:this.state.Coachid,
      Categoryid: this.state.Categoryid
    };

    AthletesDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.Athleteid,
          LastName: response.data.LastName,
          FirstName:response.data.FirstName,
          Years:response.data.Years,
          Weight:response.data.Weight,
          Height:response.data.Height,
          City:response.data.City,
          FavoriteDistance:response.data.FavoriteDistance,
          Clubid:response.data.Clubid,
          Coachid:response.data.Coachid,
          Categoryid: response.data.Categoryid,
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newAthlete() {
    this.setState({
      id: null,
      LastName: "",
      FirstName:"",
      Years:null,
      Weight:null,
      Height:null,
      City:"",
      FavoriteDistance:"",
      Clubid:null,
      Coachid:null,
      Categoryid: null, 
      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully category to master!</h4>
            <button className="btn btn-success" onClick={this.newAthlete}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="LastName">LastName :</label>
              <input
                type="text"
                className="form-control"
                id="LastName"
                required
                value={this.state.LastName}
                onChange={this.onChangeLastName}
                name="LastName"
              />
            </div>

            <div className="form-group">
              <label htmlFor="FirstName">FirstName :</label>
              <input
                type="text"
                className="form-control"
                id="FirstName"
                value={this.state.FirstName}
                onChange={this.onChangeFirstName}
                name="FirstName"
              />
            </div>

            <div className="form-group">
              <label htmlFor="Years">Years :</label>
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
              <label htmlFor="Weight">Weight :</label>
              <input
                type="text"
                className="form-control"
                id="Weight"
                value={this.state.Weight}
                onChange={this.onChangeWeight}
                name="Weight"
              />
            </div>

            <div className="form-group">
              <label htmlFor="Height">Height :</label>
              <input
                type="text"
                className="form-control"
                id="Height"
                value={this.state.Height}
                onChange={this.onChangeHeight}
                name="Height"
              />
            </div>

            <div className="form-group">
              <label htmlFor="City">City :</label>
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
              <label htmlFor="Distance">Distance :</label>
              <input
                type="text"
                className="form-control"
                id="FavoriteDistance"
                value={this.state.FavoriteDistance}
                onChange={this.onChangeFavorite}
                name="FavoriteDistance"
              />
            </div>

            <div className="form-group">
              <label htmlFor="Clubid">Club :</label>
              <input
                type="text"
                className="form-control"
                id="Clubid"
                value={this.state.Clubid}
                onChange={this.onChangeIdclub}
                name="Clubid"
              />
            </div>

            <div className="form-group">
              <label htmlFor="Coachid">Coach :</label>
              <input
                type="text"
                className="form-control"
                id="Coachid"
                value={this.state.Coachid}
                onChange={this.onChangeIdcoach}
                name="Coachid"
              />
            </div>

            <div className="form-group">
              <label htmlFor="Categoryid">Category :</label>
              <input
                type="text"
                className="form-control"
                id="Categoryid"
                value={this.state.Categoryid}
                onChange={this.onChangeIdCategory}
                name="Categoryid"
              />
            </div>

            <button onClick={this.saveAthlete} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
          <div>  
                  <button className="m-3 btn btn-sm btn-danger">
                    <Link
                        to={"/Athletes/view"}
                        className="badge badge-warning"
                      >
                        Back to Athletes
                    </Link>
                    
                    </button>
                    
          </div>
      </div>
    );
  }
            
}
export default withRouter(AthleteAdd);