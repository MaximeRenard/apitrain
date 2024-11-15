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
     let timer = setTimeout(() => {
      setCount((count) => count + 1);
      }, 50);
     // Clear
    return () => clearTimeout(timer)
  }, [0]);
    
    //calculate
    useEffect(() => {
    setCalculation(() => count * 2);
    }, [count]); // <- add the count variable here

    const updaterecord = () => {
      setRecord(previousState => {
        return { ...previousState, year: "2022" }
      });
    }
    

  	return(
      
    <>
      <div className="list row">
	      <div className="col-md-6">
	          <h1>I've rendered {count} times!</h1>
            <button  name="Update + 100" onClick={() => setCount((c) => c + 100)}>Add 100</button>
            <p>Calculation * 2: {calculation}</p>
            <button  name="Clear" onClick={() => clearTimeout()}>Clear</button>
             
             <h1>My favorite race is {race}!</h1>
	         
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
        <h1>Record race :{record.race}</h1>
      <p>
        It is {record.time} in {record.distance} from {record.year}.
      </p>
      <button
        type="button"
        onClick={updaterecord}
      >Update record</button>
     
      </div>
    </>
   
    );
}

export default withRouter(FavoriteRace);
