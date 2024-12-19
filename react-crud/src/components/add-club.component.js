import React, { Component } from "react";
import ClubDataService from "../services/Club.service";
import { Link } from "react-router-dom";
//Router
import { withRouter } from '../common/with-router';
 class ClubAdd extends Component {
  constructor(props) {
    super(props);
    
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveclub = this.saveclub.bind(this);
    this.newclub = this.newclub.bind(this);

    this.state = {
      Clubid: null,
      Name: "",
      City:"",
      Address: "",
      Description: "",
    };
  }


 onChangeTitle(e) {
    this.setState( {
      Name: e.target.value
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



  // Create Category
  saveclub() {
    var data = {
      Name: this.state.Name,
      City: this.state.City,
      Address: this.state.Address,
      Description: this.state.Description
    };

    ClubDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.Clubid,
          Name: response.data.Name,
          City:response.data.City,
          Address: response.data.Adress,
          Description: response.data.Description,
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
  newclub() {
    this.setState({
      id: null,
      Name: "",
      City:"",
      Address: "",
      Description: "",
      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully category to master!</h4>
            <button className="btn btn-success" onClick={this.newclub}>
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
                id="Name"
                required
                value={this.state.Name}
                onChange={this.onChangeTitle}
                name="Name"
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

            <button onClick={this.saveclub} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
          <div>  
                  <button className="m-3 btn btn-sm btn-danger">
                    <Link
                        to={"/Clubs/view"}
                        className="badge badge-warning"
                      >
                        Back to club 
                    </Link>
                    
                    </button>
                    
          </div>
      </div>
    );
  }
            
}
export default withRouter(ClubAdd);
