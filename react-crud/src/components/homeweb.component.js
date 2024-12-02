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
function Component2() {
  return (
    <>
      <h2>Component 2</h2>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h3>Component 3</h3>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h4>Component 4</h4>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h5>Component 5</h5>
      <h2>{`Hello ${user} again!`}</h2>
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
	const [userName, setUser] = useState("Jesse Hall");
	const previousUsername = useRef("");
	useEffect(() => {
    previousUsername.current = userName;
  }, [userName]);
	 // Useref
	const [inputValue, setInputValue] = useState("ahj");
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
		<UserContext.Provider value={userName}>
      <h1>{`Hello ${userName} with Hook tutoriel and context!`}</h1>
      <Component2 userName={userName} />
    </UserContext.Provider>   
		<h6>{`Hello ${userName} with button and default value error in Hook useState!`}</h6>
		
			 
				 <label htmlFor={nameId}>Your name:
				<input id={nameId} type="text"  value={userName} readOnly={false} onChange={(e) =>setUser(e.target.value)}/>
				</label>  
				<h2>Current Value: {userName}</h2>
      			<h2>Previous Value: {previousUsername.current}</h2>
				 {userName !== '' && <p>Your name is {userName}.</p>}<br/>
				
				<button type="button" onClick={(e) => setUser("Trail Apocalypse")}>Trail</button>
	      	
	      	<p> Set user work in all html document</p>
		
			<div className="App">
				<p> Nombre de visiteur : {num} </p>
	     		 	<p> Cliquez sur le bouton pour indiquer votre présence : </p>
	      			<IncrementButtonmore handleClick={handleClickmore} />
	      			<IncrementButtonless handleClick={handleClickless} />
	    	</div>
	<h3>Simply forms</h3>
	<form onSubmit={e => {
      e.preventDefault();
      alert('Submitting!');
    }}>
      <p>
        Radio buttons:
        <label>
          <input type="radio" name="myRadio" value="option1" />
          Option 1
        </label>
        <label>
          <input type="radio" name="myRadio" value="option2" />
          Option 2
        </label>
        <label>
          <input type="radio" name="myRadio" value="option3" />
          Option 3
        </label>
      </p>
      <button>Send</button>
    </form>
    <h2>Use ref</h2>
    <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    <h2>Focus input Acces</h2>
    <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
   	<h2>Tracking State Changes insere</h2>
   	<input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h6>Current Value: {inputValue}</h6>
      <h6>Previous Value: {previousInputValue.current}</h6>
 
	</body>
</html>
		
	  );


}
export default withRouter(Welcomepage);
