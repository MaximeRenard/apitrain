import React, { Component , useState }  from "react";

//Router
import { withRouter } from '../common/with-router';


//Find race of specific race
class Contact extends Component {
  render(){
    return(
    	<>
       <div className="Contact">
	      <header className="Contac--header">
	        <h1>
	         Contact us
	        </h1>
	         <h2>Developpeur</h2>
	         <p>Maxime RENARD</p>
		         <p>Mail: maxime.renard@protonmail.com</p>
		         <p>Phone: +6 32 91 15 15</p>
		         <p>Github : </p>
		         <p>Linkedin : </p>
	         <h2>Project</h2>
	         	<h3>Skills</h3>
	         		<ul>
	         		<li>Programming</li>
		         		<ul>
		         		<li>Python</li>
		         		<li>HTML,CSS</li>
		         		<li>R</li>
		         		</ul>
		         	<li>Statistics</li>
	         		</ul>
	         <h2>CV</h2>
	         	<p>Dowload my CV</p>
	        
	      </header>
    	</div>
    </>

    );

  }
}


export default withRouter(Contact);