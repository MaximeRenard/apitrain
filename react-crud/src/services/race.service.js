import http from "../http-common";
  
class RaceDataService{

  // Create data
  createrace(data) {
    return http.post("/race/create", data);
  }
  // Get all race
  viewrace() {
    return http.get("/race/view");
  }
  resultrace(id){
    return http.get(`/race/result/${id}`);
  }

}  

export default new RaceDataService();