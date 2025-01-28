import React, { Component , useState, useEffect }  from "react";
import HomeDataService from "../services/Home.service";
import { Link } from "react-router-dom";
//new
import { withRouter } from '../common/with-router';
 

function FavoriteRace() {
  	const [race, setRace] = useState("Beaucouze");
    const [count, setCount] = useState(0);
    // useState
    const [record, setRecord] = useState({
      race: "Cholet",
      time: "38'34",
      year: "2024",
      distance: "10km"
    });
    // Calculation
     const [calculation, setCalculation] = useState(0);
    // useeffect time
    useEffect(() => {
     var number = 5; 
     let timer = setTimeout(() => {
      setCount((count) => count + number);
      }, 50);
     // Clear
    return () => clearTimeout(0)
  }, [0]);
    
    //calculate
    useEffect(() => {
    setCalculation(() => count * 2);
    }, [count]); // <- add the count variable here

    const updaterecord = () => {
      setRecord(previousState => {
        return { ...previousState, year: "2026" }
      });
    }
    

  	return(
      
    <>
      <div className="list row">
      <h2>News</h2>
	      <div className="col-md-6">
          <h3>Forum</h3>
	          <p>Vistor calculation : {count} </p>
            <button  name="Update" onClick={() => setCount((c) => (c / 100)*5)}>Speed calcul conversion v = d/t</button>
            <p>Calculation (c / 100)*5: {calculation}</p>
            <button  name="Clear" onClick={() => clearTimeout()}>Clear operation</button>
            <br/>
            
            <h3>Calendar</h3>
             
             <h5>My favorite race is {race}!</h5>
	         
            <button
			       type="button"
          	onClick={() => setRace("Cholet")}
        	   >Cholet</button>

        	<button
          	type="button"
          	onClick={() => setRace("Cross")}
        	>Cross</button>
        	<button
          	type="button"
          	onClick={() => setRace("Trail Apocalypse")}
        	>Trail</button>
        	<button
          	type="button"
          	onClick={() => setRace("Semi Marathon")}
        	>Semi</button> 
          
	     </div>
       <div className="col-md-6">
          <h3>Record</h3>

          <p>Record race : {record.race}</p>
            <p>
              It is {record.time} in {record.distance} from {record.year}.
            </p>
            <button
              type="button"
              onClick={updaterecord}
            >Update record</button>
          </div>
     
      </div>
    </>
   
    );
}

export default withRouter(FavoriteRace);
