import http from "../http-common";
  
class RequestDataService{

   // Get all race
  getathletebycity() {
    return http.get("/Statistic/Athletes_city/");
  }
  

}  

export default new RequestDataService();
