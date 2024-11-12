//import React, { Component , useState, useEffect }  from "react";
import HomeDataService from "../services/Home.service";
//import { Link } from "react-router-dom";
//new
import { withRouter } from '../common/with-router';


// Welcome page
function Welcomepage(){
	var prenom="Maxime;"
	var number= 5;
	

	//alert("Bonjour");
	console.log(prenom.fontcolor("red")+ number);
	var val =0;
	while(val <=20){
		if(val=== 30) break;
		console.log("Ligne :" + val +"<br/>");
		val = val +5;

	}
	return(
		<html>
		<head>
		<script type="text/javascript">
			function controle(){
				// var test = document.formulaire.entree.value;
				alert("Vous avez ecrit :")
				//console.log("test")
			}
			</script>
		</head>
		<body>
		<div>
		<h1>Welcome with Javascript</h1>
		
			
			
			<form>
				<input type="button" value="cliquez ici" onclick="alert('bonjour')"/>
				<input type="button" value="Tous" onClick="{() =>Welcomepage()"/>
			</form>
			<form name="formulaire">
				<input type="text" name="entree" value = ""/><br/>
				<input type="button" value="Contrôler" onClick="{controle()}"/>
			</form>
		</div>
		</body>
		</html>
		
	  );

}
export default withRouter(Welcomepage);