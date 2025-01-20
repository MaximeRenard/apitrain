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
  // delete all Coach
  deleteAll() {
    return http.delete("/Coachs/delete");
  } 
  // Delete a single Coach with id
  delete(id) {
    return http.delete(`/Coachs/delete/${id}`);
  }

}  

export default new CoachDataService();