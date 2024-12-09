import HomeDataService from "../services/Home.service";
import React, { Component , useState, useEffect }  from "react";
import { withRouter } from '../common/with-router';


class formAthletes extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Please write a name',race: 'base'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitall = this.handleSubmitall.bind(this);
    this.handleChangerace = this.handleChangerace.bind(this);
    this.handleSubmitrace = this.handleSubmitrace.bind(this);
  }
  // Name
  handleChange(event) {    this.setState({value: event.target.value});  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  handleSubmitall(event) {
    alert('A name was submitted: ' + this.state.value + ' Race was submitted: ' + this.state.race);
    event.preventDefault();
  }
  // Race
  handleChangerace(event) {    this.setState({race: event.target.value});  }
  handleSubmitrace(event) {
    alert('Race was submitted: ' + this.state.race);
    event.preventDefault();
  }

  render() {
    return (
      <>
      <form onSubmit={this.handleSubmitall}>
          <label>
          Name: </label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />        
          
          <br/>
      
        <label>
          Pick your favorite race:
          <select value={this.state.race} onChange={this.handleChangerace}>            
            <option value="Beaucouze">Beaucouze</option>
            <option value="Cholet">Cholet</option>
            <option value="Cross">Cross</option>
          </select>
        </label>
        <br/><br/>
        <input type="submit" value="Submit Forms" />
      </form>
       
      </>

    );
  }
}
export default withRouter(formAthletes);
/*

*/