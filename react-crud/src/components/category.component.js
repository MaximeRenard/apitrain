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
      NameCategory: 'default',
  	  DescriptionCategory: 'default'
    };
  }
 

  componentDidMount() {
    this.retrievecategory();
  }

  retrievecategory() {
    // Get reponse
    alert("Passage retrieve")
    CategoryDataService.AllCategory()
    //alert("Passage AllCategory")
      .then(response => {
        this.setState({
          Categoryid: response.data,
      	  NameCategory: response.data,
  	  	  DescriptionCategory: response.data
        });
        
        
      })
      //console.log(response.data);

      .catch(e => {
      	alert(e)
        console.log(e);
      });
      //alert(response.data)
      alert("Passage retrieve Sucesss")
      return "Sucesss";
  }
  getCate = async() => {
       	alert("Passage async function")
        await this.retrievecategory();
  };

  refreshList() {
  	alert("Passage refreshList")
    this.retrievecategory();
    this.setState({
      Categoryid: [],
      NameCategory: 'default',
  	  DescriptionCategory:'default'
    });
  }

  setActiveCategory(category, index) {
    this.setState({
      Categoryid: [],
      NameCategory: category,
  	  DescriptionCategory: index
      
    });
  }



  render() {
    const { Categoryid, NameCategory, DescriptionCategory } = this.state;

    return (
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
	                    (index === DescriptionCategory ? "active" : "")
	                  }
	                  onClick={() => this.setActiveCategory(category, index)}
	                  key={index}
	                >
	                  <p><strong>Get Category : </strong> {category.NameCategory}</p>
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
     
      </div>
    );
  }
}
export default withRouter(CategoryList);