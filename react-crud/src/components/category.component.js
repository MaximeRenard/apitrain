import CategoryDataService from "../services/Category.service";
import React, { Component , useState }  from "react";

import { Link } from "react-router-dom";
//Router
import { withRouter } from '../common/with-router';
//Find Category of specific category


class CategoryList extends Component {
  constructor(props) {
    super(props);
   
    this.retrievecategory = this.retrievecategory.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.getCategory = this.getCategory.bind(this);
    this.setActiveCategory = this.setActiveCategory.bind(this);
    //delete
    this.removeAllCategory = this.removeAllCategory.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);

    // Update
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.updateCategory = this.updateCategory.bind(this);

    // Create
    this.saveCategory = this.saveCategory.bind(this);
    this.newCategory = this.newCategory.bind(this);

    this.state = {
      Categoryid: [],
      currentCategory: 'default',
  	  currentIndex: 'default'
    };
  }
 
  /*componentDidMount() {
    this.getCategory();
  }*/
  componentDidMount() {
    this.retrievecategory();
  }

  retrievecategory() {
   
   
    CategoryDataService.AllCategory()
      .then(response => {
        this.setState({
          Categoryid: response.data,
        });
      })
      .catch(e => {
      	alert(e)
        console.log(e);
      });
      return "Sucesss";
  }
  getCate = async() => {
        await this.retrievecategory();
  };

  getCategory(id) {
    CategoryDataService.get(id)
      .then(response => {
        this.setState({
          currentCategory: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  refreshList() {
    this.retrievecategory();
    this.setState({
      currentCategory: null,
      currentIndex: 0
    });
  }
  removeAllCategory() {
    CategoryDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  setActiveCategory(category, index) {
    this.setState({
      currentCategory: category,
      currentIndex: index
      
    });
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function(prevState) {
      return {
        currentCategory: {
          ...prevState.currentCategory,
          NameCategory: title
        }
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;
    
    this.setState(prevState => ({
      currentCategory: {
        ...prevState.currentCategory,
        DescriptionCategory: description
      }
    }));
  }


  updateCategory() {
    CategoryDataService.update(
      this.state.currentCategory.Categoryid,
      this.state.currentCategory
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The Category was updated successfully!"
        });
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }
  // Create Category
  saveCategory() {
    var data = {
      NameCategory: this.state.currentCategory.NameCategory,
      DescriptionCategory: this.state.currentCategory.DescriptionCategory
    };

    CategoryDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.Categoryid,
          NameCategory: response.data.NameCategory,
          DescriptionCategory: response.data.DescriptionCategory,
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
  newCategory() {
    this.setState({
      Categoryid: null,
      NameCategory: "",
      DescriptionCategory: "",
    });
  }

  deleteCategory() {   
    
    CategoryDataService.delete(this.state.currentCategory.Categoryid)
      .then(response => {
        console.log(response.data);
        this.props.router.navigate('/Category/view/');
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }



  render() {
    const { Categoryid,currentCategory, currentIndex } = this.state;

    return (
    <>
      <div className="list row">
	      <div className="col-md-6">
	          <h2>Category :</h2>
            <p> On click list appel de setActiveCategory</p>
             
	            <ul className="list-group">
	            {Categoryid &&
	              Categoryid.map((category, index) => (
	                <li
                    className={
                      "list-group-item " +
                      (index === currentIndex  ? "active" : "")
                    }
                    onClick={() => this.setActiveCategory(category, index)}
                    key={index}
                  >
	               <p><strong>Category {category.Categoryid}: </strong> {category.NameCategory} : {category.DescriptionCategory} </p>
	                </li>
                ))}
            </ul>
                  <button 
                    className="m-3 btn btn-sm btn-danger"
                    onClick={this.getCate}
                  >
                    Get category
                </button>
              
                <button
                    className="m-3 btn btn-sm btn-danger"
                    onClick={this.removeAllCategory}
                >
                  Remove All
                </button>
                
                
	      </div>
        <div className="col-md-6">
            {currentCategory ? (
                <div>  
                  <h3>Detail Category : </h3>
                  <div>
                    <label>
                      <strong>ID:</strong>
                    </label>{" "}
                    {currentCategory.Categoryid}
                  </div>
                  <div>
                    <label>
                      <strong>Name:</strong>
                    </label>{" "}
                    {currentCategory.NameCategory}
                  </div>
                  <div>
                    <label>
                      <strong>Description:</strong>
                    </label>{" "}
                    {currentCategory.DescriptionCategory}
                  </div>
                  <div>
                  <br/>
                  <h4>Modify / Add Category : </h4>
                 
                  <form>
                    <div className="form-group">
                      <label htmlFor="NameCategory">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="NameCategory"
                        value={this.state.currentCategory.NameCategory}
                        onChange={this.onChangeTitle}
                        name="NameCategory"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="DescriptionCategory">Description</label>
                      <input
                        type="text"
                        className="form-control"
                        id="DescriptionCategory"
                        value={this.state.currentCategory.DescriptionCategory}
                        onChange={this.onChangeDescription}
                        name="DescriptionCategory"
                      />
                    </div>
                  </form>
                </div>
                <br/>
               
                  
                  <div>  
                    <button 
                      className="m-3 btn btn-sm btn-danger"
                      onClick={this.updateCategory}
                      >
                      Update
                    </button>

                    <button onClick={this.saveCategory} 
                        className="m-3 btn btn-sm btn-danger">
                          Add /Copy
                    </button>

                    <button 
                      className="m-3 btn btn-sm btn-danger"
                      onClick={this.deleteCategory}
                      >
                      Delete
                    </button>

                    <button className="m-3 btn btn-sm btn-danger">
                      <Link
                          to={"/Category/create"}
                          className="badge badge-warning"
                        >
                          Add category for admin
                      </Link>

                    </button>
                   
                  </div>

              </div>  
                  
              ) : (

              <div>
                <br />
                <p>Please click on a Category...</p>
              </div>
                
                  
            
            )}
        </div>

      </div>
    </>
    );
  }
}
export default withRouter(CategoryList);

/*
 <h4>Add category</h4>
                <button className="m-3 btn btn-sm btn-danger" onClick={this.newCategory}>
                  Add
                </button>
*/