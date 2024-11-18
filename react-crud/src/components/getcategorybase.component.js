import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { withRouter } from '../common/with-router';
import useFetch from "./useFetch";


const Home = () => {
 
  // Data like base
  const [datauser] = useFetch("https://jsonplaceholder.typicode.com/users");
  return (
    <>
    
    <div>
    <h1> Category Data</h1>
    {datauser &&
        datauser.map((itemuser) => {
          return <p key={itemuser.id}>{itemuser.name} : {itemuser.address.city}</p>;
        })}
    </div>
    </>
  );
};
export default withRouter(Home);

/*
The fetch logic may be needed in other components We implement this function in UseFetch.js
const [data, setData] = useState(null);
useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
 }, []);
 */