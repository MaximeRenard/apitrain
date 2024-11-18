import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { withRouter } from '../common/with-router';
import useFetch from "./useFetch";


const Home = () => {
  // Classic data
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  // Data like base
  const [datauser] = useFetch("https://jsonplaceholder.typicode.com/users");
  return (
    <>
    <div>
    <h1> Classic Data</h1>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </div>
    <div>
    <h1> Database</h1>
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