import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/api/",
  headers: {
    "Content-type": "application/json"
  }
});
axios.get('/api/Athletes/view/')
  .then(response => {
    // Handle the data from the backend
    console.log(response.data);
  })
  .catch(error => {
    // Handle errors
    console.error('Error fetching data:', error);
  });