import http from "../http-common";
  
class CoachDataService{

  // Create data
  create(data) {
    return http.post("/Coachs/create", data);
  }
  // Get all athlete
  view() {
    return http.get("/Coachs/view");
  }

}  

export default new CoachDataService();