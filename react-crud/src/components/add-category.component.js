import React, { Component } from "react";
import CategoryDataService from "../services/Category.service";
import { Link } from "react-router-dom";
//Router
import { withRouter } from '../common/with-router';
 class CategoryAdd extends Component {
  constructor(props) {
    super(props);
    this.onChangeID = this.onChangeID.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeSex = this.onChangeSex.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveCategory = this.saveCategory.bind(this);
    this.newCategory = this.newCategory.bind(this);

    this.state = {
      id: null,
      NameCategory: "",
      Sexcategory:"",
      DescriptionCategory: "", 
    };
  }


  onChangeID(e) {
    this.setState({
      id: e.target.value
    });
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }
  onChangeSex(e) {
    this.setState({
      Sexcategory: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      DescriptionCategory: e.target.value
    });
  }

  saveCategory() {
    var data = {
      NameCategory: this.state.title,
      Sexcategory:this.state.Sexcategory,
      DescriptionCategory: this.state.DescriptionCategory
    };

    CategoryDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.Categoryid,
          NameCategory: response.data.NameCategory,
          Sexcategory: response.data.Sexcategory,
          DescriptionCategory: response.data.DescriptionCategory,
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newCategory() {
    this.setState({
      id: null,
      NameCategory: "",
      DescriptionCategory: "",

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully category to master!</h4>
            <button className="btn btn-success" onClick={this.newCategory}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="NameCategory">Name</label>
              <input
                type="text"
                className="form-control"
                id="NameCategory"
                required
                value={this.state.NameCategory}
                onChange={this.onChangeTitle}
                name="NameCategory"
              />
            </div>

            <div className="form-group">
              <label htmlFor="NameCategory">Sex</label>
              <input
                type="text"
                className="form-control"
                id="SexCategory"
                required
                value={this.state.SexCategory}
                onChange={this.onChangeSex}
                name="SexCategory"
              />
            </div>

            <div className="form-group">
              <label htmlFor="DescriptionCategory">Description</label>
              <input
                type="text"
                className="form-control"
                id="DescriptionCategory"
                value={this.state.DescriptionCategory}
                onChange={this.onChangeDescription}
                name="DescriptionCategory"
              />
            </div>

            <button onClick={this.saveCategory} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
          <div>  
                  <button className="m-3 btn btn-sm btn-danger">
                    <Link
                        to={"/Category/view"}
                        className="badge badge-warning"
                      >
                        Back to category 
                    </Link>
                    
                    </button>
                    
          </div>
      </div>
    );
  }
            
}
export default withRouter(CategoryAdd);