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
  // Get Formulaire
  getFormweb() {
    return http.get("/Form/");
  }

}  

export default new HomeDataService();