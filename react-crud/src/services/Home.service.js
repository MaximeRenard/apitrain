import http from "../http-common";

class HomeDataService{
  // Get Home api
  getHomeapi() {
    return http.get("/Homeapi/");
  }
  // Get Home web
  getHomeweb() {
    return http.get("/Homeweb/");
  }

}  


/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);
//Time function
function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I have rendered {count} times!</h1>;
}
*/
export default new HomeDataService();