import HomeDataService from "../services/Home.service";
//import { Link } from "react-router-dom";

import { withRouter } from '../common/with-router';
import React, { Component , useState, useEffect,createContext, useContext, useRef}  from "react";
// Provide Label 
import { useId } from 'react';

// Create context
const UserContext = createContext()
// Button + view
const IncrementButtonmore = (props) => {
  return (
  	
    <button onClick={props.handleClick}>+</button>
  );
}
//button - view
const IncrementButtonless = (props) => {
  return (
  	<button onClick={props.handleClick}>-</button>
  );
}
// Hook Context function
function information() {
  return (
    <>
      <h2>Your information 2</h2>
      <News />
    </>
  );
}

function News() {
  return (
    <>
      <h3>Athletism news</h3>
       <h4>News 2O25 </h4>
       <Nextrace />
    </>
  );
}
function Nextrace() {
  return (
    <>
      <h3>Nextrace in 2035</h3>
        <h4>Calendar</h4>
       <p>30/03/20255: Semi de Nuaillé</p>
    </>
  );
}

// Welcome page
function Welcomepage(){
	const [num, setNum] = useState(0)
	
  	const handleClickmore = (e) => {
    e.preventDefault()
    console.log('clicked')
    setNum(prev => prev += 1)
    

	}
	const handleClickless = (e) => {
    e.preventDefault()
    console.log('clicked')
    setNum(prev => prev -= 1)
	}
	/*const updateName = (newName) => {
      setUser(previousState => {
        return { ...previousState, user: newName e.target.name      });
    }*/
    // Get id on page
	const nameId = useId();
	// Use context
	// Component 1 function in html
	const [userName, setUser] = useState("Athletes");
	const previousUsername = useRef("");
	useEffect(() => {
    previousUsername.current = userName;
  }, [userName]);
	 // Useref
	const [inputValue, setInputValue] = useState("Maxime");
	const count = useRef(0);

	useEffect(() => {
	    count.current = count.current + 1;
	});
	// use ref focus input
	const inputElement = useRef();

  	const focusInput = () => {
    inputElement.current.focus();
    // Track value
	};
    const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);
	return(
		<html>
		<body>
    <h2>{`Welcome in ${userName} in apitrain web page!`}</h2>
    <br/>
		<UserContext.Provider value={userName}>
    <label htmlFor={nameId}>Enter Your name:
        <input id={nameId} type="text"  value={userName} readOnly={false} onChange={(e) =>setUser(e.target.value)}/>
        </label>
      
      <information userName={userName} />
    </UserContext.Provider>   
		
		<p>Previous name: {previousUsername.current}</p>
		{userName !== '' && <p>Your name is {userName}.</p>}<br/>
				
		<button type="button" onClick={(e) => setUser("Maxime")}>Author name</button>
	      	
	<br/>	
	<h3>Level Form:</h3>
	<form onSubmit={e => {
      e.preventDefault();
      alert('Submitting!');
    }}>
      <p>
        <ul>Your Level :

        <li><label>
          <input type="radio" name="myRadio" value="Loisir" />
          Loisir
        </label></li>
        <li><label>
          <input type="radio" name="myRadio" value="Bon" />
          Bon
        </label></li>
        <li><label>
          <input type="radio" name="myRadio" value="Confirmr" />
          Confirme
        </label></li>
        </ul> 
      </p>
      <button>Send</button>
    </form>
    
    <h5>Visit Count: {count.current}</h5>
    <div className="App">
        <p> Cliquez sur le bouton pour indiquer votre présence : </p>
        <IncrementButtonmore handleClick={handleClickmore} />
        <IncrementButtonless handleClick={handleClickless} />
    </div>
 
	</body>
</html>
		
	  );


}
export default withRouter(Welcomepage);
/*<h2>How Use ref</h2>
    <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      
     
    <h2>Focus input Acces</h2>
    <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
*/