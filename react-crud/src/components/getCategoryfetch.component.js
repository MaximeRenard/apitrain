import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { withRouter } from '../common/with-router';
import axios from 'axios';

const Homes = () => {
  const url = "http://127.0.0.1:8080/api/Category/view/";
  // Data like base
  const [data, setData] = useState([]);
  /*const fetchInfo = () => { 
    return axios.get(url) 
        return axios.get(url).then((response) => setData(response.data));
  }

  useEffect(() => { 
        fetchInfo(); 
  }, [])
  */
  async function afficherFilms() {
  const reponse = await fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "unsafe-url", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    
  });
  const films = await reponse.text();
  const myObj = JSON.parse(films);
  //alert(myObj.title);
  alert(myObj.title)
  //console.log(myObj.title);
  //myDisplay(films);
  }
  function getCategorie(){
    try{
        var reponsecate = fetch("http://127.0.0.1:8080/api/Category/view/",{
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "default", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "include", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "same-origin", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      
    })
  }

  catch(error) {
  alert("Fetch failed, but we caught the error. Error: ", error.message)
  }
  const cate =  reponsecate.json();
  const myObj = JSON.parse(cate);
  alert(myObj)

  }

  return (
    <>
    <div className="App">
      <h1 style={{ color: "green" }}>using hook Library to Fetch Data</h1>
      <center>
        {data.map((dataObj, index) => {
          return (
            <div
              style={{
                width: "15em",
                backgroundColor: "#CD8FFD",
                padding: 2,
                borderRadius: 10,
                marginBlock: 10,
              }}
            >
              <p style={{ fontSize: 20, color: 'white' }}>{dataObj.name}</p>
            </div>
          );
        })}
      </center>
    </div>
    
    <button 
                    className="m-3 btn btn-sm btn-danger"
                    onClick={afficherFilms}
                  >
                    Get film
                </button>
    <button 
                    className="m-3 btn btn-sm btn-danger"
                    onClick={getCategorie}
                  >
                    Get categorie
                </button>
    </>
  );
};
export default withRouter(Homes);