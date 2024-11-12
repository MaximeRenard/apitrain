import React, { Component , useState, useEffect }  from "react";
import HomeDataService from "../services/Home.service";
import { Link } from "react-router-dom";
//new
import { withRouter } from '../common/with-router';
 

function FavoriteRace() {
  	const [race, setRace] = useState("Beaucouze");
    const [count, setCount] = useState(0);

    useEffect(() => {
     setTimeout(() => {
      setCount((count) => count + 1);
      }, 10000);
    });
  	return(
      
   
      <div className="list row">
	      <div className="col-md-6">
	          <h1>I've rendered {count} times!</h1>
             <p><strong>Get Home</strong></p>
             <h1>My favorite race is {race}!</h1>
	         
            <button
			type="button"
          	onClick={() => setRace("blue")}
        	>Blue</button>
        	<button
          	type="button"
          	onClick={() => setRace("red")}
        	>Red</button>
        	<button
          	type="button"
          	onClick={() => setRace("pink")}
        	>Pink</button>
        	<button
          	type="button"
          	onClick={() => setRace("green")}
        	>Green</button> 
          
	      </div>

     
      </div>
   
    );
  }

export default withRouter(FavoriteRace);
/*
 <button
            type="button"
            onClick={HomeDataService.getHomeapi()}
          >Get Home</button>
          Erreur axios
*/