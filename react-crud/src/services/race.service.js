import http from "../http-common";
  
class RaceDataService{

  // Create data
  createrace(data) {
    return http.post("/race/create", data);
  }
  // Get all athlete
  viewrace(id) {
    return http.get(`/race/result/${id}`,id);
  }

}  

export default new RaceDataService();