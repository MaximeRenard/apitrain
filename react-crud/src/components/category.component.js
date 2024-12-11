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
    this.setActiveCategory = this.setActiveCategory.bind(this);
    

    this.state = {
      Categoryid: [],
      currentCategory: 'default',
  	  currentIndex: 'default'
    };
  }
 

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

  refreshList() {
    this.retrievecategory();
    this.setState({
      currentCategory: null,
      currentIndex: 0
    });
  }

  setActiveCategory(category, index) {
    this.setState({
      currentCategory: category,
      currentIndex: index
      
    });
  }



  render() {
    const { Categoryid,currentCategory, currentIndex } = this.state;

    return (
    <>
      <div className="list row">
	      <div className="col-md-6">
	          <h4>Category List</h4>
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
                    Get All async
                </button>
                <button 
                    className="m-3 btn btn-sm btn-danger"
                    onClick={this.refreshList}
                  >
                    refreshList
                </button>
                
	      </div>
        <div className="col-md-6">
            {currentCategory ? (
                <div>  
                  <h4>Detail List</h4>
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
                  <button className="m-3 btn btn-sm btn-danger">
                    <Link
                        to={"/Category/create"}
                        className="badge badge-warning"
                      >
                        to category add
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


*/
